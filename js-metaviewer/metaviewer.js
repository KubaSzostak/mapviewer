var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var metaViewer;
(function (metaViewer) {
    var cswSchema = "http://www.opengis.net/cat/csw/2.0.2";
    var isoSchema = "http://www.isotc211.org/2005/gmd";

    (function (config) {
        config.cswServiceUrl = "/geoportal/csw";

        //export var cswServiceUrl: string = "http://gptogc.esri.com/geoportal/csw";
        //export var cswServiceUrl: string = "http://deegree3-demo.deegree.org/csw-workspace/services/csw"
        //export var cswServiceUrl: string = "http://sdi.geoportal.gov.pl/csw202/csw.aspx"
        config.getRecordsParams = {
            service: "CSW",
            version: "2.0.2",
            outputFormat: "application/xml",
            REQUEST: "GetRecords",
            ElementSetName: "summary",
            resultType: "results",
            typeNames: "csw:Record",
            outputSchema: cswSchema,
            startPosition: 1,
            maxRecords: 99
        };

        config.getRecordByIdParams = {
            service: "CSW",
            version: "2.0.2",
            outputFormat: "application/xml",
            REQUEST: "GetRecordById",
            ElementSetName: "full",
            outputSchema: isoSchema,
            Id: ""
        };
    })(metaViewer.config || (metaViewer.config = {}));
    var config = metaViewer.config;

    // module config
    function setFilter(filter) {
        var filterEl = jQuery("#recordsListContainer").find(".ui-input-text");
        filterEl.val(filter);
        filterEl.trigger("change");
    }
    metaViewer.setFilter = setFilter;

    function setFilterFromUrl() {
        var params = novotive.urlParameters();
        if (params.filter) {
            setFilter(params.filter);
        }
    }

    function init() {
        //showProgressPage();
        jQuery(document).on("pageinit", "#records", loadRecords);

        //jQuery(document).on("pageinit", "#records", loadRecords); // always check for new records
        //jQuery(document).on("pagebeforecreate", "#details", function () { alert("pagebeforecreate : " + window.location.hash);});
        //jQuery(document).on("pagecreate", "#details", function () { alert("pagecreate : " + window.location.hash); });
        //jQuery(document).on("pagebeforeshow", "#details", function () { alert("pagebeforeshow : " + window.location.hash); });
        //jQuery(document).on("pageshow", "#details", function () { alert("pageshow : " + window.location.hash); });
        jQuery(document).on("pagebeforeshow", "#details", loadDetails);
    }
    metaViewer.init = init;

    function showRecordsContainer(id) {
        jQuery("#recordsContent").children().hide();
        jQuery("#" + id).show();
    }

    function showError(err) {
        jQuery("#recordPageErrorDsc").html(err.toHtml());
        showRecordsContainer("recordsErrorContainer");
    }

    function showErrorDialog(err) {
        showRecordsContainer("recordsListContainer");
        jQuery("#errorDialogMsg").html(err.toHtml());
        jQuery.mobile.changePage("#errorDialog", { role: "dialog", changeHash: true, transition: "none" });
    }

    function showListContainer() {
        showRecordsContainer("recordsListContainer");
    }
    metaViewer.showListContainer = showListContainer;

    var recordListLoaded = false;

    function loadRecords() {
        if (recordListLoaded) {
            showRecordsContainer("recordsListContainer");
            return;
        }

        jQuery("#AboutDialogCswUrl").text(config.cswServiceUrl);
        showRecordsContainer("recordsProgressContainer");

        var url = metaViewer.config.cswServiceUrl.split("?")[0] + "?" + jQuery.param(config.getRecordsParams);

        novotive.io.getXml(url, function (responseXml) {
            fillRecordsList(responseXml);
            showRecordsContainer("recordsListContainer");
            recordListLoaded = true;
            setFilterFromUrl();
        }, function (error) {
            error.setMessage("CSW service error");
            error.addDescription("Access to CSW service (" + config.cswServiceUrl + ") failed");
            showError(error);
        });
    }
    metaViewer.loadRecords = loadRecords;

    var summaryRecords = new Object();

    function fillRecordsList(xmlDoc) {
        var searchNode = novotive.dom.childNode(xmlDoc, "csw:GetRecordsResponse/csw:SearchResults");
        if (!(searchNode)) {
            var err = new novotive.log.LogRecord("Invalid XML format", null, "'csw:GetRecordsResponse/csw:SearchResults' path not found");
            err.addDescription((xmlDoc.textContent || "").substring(100));
            showError(err);
            return;
        }
        var recNodes = novotive.dom.childNodes(searchNode, "csw:SummaryRecord");
        if (recNodes.length < 1) {
            var err = new novotive.log.LogRecord("Empty search result", null, "'csw:SummaryRecord' not found");
            showError(err);
            return;
        }
        var resCount = jQuery(searchNode).attr("numberOfRecordsMatched");
        if (resCount <= 0) {
            var err = new novotive.log.LogRecord("Invalid XML format", null, "Empty results set");
            showError(err);
            return;
        }

        showRecordsContainer("recordsListContainer");

        if (resCount > config.getRecordsParams.maxRecords) {
            jQuery("#recordsRecordsCount").text(config.getRecordsParams.maxRecords);
            jQuery("#recordsResultsCount").text(resCount);
            jQuery("#recordsRecordsCountContainer").show();
        } else {
            jQuery("#recordsRecordsCountContainer").hide();
        }

        //var recNodes = xmlDoc.getElementsByTagNameNS(cswSchema, "SummaryRecord");
        var recordsList = jQuery("#recordsList");
        recordsList.empty();

        for (var i = 0; i < recNodes.length; i++) {
            var summaryRec = new gmd.SummaryRecord(recNodes[i]);
            var liBody = liRecordsDetails(summaryRec);
            recordsList.append('<li data-icon="false">' + liBody + '</li>');
            summaryRecords[summaryRec.id] = summaryRec;
        }

        jQuery("#records").page();
        recordsList.listview();
        recordsList.trigger('create');
        recordsList.listview("refresh");
    }

    function liRecordsDetails(summaryRec) {
        if (summaryRec.identifier.length < 1) {
            var lg = new novotive.log.LogRecord("Invalid csw:SummaryRecord format", null, "'dc:identifier' not found");
            return lg.toHtml();
        }

        var clickEvent = "metaViewer.showDetails('" + summaryRec.id + "');";

        var res = '';

        //res += '<a href="#" onclick="'+clickEvent+'">';
        res += '<h2>' + summaryRec.title + '</h2> \n';
        res += '<p class="description">' + summaryRec.abstract + '</p> \n';

        //res += '<p>' + recNode.abstract + '</p> \n';
        var keywords = summaryRec.subject;
        if (keywords.length > 0) {
            res += '<p class="keywords"> &#222; ' + keywords.join(" &#8226; ") + '</p>' + "\n";
        }

        //res += '<p>&nbsp;</p>' + "\n"
        res += '<div>' + " \n";
        res += '  <a href="#"  onclick="' + clickEvent + '"  data-mini="true" data-inline="true" ' + 'data-role="button" data-icon="info"  class="details-button" >' + languative.getPhrase("Details...") + "</a> \n";
        res += '</div>' + "\n ";

        //res += '</a>' + "\n";
        res += '' + "\n";

        return res;
    }

    function detailsIdFromUrl() {
        //return novotive.urlParameters().id;
        var id = "";
        if (window.location.hash.contains("?")) {
            //metaviewer.html#load?%7B0453BE18-90D9-4CBC-B864-688780D5149C%7D
            var params = window.location.hash.split("?")[1];
            id = decodeURIComponent(params);
        }
        return id;
    }

    function metadataUrl(id, schema) {
        config.getRecordByIdParams.outputSchema = schema;
        config.getRecordByIdParams.Id = id;
        return config.cswServiceUrl.split("?")[0] + "?" + jQuery.param(config.getRecordByIdParams);
    }

    function detailsUrl(id) {
        //return "javascript:jQuery.mobile.changePage('#details?" + id + "', { role: 'page', changeHash: false, transition: 'none' });";
        //return "javascript:metaViewer.showDetails('" + id + "');";
        //return "#load?" + encodeURIComponent( id) + "";
        return "#details?" + encodeURIComponent(id);
        //return "?id=" + encodeURIComponent(id) + "#details";
    }

    var detailsIdLoaded = "";
    var detailsIdToLoad = "";

    function showDetails(id) {
        detailsIdToLoad = id;
        jQuery.mobile.changePage('#details', { role: 'page', changeHash: true, transition: 'none' });
        //var url = detailsUrl(id);
        //window.location.replace(url);
        //loadDetails();
    }
    metaViewer.showDetails = showDetails;

    function loadDetails() {
        var urlId = detailsIdFromUrl();
        if (urlId) {
            detailsIdToLoad = urlId;
        }
        if (!(detailsIdToLoad)) {
            showErrorDialog(new novotive.log.LogRecord("Missing parameter value: id=null"));
            return;
        }

        if (detailsIdLoaded != detailsIdToLoad) {
            jQuery("#detailsContent").children().hide();
            jQuery("#detailsProgressContainer").show();

            var url = metadataUrl(detailsIdToLoad, isoSchema);
            novotive.io.getXml(url, function (responseXml) {
                try  {
                    responseXml["xmlUrl"] = url;
                    fillDetails(detailsIdToLoad, responseXml);
                    jQuery("#detailsContent").children().show();
                    jQuery("#detailsProgressContainer").hide();
                    detailsIdLoaded = detailsIdToLoad;
                    //detailsIdToLoad = "";
                } catch (e) {
                    var errLog = new novotive.log.LogError(e);
                    errLog.setMessage("Unexpected error");
                    showErrorDialog(errLog);
                }
            }, function (error) {
                error.setMessage("CSW service error");
                showErrorDialog(error);
            });
        } else {
            jQuery("#detailsContent").children().show();
            jQuery("#detailsProgressContainer").hide();
        }
    }
    metaViewer.loadDetails = loadDetails;

    function getTag(tag, body, cssClass) {
        var cls = "";
        if (cssClass)
            cls = ' class="' + cssClass + '" ';
        if (cssClass == "bold")
            cls = ' style="font-weight: bold;" ';
        if (cssClass == "padding-bottom")
            cls = ' style="padding-bottom: 0.5em;" ';
        if (cssClass == "padding-top")
            cls = ' style="padding-top: 0.5em;" ';

        if (body)
            return '<' + tag + ' ' + cls + '>' + body + '</' + tag + '> ' + "\n";
else
            return "";
    }

    function getKeyValueTag(keyPhrase, value, br) {
        var res = "";

        var spaceDown = '';
        if (br)
            var spaceDown = ' style = "padding-bottom: 0.5em;" ';

        if (value) {
            res += '<p ' + spaceDown + ' >';

            var keyLng = languative.getPhrase(keyPhrase);

            if (br)
                res += getTag("span", keyLng, "bold") + '<br />';
else
                res += keyLng + ': ';

            res += value;
            res += '</p>' + "\n";
        }
        return res;
    }

    function getTitleTag(phraseId) {
        return getTag("h3", languative.getPhrase(phraseId));
    }

    function getSpaceTag() {
        return '<p style="font-size:0.2em; margin: 0; padding: 0;">&nbsp;</p>' + "\n";
    }

    function getItemsTag(items, phraseId) {
        if (!(items) || (items.length < 1))
            return "";

        var langItems = new Array();
        for (var i = 0; i < items.length; i++) {
            var langItem = languative.findPhrase(phraseId + "_" + items[i]);
            if (!(langItem)) {
                var item = items[i].toString() || items[i];
                langItem = languative.getPhrase(item);
            }
            if (langItem.replaceUrlWithHtmlLinks) {
                langItem = langItem.replaceUrlWithHtmlLinks("_blank", "external");
            }
            if (langItem) {
                langItems.push(langItem);
            }
        }

        var itemsBody = "&#8226; " + langItems.join("<br /> &#8226; ");
        if (phraseId)
            return getKeyValueTag(phraseId, itemsBody, true);
else
            return getTag("p", itemsBody, "padding-bottom");
    }

    function fillCswDetails(id, err) {
        var summaryRec = summaryRecords[id];
        if (!(summaryRec)) {
            showErrorDialog(err);
            return;
        }

        var detailsList = jQuery("#detailsList");
        detailsList.empty();

        function addLi(liBody) {
            if (liBody)
                detailsList.append('<li data-icon="false">' + liBody + '</li>');
        }

        jQuery("#detailsTitle").text(summaryRec.title);
        jQuery("#detailsDate").text("");
        jQuery("#detailsAbstract").text(summaryRec.abstract);

        initButton("detailsInfoButton", null);
        initButton("detailsOrderButton", null);
        initButton("detailsDownloadButton", null);
        initButton("detailsDownloadShpButton", null);
        initButton("detailsSearchButton", null);

        //getItemsTag
        addLi(liCswMetadata(summaryRec));
        addLi(liCswKeywords(summaryRec));
        addLi(liCswDistribution(summaryRec));

        initDetailsComponents();
        jQuery.mobile.changePage("#details", { role: "page", changeHash: true, transition: "slide" });
    }

    function fillDetails(id, xmlDoc) {
        showRecordsContainer("recordsListContainer");

        var responseNode = novotive.dom.childNode(xmlDoc, "csw:GetRecordByIdResponse");
        if (!(responseNode)) {
            var err = new novotive.log.LogRecord("Invalid XML format", xmlDoc["xmlUrl"], "'csw:GetRecordByIdResponse' path not found");
            fillCswDetails(id, err);
            return;
        }
        var metadataNode = novotive.dom.childNode(responseNode, "gmd:MD_Metadata");
        if (!(metadataNode)) {
            var err = new novotive.log.LogRecord("Invalid XML format", xmlDoc["xmlUrl"], "Empty metadata context");
            fillCswDetails(id, err);
            return;
        }

        var metadata;
        try  {
            metadata = new gmd.Metadata(metadataNode);
        } catch (e) {
            var err = new novotive.log.LogError(e);
            err.setMessage("Invalid metadata XML format");
            fillCswDetails(id, err);
            return;
        }

        var liNodes = null;
        var detailsList = jQuery("#detailsList");
        detailsList.empty();

        function addLi(liBody) {
            if (liBody)
                detailsList.append('<li data-icon="false">' + liBody + '</li>');
        }

        var ident = metadata.identification;

        jQuery("#detailsTitle").text(ident.citation.title);
        if (ident.citation.dates.length > 0) {
            jQuery("#detailsDate").text(ident.citation.dates[0].toString());
        } else {
            jQuery("#detailsDate").text("");
        }
        jQuery("#detailsAbstract").text(ident.abstract);

        initDistributionButtons(metadata.distribution);

        addLi(liMetadata(metadata));
        addLi(liSpatialInfo(metadata));
        addLi(liQuality(metadata.dataQuality));
        addLi(liKeywords(ident));
        addLi(liConstraints(ident.constraints));
        addLi(liDistribution(metadata.distribution));
        addLi(liContact(ident.pointOfContact));

        var graphicsOverview = metadata.identification.graphicOverview;

        initDetailsComponents();
        jQuery.mobile.changePage("#details", { role: "page", changeHash: true, transition: "slide" });
    }

    function initDetailsComponents() {
        jQuery("#details").page();

        var detailsList = jQuery("#detailsList");
        detailsList.listview();
        detailsList.listview("refresh");
        //detailsList.trigger("create").listview("refresh");
    }

    function getKeywordsLists(parentNode) {
    }

    function liIdentification(identNode) {
    }

    function liKeywords(ident) {
        var res = "";

        for (var i = 0; i < ident.keywords.length; i++) {
            var kwd = ident.keywords[i];
            if (kwd.thesaurusName) {
                res += getTag("p", kwd.thesaurusName.title, "bold");
                res += getTag("p", kwd.thesaurusName.dates.join(" | "));
            } else {
                res += getTag("p", languative.getPhrase("otherKeywords"), "bold");
            }
            res += getItemsTag(kwd.keywords);
        }
        res += getItemsTag(ident.topicCategory, "topicCategory");

        if (res)
            res = getTitleTag("descriptiveKeywords") + res;
        return res;
    }

    function liCswKeywords(rec) {
        var res = "";
        res += getItemsTag(rec.subject, "");
        if (res)
            res = getTitleTag("descriptiveKeywords") + res;
        return res;
    }

    function liConstraints(constraints) {
        var res = "";

        res += getItemsTag(constraints.useLimitation, "useLimitation");
        res += getKeyValueTag("accessConstraints", languative.getPhrase(constraints.accessConstraints), true);
        res += getItemsTag(constraints.otherConstraints, "otherConstraints");

        if (res)
            res = getTitleTag("resourceConstraints") + res;

        return res;
    }

    function liContact(contacts) {
        var res = "";
        if (contacts.length < 1)
            return res;

        res += getTitleTag("Contact");
        for (var i = 0; i < contacts.length; i++) {
            var c = contacts[i];
            res += '<p style="padding-bottom: 0.5em;" >';
            if (c.organisation)
                res += '<strong>' + c.organisation + '</strong>';
            if (c.role) {
                if (c.organisation)
                    res += ' - ';
                res += languative.getPhrase(c.role);
                ;
            }
            if (c.email) {
                if (c.organisation || c.role)
                    res += '<br />';
                res += c.email;
            }
            res += '</p>' + "\n";
        }
        return res;
    }

    function initButton(buttonId, url) {
        var btn = jQuery("#" + buttonId);
        if (url) {
            btn.show();
            btn.attr("href", url);
        } else {
            btn.hide();
        }
    }

    function isShpUrl(url) {
        // http://192.168.1.158:8080/geoserver/sf/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sf:archsites&maxFeatures=50&outputFormat=SHAPE-ZIP
        url = url.toLowerCase();
        var geoserverShp = "outputFormat=SHAPE-ZIP".toLowerCase();
        return url.contains(geoserverShp, "shapefile", "shp.zip");
    }

    function initDownloadButtons(downloadBtnId, downloadShpBtnId, urls) {
        // First look for shp
        var shpUrl = "";
        for (var i = 0; i < urls.length; i++) {
            if (isShpUrl(urls[i])) {
                shpUrl = urls[i];
                break;
            }
        }
        initButton("detailsDownloadShpButton", shpUrl);

        // then select 'standard' download option
        var downUrl = "";
        for (var i = 0; i < urls.length; i++) {
            if (urls[i] != shpUrl) {
                downUrl = urls[i];
                break;
            }
        }
        initButton("detailsDownloadButton", downUrl);
    }

    function initDistributionButtons(distr) {
        initButton("detailsInfoButton", distr.onLineFunctions.information[0]);
        initButton("detailsOrderButton", distr.onLineFunctions.order[0]);
        initDownloadButtons("detailsDownloadButton", "detailsDownloadShpButton", distr.onLineFunctions.download);
        initButton("detailsSearchButton", distr.onLineFunctions.search[0]);
    }

    function liDistribution(distr) {
        var res = "";

        res += getItemsTag(distr.format, "distributionFormat");
        res += getItemsTag(distr.onLineFunctions.download, "onLineTransfer_download");
        res += getItemsTag(distr.onLineFunctions.information, "onLineTransfer_information");
        res += getItemsTag(distr.onLineFunctions.offlineAccess, "onLineTransfer_offlineAccess");
        res += getItemsTag(distr.onLineFunctions.order, "onLineTransfer_order");
        res += getItemsTag(distr.onLineFunctions.search, "onLineTransfer_search");
        res += getItemsTag(distr.onLineFunctions.undefined, "onLineTransfer_undefined");

        if (res)
            res = getTitleTag("Distribution") + res;

        return res;
    }

    function liCswDistribution(rec) {
        var res = "";

        res += getItemsTag(rec.references, "onLineTransfer_undefined");

        if (res)
            res = getTitleTag("Distribution") + res;

        return res;
    }

    function liSpatialInfo(metadata) {
        var res = "";

        res += getItemsTag(metadata.referenceSystem, "referenceSystemInfo");
        res += getItemsTag(metadata.identification.spatialRepresentationType, "spatialRepresentation");
        res += getItemsTag(metadata.identification.spatialResolution, "spatialResolution");
        res += getItemsTag(metadata.identification.language, "language");

        if (res)
            res = getTitleTag("spatialInfo") + res;

        return res;
    }

    function liQuality(quality) {
        var res = "";

        //res += getKeyValueTag("qualityScope", quality.scope);
        //if (res)
        //    res += getSpaceTag();
        res += getKeyValueTag("lineageStatement", quality.lineage, true);

        for (var i = 0; i < quality.report.length; i++) {
            var rp = quality.report[i];
            res += getTag("p", rp.specification.title, "bold");
            res += getTag("p", rp.specification.dates.join(" | "));
            res += getKeyValueTag("conformancePass", languative.getYesNo(rp.pass));
            res += getTag("p", rp.explanation, "description");
            res += getSpaceTag();
        }

        if (res)
            res = getTitleTag("dataQuality") + res;

        return res;
    }

    function metadataLinks() {
        var res = "";

        var idLink = '<a href="' + detailsUrl(detailsIdToLoad) + '" rel="external">' + detailsIdToLoad + '</a>';
        res += getKeyValueTag("metadataId", idLink);

        var schemaBody = "<strong>" + languative.getPhrase("metadataSchema") + "</strong><br />";
        schemaBody += ' &#8226; <a href="' + metadataUrl(detailsIdToLoad, isoSchema) + '" rel="external">' + languative.getPhrase("isoMetadataSchema") + '</a><br />';
        schemaBody += ' &#8226; <a href="' + metadataUrl(detailsIdToLoad, cswSchema) + '" rel="external">' + languative.getPhrase("cswMetadataSchema") + '</a><br />';

        res += getTag("p", schemaBody, "padding-top");
        return res;
        //<br /> &#8226;
    }

    function liMetadata(metadata) {
        var res = "";
        res += getTitleTag("Metadata");
        res += getTag("p", metadata.metadataStandardName, "bold");
        res += getTag("p", metadata.metadataStandardVersion);

        res += getKeyValueTag("dateStamp", metadata.dateStamp);
        res += metadataLinks();

        return res;
    }

    function liCswMetadata(rec) {
        var res = "";
        res += getTitleTag("Metadata");
        res += getKeyValueTag("dateStamp", rec.modified);
        res += getKeyValueTag("type", rec.type);
        res += metadataLinks();

        return res;
    }
})(metaViewer || (metaViewer = {}));

