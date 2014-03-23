

///<reference path="../js-novotive/novotive.ts"/>
///<reference path="../js-languative/languative.ts"/>


declare var metaViewerResponse;

module metaViewer {

    var cswSchema = "http://www.opengis.net/cat/csw/2.0.2";
    var isoSchema = "http://www.isotc211.org/2005/gmd";


    export module config {
        export var cswServiceUrl: string = "/geoportal/csw"; 
        //export var cswServiceUrl: string = "http://gptogc.esri.com/geoportal/csw";
        //export var cswServiceUrl: string = "http://deegree3-demo.deegree.org/csw-workspace/services/csw"
        //export var cswServiceUrl: string = "http://sdi.geoportal.gov.pl/csw202/csw.aspx"

        export var getRecordsParams = {
            service: "CSW",
            version: "2.0.2",
            outputFormat: "application/xml",
            REQUEST: "GetRecords",
            ElementSetName: "summary",
            resultType: "results",
            typeNames: "csw:Record",
            outputSchema: cswSchema, // for records list use faster CSW schema
            startPosition: 1,
            maxRecords: 99
        };

        export var getRecordByIdParams = {
            service: "CSW",
            version: "2.0.2",
            outputFormat: "application/xml",
            REQUEST: "GetRecordById",
            ElementSetName: "full",
            outputSchema: isoSchema, // for detailed information of particular record use ISO schema
            Id: ""
        };
    }
    // module config

    export function setFilter(filter: string) {
        var filterEl = jQuery("#recordsListContainer").find(".ui-input-text");
        filterEl.val(filter);
        filterEl.trigger("change");
    }

    function setFilterFromUrl() {
        var params = novotive.urlParameters();
        if (params.filter) {
            setFilter(params.filter);
        }
    }

    export function init() {

        //showProgressPage();
        jQuery(document).on("pageinit", "#records", loadRecords);

        //jQuery(document).on("pageinit", "#records", loadRecords); // always check for new records       

        //jQuery(document).on("pagebeforecreate", "#details", function () { alert("pagebeforecreate : " + window.location.hash);});
        //jQuery(document).on("pagecreate", "#details", function () { alert("pagecreate : " + window.location.hash); });
        //jQuery(document).on("pagebeforeshow", "#details", function () { alert("pagebeforeshow : " + window.location.hash); });
        //jQuery(document).on("pageshow", "#details", function () { alert("pageshow : " + window.location.hash); });


        jQuery(document).on("pagebeforeshow", "#details", loadDetails);
    }

    function showRecordsContainer(id: string) {
        jQuery("#recordsContent").children().hide();
        jQuery("#" + id).show();
    }

    function showError(err: novotive.log.LogRecord) {
        jQuery("#recordPageErrorDsc").html(err.toHtml());
        showRecordsContainer("recordsErrorContainer");
    }

    function showErrorDialog(err: novotive.log.LogRecord) {
        showRecordsContainer("recordsListContainer"); // back to list not to progress indicator
        jQuery("#errorDialogMsg").html(err.toHtml());
        jQuery.mobile.changePage("#errorDialog", { role: "dialog", changeHash: true, transition: "none" });

    }

    export function showListContainer() {
        showRecordsContainer("recordsListContainer");
    }
    
    var recordListLoaded = false;

    export function loadRecords() {

        if (recordListLoaded) {
            showRecordsContainer("recordsListContainer");
            return;
        }

        jQuery("#AboutDialogCswUrl").text(config.cswServiceUrl);
        showRecordsContainer("recordsProgressContainer");

        var url = metaViewer.config.cswServiceUrl.split("?")[0] + "?" + jQuery.param(config.getRecordsParams);

        novotive.io.getXml(url,
            function (responseXml) {
                fillRecordsList(responseXml);                
                showRecordsContainer("recordsListContainer");
                recordListLoaded = true;
                setFilterFromUrl();
            },
            function (error) {
                error.setMessage("CSW service error");
                error.addDescription("Access to CSW service (" + config.cswServiceUrl + ") failed");
                showError(error);
            });
    }