var gmd;
(function (gmd) {
    /*
    export function nodeToValue<T>(node: Node, tagName?: string, nodeToItem: (chNode: Node) => T) {
    var ch = novotive.dom.childNode(node, tagName);
    if (ch)
    return nodeToItem(ch);
    else
    return undefined;
    }*/
    var GmdBase = (function () {
        function GmdBase(_node) {
            this._node = _node;
        }
        GmdBase.prototype.childNodes = function (path) {
            return novotive.dom.childNodes(this._node, path);
        };

        GmdBase.prototype.childNode = function (path) {
            return novotive.dom.childNode(this._node, path);
        };

        GmdBase.prototype.childValue = function (path) {
            return novotive.dom.childValue(this._node, path);
        };

        GmdBase.prototype.childValues = function (path) {
            return novotive.dom.childValues(this._node, path);
        };

        GmdBase.prototype.childAttr = function (path, attrName) {
            return novotive.dom.childAttr(this._node, path, attrName);
        };

        GmdBase.prototype.gcoValue = function (gcoType, path) {
            if (path)
                return this.childValue(path + "/" + gcoType);
else
                return this.childValue(gcoType);
        };

        GmdBase.prototype.gcoString = function (path) {
            return this.gcoValue("gco:CharacterString", path);
        };

        GmdBase.prototype.gcoDate = function (path) {
            return this.gcoValue("gco:Date", path);
        };

        GmdBase.prototype.gcoBoolean = function (path) {
            var val = this.gcoValue("gco:Boolean", path);
            return Boolean(val);
        };

        GmdBase.prototype.gcoDecimal = function (path) {
            var val = this.gcoValue("gco:Decimal", path);
            return Number(val);
        };

        GmdBase.prototype.nodesToArray = function (path, nodeToItem) {
            var nodes = this.childNodes(path);
            var res = new Array();
            for (var i = 0; i < nodes.length; i++) {
                var val = nodeToItem(nodes[i]);
                if (val)
                    res.push(val);
            }
            return res;
        };
        return GmdBase;
    })();
    gmd.GmdBase = GmdBase;

    // ---------------------------------------------------------------------------------------------
    var SummaryRecord = (function (_super) {
        __extends(SummaryRecord, _super);
        function SummaryRecord(node) {
            _super.call(this, node);
            this.identifier = new Array();
            this.subject = new Array();
            this.references = new Array();
            this.identifier = this.childValues("dc:identifier");
            this.title = this.childValue("dc:title");
            this.type = this.childValue("dc:type");
            this.subject = this.childValues("dc:subject");
            this.references = this.childValues("dct:references");
            this.modified = this.childValue("dct:modified");
            this.abstract = this.childValue("dct:abstract");

            if (this.identifier.length > 0) {
                this.id = this.identifier[0];
            }
        }
        return SummaryRecord;
    })(GmdBase);
    gmd.SummaryRecord = SummaryRecord;

    // ---------------------------------------------------------------------------------------------
    var Date = (function (_super) {
        __extends(Date, _super);
        function Date(node) {
            _super.call(this, node);
            this.date = this.gcoDate("gmd:CI_Date/gmd:date");
            this.dateType = this.childValue("gmd:CI_Date/gmd:dateType/gmd:CI_DateTypeCode");
        }
        Date.prototype.toString = function () {
            var res = this.date;
            if (this.dateType)
                res += " (" + this.dateType + ")";
            return res;
        };
        return Date;
    })(GmdBase);
    gmd.Date = Date;

    var ResponsibleParty = (function (_super) {
        __extends(ResponsibleParty, _super);
        function ResponsibleParty(node) {
            _super.call(this, node);
            this.organisation = this.gcoString("gmd:CI_ResponsibleParty/gmd:organisationName");
            this.email = this.gcoString("gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress");
            this.role = this.childValue("gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode");
        }
        return ResponsibleParty;
    })(GmdBase);
    gmd.ResponsibleParty = ResponsibleParty;

    var BrowseGraphic = (function (_super) {
        __extends(BrowseGraphic, _super);
        function BrowseGraphic(node) {
            _super.call(this, node);
            this.file = this.gcoString("gmd:MD_BrowseGraphic/gmd:fileName");
            this.description = this.gcoString("gmd:MD_BrowseGraphic/gmd:fileDescription");
            this.type = this.gcoString("gmd:MD_BrowseGraphic/gmd:fileType");
        }
        return BrowseGraphic;
    })(GmdBase);
    gmd.BrowseGraphic = BrowseGraphic;

    var Citation = (function (_super) {
        __extends(Citation, _super);
        function Citation(node) {
            _super.call(this, node);
            this.dates = new Array();
            this.title = this.gcoString("gmd:CI_Citation/gmd:title");

            this.dates = this.nodesToArray("gmd:CI_Citation/gmd:date", function (chNode) {
                return new Date(chNode);
            });
        }
        return Citation;
    })(GmdBase);
    gmd.Citation = Citation;

    var ReferenceSystem = (function (_super) {
        __extends(ReferenceSystem, _super);
        function ReferenceSystem(node) {
            _super.call(this, node);
            this.code = this.gcoString("gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code");
            this.codeSpace = this.gcoString("gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:codeSpace");
        }
        ReferenceSystem.prototype.toString = function () {
            if (this.codeSpace)
                return this.codeSpace + ":" + this.code;
else
                return this.code;
        };
        return ReferenceSystem;
    })(GmdBase);
    gmd.ReferenceSystem = ReferenceSystem;

    var Keywords = (function (_super) {
        __extends(Keywords, _super);
        function Keywords(node) {
            _super.call(this, node);
            this.keywords = new Array();
            this.keywords = this.nodesToArray("gmd:MD_Keywords/gmd:keyword", function (chNode) {
                var ch = new GmdBase(chNode);
                return ch.gcoString();
            });

            var thesaurusNode = this.childNode("gmd:MD_Keywords/gmd:thesaurusName");
            if (thesaurusNode)
                this.thesaurusName = new Citation(thesaurusNode);
        }
        return Keywords;
    })(GmdBase);
    gmd.Keywords = Keywords;

    var Constraints = (function () {
        function Constraints(constrNodes) {
            this.useLimitation = new Array();
            this.otherConstraints = new Array();
            for (var ci = 0; ci < constrNodes.length; ci++) {
                var constrNode = constrNodes[ci];
                var constr = new GmdBase(constrNode);

                var limitNodes = constr.childNodes("gmd:MD_Constraints/gmd:useLimitation");
                for (var i = 0; i < limitNodes.length; i++) {
                    var limit = new GmdBase(limitNodes[i]);
                    this.useLimitation.push(limit.gcoString());
                }

                var accConstr = constr.childValue("gmd:MD_LegalConstraints/gmd:accessConstraints/gmd:MD_RestrictionCode");
                if (accConstr)
                    this.accessConstraints = accConstr;

                var otherConstrNodes = constr.childNodes("gmd:MD_LegalConstraints/gmd:otherConstraints");
                for (var i = 0; i < otherConstrNodes.length; i++) {
                    var otherConstr = new GmdBase(otherConstrNodes[i]);
                    this.otherConstraints.push(otherConstr.gcoString());
                }
            }
        }
        return Constraints;
    })();
    gmd.Constraints = Constraints;

    var Resolution = (function (_super) {
        __extends(Resolution, _super);
        function Resolution(node) {
            _super.call(this, node);
            this.denominator = this.childValue("gmd:MD_Resolution/gmd:equivalentScale/gmd:MD_RepresentativeFraction/gmd:denominator/gco:Integer");

            this.distance = this.childValue("gmd:MD_Resolution/gmd:distance/gco:Distance");
            this.uom = this.childAttr("gmd:MD_Resolution/gmd:distance/gco:Distance", "uom");
        }
        Resolution.prototype.toString = function () {
            if (this.denominator)
                return "1 : " + this.denominator;
            return this.distance + this.uom;
        };
        return Resolution;
    })(GmdBase);
    gmd.Resolution = Resolution;

    var Extent = (function (_super) {
        __extends(Extent, _super);
        function Extent(node) {
            _super.call(this, node);
            var boxNode = this.childNode("gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox");
            var box = new GmdBase(boxNode);
            this.west = box.gcoDecimal("gmd:westBoundLongitude");
            this.east = box.gcoDecimal("gmd:eastBoundLongitude");
            this.south = box.gcoDecimal("gmd:southBoundLongitude");
            this.north = box.gcoDecimal("gmd:northBoundLongitude");
        }
        return Extent;
    })(GmdBase);
    gmd.Extent = Extent;

    var Metadata = (function (_super) {
        __extends(Metadata, _super);
        function Metadata(node) {
            _super.call(this, node);
            this.contact = new Array();
            this.referenceSystem = new Array();
            this.languageCode = this.childValue("gmd:language/gmd:LanguageCode");
            this.hierarchyLevel = this.childValue("gmd:hierarchyLevel/gmd:MD_ScopeCode");

            this.contact = this.nodesToArray("gmd:contact", function (chNode) {
                return new ResponsibleParty(chNode);
            });

            this.dateStamp = this.gcoDate("gmd:dateStamp");
            this.metadataStandardName = this.gcoString("gmd:metadataStandardName");
            this.metadataStandardVersion = this.gcoString("gmd:metadataStandardVersion");

            this.referenceSystem = this.nodesToArray("gmd:referenceSystemInfo", function (chNode) {
                return new ReferenceSystem(chNode);
            });

            this.identification = new Identification(this.childNode("gmd:identificationInfo"));
            this.distribution = new Distribution(this.childNode("gmd:distributionInfo"));
            this.dataQuality = new DataQuality(this.childNode("gmd:dataQualityInfo"));
        }
        return Metadata;
    })(GmdBase);
    gmd.Metadata = Metadata;

    var Identification = (function (_super) {
        __extends(Identification, _super);
        function Identification(node) {
            _super.call(this, node);
            this.pointOfContact = new Array();
            this.graphicOverview = new Array();
            this.keywords = new Array();
            this.spatialRepresentationType = new Array();
            this.spatialResolution = new Array();
            this.language = new Array();
            this.topicCategory = new Array();

            var identType = "gmd:MD_DataIdentification";
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].nodeType == 1) {
                    identType = node.childNodes[i].nodeName;
                }
            }

            this.citation = new Citation(this.childNode(identType + "/gmd:citation"));
            this.abstract = this.gcoString(identType + "/gmd:abstract");

            this.pointOfContact = this.nodesToArray(identType + "/gmd:pointOfContact", function (chNode) {
                return new ResponsibleParty(chNode);
            });

            this.graphicOverview = this.nodesToArray(identType + "/gmd:graphicOverview", function (chNode) {
                return new BrowseGraphic(chNode);
            });

            this.keywords = this.nodesToArray(identType + "/gmd:descriptiveKeywords", function (chNode) {
                return new Keywords(chNode);
            });

            this.constraints = new Constraints(this.childNodes(identType + "/gmd:resourceConstraints"));

            this.spatialRepresentationType = this.nodesToArray(identType + "/gmd:spatialRepresentationType", function (chNode) {
                var spatialRepr = new GmdBase(chNode);
                return spatialRepr.childValue("gmd:MD_SpatialRepresentationTypeCode");
            });

            this.spatialResolution = this.nodesToArray(identType + "/gmd:spatialResolution", function (chNode) {
                return new Resolution(chNode);
            });

            this.language = this.nodesToArray(identType + "/gmd:language", function (chNode) {
                var lang = new GmdBase(chNode);
                return lang.childValue("gmd:LanguageCode");
            });

            this.topicCategory = this.nodesToArray(identType + "/gmd:topicCategory", function (chNode) {
                var topic = new GmdBase(chNode);
                return topic.childValue("gmd:MD_TopicCategoryCode");
            });
        }
        return Identification;
    })(GmdBase);
    gmd.Identification = Identification;

    var Distribution = (function (_super) {
        __extends(Distribution, _super);
        function Distribution(node) {
            _super.call(this, node);
            this.format = new Array();
            this.onLineTransfer = new Array();
            this.onLineFunctions = {
                download: new Array(),
                information: new Array(),
                offlineAccess: new Array(),
                order: new Array(),
                search: new Array(),
                undefined: new Array()
            };

            this.format = this.nodesToArray("gmd:MD_Distribution/gmd:distributionFormat", function (chNode) {
                return new Format(chNode);
            });

            this.onLineTransfer = this.nodesToArray("gmd:MD_Distribution/gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine", function (chNode) {
                return new OnlineResource(chNode);
            });

            for (var i = 0; i < this.onLineTransfer.length; i++) {
                var transfer = this.onLineTransfer[i];
                var funcArr = this.onLineFunctions[transfer.resFunction];
                if (funcArr instanceof Array) {
                    funcArr.push(transfer.url);
                } else {
                    this.onLineFunctions.undefined.push(transfer.url);
                }
            }
        }
        return Distribution;
    })(GmdBase);
    gmd.Distribution = Distribution;

    var Format = (function (_super) {
        __extends(Format, _super);
        function Format(node) {
            _super.call(this, node);
            this.name = this.gcoString("gmd:MD_Format/gmd:name");
            this.version = this.gcoString("gmd:MD_Format/gmd:version");
        }
        Format.prototype.toString = function () {
            if (this.version)
                return this.name + " " + this.version;
else
                return this.name;
        };
        return Format;
    })(GmdBase);
    gmd.Format = Format;

    var OnlineResource = (function (_super) {
        __extends(OnlineResource, _super);
        function OnlineResource(node) {
            _super.call(this, node);
            this.url = this.childValue("gmd:CI_OnlineResource/gmd:linkage/gmd:URL");
            this.resFunction = this.childValue("gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode");
        }
        return OnlineResource;
    })(GmdBase);
    gmd.OnlineResource = OnlineResource;

    var DataQuality = (function (_super) {
        __extends(DataQuality, _super);
        function DataQuality(node) {
            _super.call(this, node);
            this.report = new Array();
            this.scope = this.childValue("gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode");

            this.report = this.nodesToArray("gmd:DQ_DataQuality/gmd:report/gmd:DQ_DomainConsistency/gmd:result", function (chNode) {
                return new ConformanceResult(chNode);
            });

            this.lineage = this.gcoString("gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement");
        }
        return DataQuality;
    })(GmdBase);
    gmd.DataQuality = DataQuality;

    var ConformanceResult = (function (_super) {
        __extends(ConformanceResult, _super);
        function ConformanceResult(node) {
            _super.call(this, node);
            var specNode = this.childNode("gmd:DQ_ConformanceResult/gmd:specification");
            if (specNode)
                this.specification = new Citation(specNode);

            this.explanation = this.gcoString("gmd:DQ_ConformanceResult/gmd:explanation");
            this.pass = this.gcoBoolean("gmd:DQ_ConformanceResult/gmd:pass");
        }
        return ConformanceResult;
    })(GmdBase);
    gmd.ConformanceResult = ConformanceResult;
})(gmd || (gmd = {}));

metaViewer.init();