    var summaryRecords: any = new Object(); // = new Array<gmd.SummaryRecord>();

    function fillRecordsList(xmlDoc: Document) {

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
        //var responseNode = novotive.dom.ch 
        //var searchNode = xmlDoc.getElementsByTagNameNS(cswSchema, "SearchResults");
        if (resCount > config.getRecordsParams.maxRecords) {
            jQuery("#recordsRecordsCount").text(config.getRecordsParams.maxRecords);
            jQuery("#recordsResultsCount").text(resCount);
            jQuery("#recordsRecordsCountContainer").show();
        }
        else {
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

        jQuery("#records").page(); //init page
        recordsList.listview(); // init listview
        recordsList.trigger('create');
        recordsList.listview("refresh"); // now you can refresh
    }

    function liRecordsDetails(summaryRec: gmd.SummaryRecord) {
        if (summaryRec.identifier.length < 1) {
            var lg = new novotive.log.LogRecord("Invalid csw:SummaryRecord format", null, "'dc:identifier' not found");
            return lg.toHtml();
        }

        var clickEvent =  "metaViewer.showDetails('" + summaryRec.id + "');";

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
        res += '<div>'+" \n"; //'<div data-role="controlgroup" data-type="horizontal" data-mini="true" class="ui-icon-alt" data-inline="true" >' + "\n";
        res += '  <a href="#"  onclick="' + clickEvent+'"  data-mini="true" data-inline="true" '
        + 'data-role="button" data-icon="info"  class="details-button" >'
             +languative.getPhrase("Details...")  + "</a> \n";
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

    function metadataUrl(id: string, schema: string) {
        config.getRecordByIdParams.outputSchema = schema;
        config.getRecordByIdParams.Id = id;
        return config.cswServiceUrl.split("?")[0] + "?" + jQuery.param(config.getRecordByIdParams);
    }

    function detailsUrl(id: string) {
        //return "javascript:jQuery.mobile.changePage('#details?" + id + "', { role: 'page', changeHash: false, transition: 'none' });";
        //return "javascript:metaViewer.showDetails('" + id + "');";
        //return "#load?" + encodeURIComponent( id) + "";
        return "#details?" + encodeURIComponent(id);
        //return "?id=" + encodeURIComponent(id) + "#details";
    }

    var detailsIdLoaded = "";
    var detailsIdToLoad = "";

    export function showDetails(id: string) {
        detailsIdToLoad = id;
        jQuery.mobile.changePage('#details', { role: 'page', changeHash: true, transition: 'none' });
        //var url = detailsUrl(id);
        //window.location.replace(url);
        //loadDetails();
    }

    export function loadDetails() {

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
            novotive.io.getXml(url,
                function (responseXml) {
                    try {
                        responseXml["xmlUrl"] = url;
                        fillDetails(detailsIdToLoad, responseXml);
                        jQuery("#detailsContent").children().show();
                        jQuery("#detailsProgressContainer").hide();
                        detailsIdLoaded = detailsIdToLoad;
                        //detailsIdToLoad = "";
                    }
                    catch (e) {
                        var errLog = new novotive.log.LogError(e);
                        errLog.setMessage("Unexpected error");
                        showErrorDialog(errLog);
                    }
                },
                function (error) {
                    error.setMessage("CSW service error");
                    showErrorDialog(error);
                });
        }
        else {
            jQuery("#detailsContent").children().show();
            jQuery("#detailsProgressContainer").hide();
        }
    }

    function getTag(tag: string, body: string, cssClass?: string) {
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
            return '<' + tag + ' ' + cls + '>' + body + '</' + tag + '> '+"\n";
        else
            return "";
    }

    function getKeyValueTag(keyPhrase: string, value: string, br?: boolean) {
        var res = "";

        var spaceDown = '';
        if (br)
            var spaceDown = ' style = "padding-bottom: 0.5em;" ';

        if (value) {
            res += '<p '+spaceDown+' >';

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

    function getTitleTag(phraseId: string) {
        return getTag("h3", languative.getPhrase(phraseId));
    }

    function getSpaceTag() {
        return '<p style="font-size:0.2em; margin: 0; padding: 0;">&nbsp;</p>' + "\n";
    }

    function getItemsTag(items: Array, phraseId?: string) {
        if (!(items) || (items.length < 1))
            return "";

        var langItems = new Array<string>();        
        for (var i = 0; i < items.length; i++) {
            var langItem = languative.findPhrase(phraseId + "_" + items[i]);
            if (!(langItem)) {
                var item: string = items[i].toString() || items[i];
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


    function fillCswDetails(id: string, err: novotive.log.LogRecord) {
        var summaryRec : gmd.SummaryRecord = summaryRecords[id];
        if (!(summaryRec)) {
            showErrorDialog(err);
            return;
        }
        
        var detailsList = jQuery("#detailsList");
        detailsList.empty();

        function addLi(liBody: string) {
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


    function fillDetails(id: string, xmlDoc: Document) {

        showRecordsContainer("recordsListContainer"); // back to list not to progress indicator


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

        var metadata: gmd.Metadata;
        try {
            metadata = new gmd.Metadata(metadataNode);
        }
        catch (e) {            
            var err = new novotive.log.LogError(e);
            err.setMessage("Invalid metadata XML format");
            fillCswDetails(id, err);
            return;
        }

        var liNodes: Array<Node> = null;
        var detailsList = jQuery("#detailsList");
        detailsList.empty();

        function addLi(liBody: string) {
            if (liBody)
                detailsList.append('<li data-icon="false">' + liBody + '</li>');
        }
        
        var ident = metadata.identification;

        jQuery("#detailsTitle").text(ident.citation.title);
        if (ident.citation.dates.length > 0) {
            jQuery("#detailsDate").text(ident.citation.dates[0].toString());
        }
        else {
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

        var graphicsOverview = metadata.identification.graphicOverview;  //TODO: Carousel

        initDetailsComponents();
        jQuery.mobile.changePage("#details", { role: "page", changeHash: true, transition: "slide" });

    }

    function initDetailsComponents() {
        jQuery("#details").page(); //init page

        var detailsList = jQuery("#detailsList");
        detailsList.listview(); // init listview
        detailsList.listview("refresh"); // now you can refresh

        //detailsList.trigger("create").listview("refresh");
    }

    function getKeywordsLists(parentNode: Node) {
    }

    function liIdentification(identNode: Node) {
    }

    function liKeywords(ident: gmd.Identification) {
        var res = "";

        for (var i = 0; i < ident.keywords.length; i++) {
            var kwd = ident.keywords[i];
            if (kwd.thesaurusName) {
                res += getTag("p", kwd.thesaurusName.title, "bold");
                res += getTag("p", kwd.thesaurusName.dates.join(" | "));
            }
            else {
                res += getTag("p", languative.getPhrase("otherKeywords"), "bold");
            }
            res += getItemsTag(kwd.keywords);
        }
        res += getItemsTag(ident.topicCategory, "topicCategory");

        if (res)
            res = getTitleTag("descriptiveKeywords") + res;
        return res;
    }

    function liCswKeywords(rec: gmd.SummaryRecord) {
        var res = "";
        res += getItemsTag(rec.subject, "");
        if (res)
            res = getTitleTag("descriptiveKeywords") + res;
        return res;
    }

    function liConstraints(constraints: gmd.Constraints) {
        var res = "";

        res += getItemsTag(constraints.useLimitation, "useLimitation");
        res += getKeyValueTag("accessConstraints", languative.getPhrase(constraints.accessConstraints), true);
        res += getItemsTag(constraints.otherConstraints, "otherConstraints");

        if (res)
            res = getTitleTag("resourceConstraints") + res;

        return res;
    }

    function liContact(contacts: Array<gmd.ResponsibleParty>) {
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
                res += languative.getPhrase(c.role);;
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

    function initButton(buttonId: string, url: string) {
        var btn = jQuery("#"+buttonId);
        if (url) {
            btn.show();
            btn.attr("href", url);
        }
        else {
            btn.hide();
        }
    }

    function isShpUrl(url: string) {
        // http://192.168.1.158:8080/geoserver/sf/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=sf:archsites&maxFeatures=50&outputFormat=SHAPE-ZIP
        url = url.toLowerCase();
        var geoserverShp = "outputFormat=SHAPE-ZIP".toLowerCase();
        return url.contains(geoserverShp, "shapefile", "shp.zip");
    }

    function initDownloadButtons(downloadBtnId: string, downloadShpBtnId: string, urls: Array<string>) {
        // First look for shp
        var shpUrl: string = "";
        for (var i = 0; i < urls.length; i++) {
            if (isShpUrl(urls[i])) {
                shpUrl = urls[i];
                break;
            }
        }
        initButton("detailsDownloadShpButton", shpUrl); // hide if shpUrl==""

        // then select 'standard' download option
        var downUrl: string = "";
        for (var i = 0; i < urls.length; i++) {
            if (urls[i] != shpUrl) {
                downUrl = urls[i];
                break;
            }
        }
        initButton("detailsDownloadButton", downUrl); // hide if downUrl == ""
    }

    function initDistributionButtons(distr: gmd.Distribution) {
        initButton("detailsInfoButton", distr.onLineFunctions.information[0]);
        initButton("detailsOrderButton", distr.onLineFunctions.order[0]);
        initDownloadButtons("detailsDownloadButton", "detailsDownloadShpButton", distr.onLineFunctions.download);
        initButton("detailsSearchButton", distr.onLineFunctions.search[0]);
    }

    function liDistribution(distr: gmd.Distribution) {
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

    function liCswDistribution(rec: gmd.SummaryRecord) {

        var res = "";

        res += getItemsTag(rec.references, "onLineTransfer_undefined");

        if (res)
            res = getTitleTag("Distribution") + res;

        return res;
    }

    function liSpatialInfo(metadata: gmd.Metadata) {
        var res = "";
        
        res += getItemsTag(metadata.referenceSystem, "referenceSystemInfo");
        res += getItemsTag(metadata.identification.spatialRepresentationType, "spatialRepresentation");
        res += getItemsTag(metadata.identification.spatialResolution, "spatialResolution");
        res += getItemsTag(metadata.identification.language, "language");

        if (res)
            res = getTitleTag("spatialInfo") + res;

        return res;
    }

    function liQuality(quality: gmd.DataQuality) {
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


        var schemaBody = "<strong>" + languative.getPhrase("metadataSchema")+"</strong><br />";
        schemaBody += ' &#8226; <a href="' + metadataUrl(detailsIdToLoad, isoSchema) + '" rel="external">' + languative.getPhrase("isoMetadataSchema") + '</a><br />';
        schemaBody += ' &#8226; <a href="' + metadataUrl(detailsIdToLoad, cswSchema) + '" rel="external">' + languative.getPhrase("cswMetadataSchema") + '</a><br />';

        res += getTag("p", schemaBody, "padding-top");
        return res;
        //<br /> &#8226;
        
    }

    function liMetadata(metadata: gmd.Metadata) {
        var res = "";
        res += getTitleTag("Metadata");
        res += getTag("p", metadata.metadataStandardName, "bold");
        res += getTag("p", metadata.metadataStandardVersion);

        res += getKeyValueTag("dateStamp", metadata.dateStamp);
        res += metadataLinks();

        return res;
    }

    function liCswMetadata(rec: gmd.SummaryRecord) {
        var res = "";
        res += getTitleTag("Metadata");
        res += getKeyValueTag("dateStamp", rec.modified);
        res += getKeyValueTag("type", rec.type);
        res += metadataLinks();

        return res;
    }


}


module gmd {


    /*
    export function nodeToValue<T>(node: Node, tagName?: string, nodeToItem: (chNode: Node) => T) {
        var ch = novotive.dom.childNode(node, tagName);
        if (ch)
            return nodeToItem(ch);
        else
            return undefined;
    }*/


    export class GmdBase {
        constructor(public _node: Node) {
        }

        public childNodes(path?: string) {
            return novotive.dom.childNodes(this._node, path);
        }

        public childNode(path?: string) {
            return novotive.dom.childNode(this._node, path);
        }

        public childValue(path?: string) {
            return novotive.dom.childValue(this._node, path);
        }

        public childValues(path?: string) {
            return novotive.dom.childValues(this._node, path);
        }

        public childAttr(path: string, attrName) {
            return novotive.dom.childAttr(this._node, path, attrName);
        }

        public gcoValue(gcoType: string, path?: string) {
            // gcoType = "gco:CharacterString";
            if (path)
                return this.childValue(path + "/" + gcoType);
            else
                return this.childValue(gcoType);
        }

        public gcoString(path?: string) {
            return this.gcoValue("gco:CharacterString", path);
        }

        public gcoDate(path?: string) {
            return this.gcoValue("gco:Date", path);
        }

        public gcoBoolean(path?: string) {
            var val = this.gcoValue("gco:Boolean", path);
            return Boolean(val);
        }

        public gcoDecimal(path?: string) {
            var val = this.gcoValue("gco:Decimal", path);
            return Number(val);
        }

        public nodesToArray<T>(path: string, nodeToItem: (node: Node) => T) {
            var nodes = this.childNodes(path);
            var res = new Array<T>();
            for (var i = 0; i < nodes.length; i++) {
                var val = nodeToItem(nodes[i]);
                if (val)
                    res.push(val);
            }
            return res;
        }
    }

    // ---------------------------------------------------------------------------------------------

    export class SummaryRecord extends GmdBase {
        
        constructor(node: Node) {
            super(node);
            this.identifier = this.childValues("dc:identifier");
            this.title = this.childValue("dc:title");
            this.type = this.childValue("dc:type");
            this.subject = this.childValues("dc:subject");
            this.references = this.childValues("dct:references");
            this.modified = this.childValue("dct:modified");
            this.abstract = this.childValue("dct:abstract");
            
            /* <dc:identifier scheme ="urn:x-esri:specification:ServiceType:ArcIMS:Metadata:FileID">
                http://loczy.mfgi.hu/ArcGIS/rest/services/TJAM/profile_P9/MapServer
            </dc:identifier >
            <dc:identifier scheme = "urn:x-esri:specification:ServiceType:ArcIMS:Metadata:DocID" > 
                {AB07C468-E32C-4842-9EC8-48B1F45C6F49 } 
            </dc:identifier> */
            /*
            for (var i = 0; i < idList.length; i++) {
                var idVal = idList[i];
                if ((idVal) && idVal[0] == "{")
                    id = idVal;
            }*/
            // GUID Id not found, get the first one
            if (this.identifier.length > 0) {
                this.id = this.identifier[0];
            }
        }

        public id: string;
        public identifier = new Array<string>();
        public title: string;
        public type: string;        
        public subject = new Array<string>();
        public references = new Array<string>();
        public modified: string;
        public abstract: string;
    }

    // ---------------------------------------------------------------------------------------------

    export class Date extends GmdBase {

        constructor(node: Node) {
            super(node);
            this.date = this.gcoDate("gmd:CI_Date/gmd:date");
            this.dateType = this.childValue("gmd:CI_Date/gmd:dateType/gmd:CI_DateTypeCode");
        }

        public date: string;
        public dateType: string;

        public toString() {
            var res = this.date;
            if (this.dateType)
                res += " (" + this.dateType + ")";
            return res;
        }
    }


    export class ResponsibleParty extends GmdBase  {

        constructor(node: Node) {
            super(node);
            this.organisation = this.gcoString("gmd:CI_ResponsibleParty/gmd:organisationName");
            this.email = this.gcoString("gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress");
            this.role = this.childValue( "gmd:CI_ResponsibleParty/gmd:role/gmd:CI_RoleCode");
        }

        public organisation: string;
        public email: string;
        public role;
    }


    export class BrowseGraphic extends GmdBase  {

        constructor(node: Node) {
            super(node);
            this.file = this.gcoString("gmd:MD_BrowseGraphic/gmd:fileName");
            this.description = this.gcoString("gmd:MD_BrowseGraphic/gmd:fileDescription");
            this.type = this.gcoString("gmd:MD_BrowseGraphic/gmd:fileType");
        }

        public file: string;
        public description: string;
        public type: string;
    }


    export class Citation extends GmdBase  {

        constructor(node: Node) {
            super(node);
            this.title = this.gcoString( "gmd:CI_Citation/gmd:title");

            this.dates = this.nodesToArray<Date>("gmd:CI_Citation/gmd:date",
                function (chNode) { return new Date(chNode); });
        }

        public title: string;
        public dates: Array<Date> = new Array<Date>();

    }


    export class ReferenceSystem extends GmdBase  {

        constructor(node: Node) {
            super(node);
            this.code = this.gcoString( "gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:code");
            this.codeSpace = this.gcoString( "gmd:MD_ReferenceSystem/gmd:referenceSystemIdentifier/gmd:RS_Identifier/gmd:codeSpace");
        }

        public code: string;
        public codeSpace: string;

        public toString() {
            if (this.codeSpace)
                return this.codeSpace + ":" + this.code;
            else
                return this.code;
        }
    }


    export class Keywords extends GmdBase  {

        constructor(node: Node) {
            super(node);
            this.keywords = this.nodesToArray<string>("gmd:MD_Keywords/gmd:keyword", function (chNode) {
                var ch = new GmdBase(chNode);
                return ch.gcoString();
            });

            var thesaurusNode = this.childNode("gmd:MD_Keywords/gmd:thesaurusName");
            if (thesaurusNode)
                this.thesaurusName = new Citation(thesaurusNode);
        }

        public thesaurusName: Citation;
        public keywords: Array<string> = new Array<string>();
    }


    export class Constraints {

        constructor(constrNodes: Array<Node>) {
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

        public useLimitation: Array<string> = new Array<string>();
        public accessConstraints: string;
        public otherConstraints: Array<string> = new Array<string>();
    }


    export class Resolution extends GmdBase  {
        constructor(node: Node) {
            super(node);
            this.denominator = this.childValue("gmd:MD_Resolution/gmd:equivalentScale/gmd:MD_RepresentativeFraction/gmd:denominator/gco:Integer");

            this.distance = this.childValue("gmd:MD_Resolution/gmd:distance/gco:Distance");
            this.uom = this.childAttr("gmd:MD_Resolution/gmd:distance/gco:Distance", "uom");
        }

        public denominator: string;
        public distance: string;
        public uom: string;

        public toString() {
            if (this.denominator)
                return "1 : " + this.denominator;
            return this.distance + this.uom;
        }
    }


    export class Extent extends GmdBase  {
        constructor(node: Node) {
            super(node);
            var boxNode = this.childNode("gmd:EX_Extent/gmd:geographicElement/gmd:EX_GeographicBoundingBox");
            var box = new GmdBase(boxNode);
            this.west = box.gcoDecimal("gmd:westBoundLongitude");
            this.east = box.gcoDecimal("gmd:eastBoundLongitude");
            this.south = box.gcoDecimal("gmd:southBoundLongitude");
            this.north = box.gcoDecimal("gmd:northBoundLongitude");
        }

        public west: number;
        public east: number;
        public south: number;
        public north: number;
    }


    export class Metadata extends GmdBase  {
        constructor(node: Node) {
            super(node);
            this.languageCode = this.childValue( "gmd:language/gmd:LanguageCode");
            this.hierarchyLevel = this.childValue( "gmd:hierarchyLevel/gmd:MD_ScopeCode");

            this.contact = this.nodesToArray("gmd:contact", function (chNode) {
                return new ResponsibleParty(chNode);
            });


            this.dateStamp = this.gcoDate( "gmd:dateStamp");
            this.metadataStandardName = this.gcoString( "gmd:metadataStandardName");
            this.metadataStandardVersion = this.gcoString("gmd:metadataStandardVersion");

            this.referenceSystem = this.nodesToArray("gmd:referenceSystemInfo", function (chNode) {
                return new ReferenceSystem(chNode);
            });

            this.identification = new Identification(this.childNode("gmd:identificationInfo"));
            this.distribution = new Distribution(this.childNode( "gmd:distributionInfo"));
            this.dataQuality = new DataQuality(this.childNode( "gmd:dataQualityInfo"));
        }

        public languageCode: string;
        public hierarchyLevel: string;
        public contact: Array<ResponsibleParty> = new Array<ResponsibleParty>();
        public dateStamp: string;
        public metadataStandardName: string;
        public metadataStandardVersion: string;
        public referenceSystem: Array<ReferenceSystem> = new Array<ReferenceSystem>();
        public identification: Identification;
        public distribution: Distribution;
        public dataQuality: DataQuality;


    }


    export class Identification extends GmdBase  {
        
        constructor(node: Node) {
            super(node);

            var identType = "gmd:MD_DataIdentification";
            for (var i = 0; i < node.childNodes.length; i++) {
                if (node.childNodes[i].nodeType == 1) { //ELEMENT_NODE
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

        public citation: Citation;
        public abstract: string;
        public pointOfContact: Array<ResponsibleParty> = new Array<ResponsibleParty>();
        public graphicOverview: Array<BrowseGraphic> = new Array<BrowseGraphic>();
        public keywords: Array<Keywords> = new Array<Keywords>();
        public constraints: Constraints;
        public spatialRepresentationType: Array<string> = new Array<string>();
        public spatialResolution: Array<Resolution> = new Array<Resolution>();
        public language: Array<string> = new Array<string>();
        public topicCategory: Array<string> = new Array<string>();
    }


    export class Distribution extends GmdBase  {

        constructor(node: Node) {
            super(node);

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
                }
                else {
                    this.onLineFunctions.undefined.push(transfer.url);
                }
            }
        }

        public format: Array<Format> = new Array<Format>();
        public onLineTransfer: Array<OnlineResource> = new Array<OnlineResource>();
        public onLineFunctions = {            
            download: new Array <string>(),
            information: new Array<string>(),
            offlineAccess: new Array<string>(),
            order: new Array<string>(),
            search: new Array<string>(),
            undefined: new Array<string>()
        };
    }


    export class Format extends GmdBase  {

        constructor(node: Node) {
            super(node);
            this.name = this.gcoString( "gmd:MD_Format/gmd:name");
            this.version = this.gcoString( "gmd:MD_Format/gmd:version");
        }

        public name: string;
        public version: string;

        public toString() {
            if (this.version)
                return this.name + " " + this.version;
            else
                return this.name;
        }
    }


    export class OnlineResource extends GmdBase  {
        
        constructor(node: Node) {
            super(node);
            this.url = this.childValue( "gmd:CI_OnlineResource/gmd:linkage/gmd:URL");
            this.resFunction = this.childValue( "gmd:CI_OnlineResource/gmd:function/gmd:CI_OnLineFunctionCode");
        }

        public url: string;
        public resFunction: string;
    }


    export class DataQuality extends GmdBase  {

        constructor(node: Node) {
            super(node);
            this.scope = this.childValue("gmd:DQ_DataQuality/gmd:scope/gmd:DQ_Scope/gmd:level/gmd:MD_ScopeCode");
            

            this.report = this.nodesToArray("gmd:DQ_DataQuality/gmd:report/gmd:DQ_DomainConsistency/gmd:result", function (chNode) {
                return new ConformanceResult(chNode);
            });

            this.lineage = this.gcoString("gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement");
        }

        public scope: string;
        public report: Array<ConformanceResult> = new Array<ConformanceResult>();
        public lineage: string;
    }


    export class ConformanceResult extends GmdBase  {

        constructor(node: Node) {
            super(node);
            var specNode = this.childNode("gmd:DQ_ConformanceResult/gmd:specification");
            if (specNode)
                this.specification = new Citation(specNode);

            this.explanation = this.gcoString("gmd:DQ_ConformanceResult/gmd:explanation");
            this.pass = this.gcoBoolean("gmd:DQ_ConformanceResult/gmd:pass");
        }

        public specification: Citation;
        public explanation: string;
        public pass: boolean;
    }

}

metaViewer.init();


