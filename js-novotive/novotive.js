var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt/*, from*/ ) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this && this[from] === elt)
                return from;
        }
        return -1;
    };
}

if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

String.prototype.contains = function () {
    var strings = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        strings[_i] = arguments[_i + 0];
    }
    for (var i = 0; i < strings.length; i++) {
        if (this.indexOf(strings[i]) > -1)
            return true;
    }
    return false;
};

String.prototype.replaceUrlWithHtmlLinks = function (target, rel) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var attr = "";
    if (target) {
        attr += ' target="' + target + '" ';
    }
    if (rel) {
        attr += ' rel="' + rel + '" ';
    }
    return this.replace(exp, "<a " + attr + " href='$1'>$1</a>");
};

String.prototype.shortUrls = function (maxUrlLength) {
    if (typeof maxUrlLength === "undefined") { maxUrlLength = 100; }
    var res = this.replace(/(https?\:\/\/[^\s]*)/gi, function (match) {
        if (match.length > maxUrlLength)
            return match.substring(0, maxUrlLength) + "...";
else
            return match;
    });
    return res;
};

// extensions
// ---------- ------ ---------------------------- -------- ------------ ----------------------
var novotive;
(function (novotive) {
    novotive.version = "1.4.909";
    novotive.homeUrl = "/";

    function onDocumentReady() {
        jQuery(document).find('[data-nvt-url="home"]').each(function () {
            if (this.href) {
                this.href = novotive.homeUrl;
            }
        });
        jQuery(document).find('[data-nvt-version]').text(novotive.version);
    }
    novotive.onDocumentReady = onDocumentReady;

    function urlParameters() {
        //inbox.html?msg=1234&type=unread#msg-content
        var res = new Object();
        var query = window.location.search.substring(1);
        if (!(query))
            return res;

        var keyValArr = query.split("&");
        for (var i = 0; i < keyValArr.length; i++) {
            //msg=1234
            var keyVal = keyValArr[i].split("=");
            var k = keyVal[0];
            var v = keyVal[1];
            if ((k) && (v)) {
                res[k] = decodeURIComponent(v);
            }
        }
        return res;
    }
    novotive.urlParameters = urlParameters;

    function isDeveloperHost() {
        return (document.location.host.indexOf("localhost") > 0) || (document.location.host.indexOf("192.168.1.158") > 0) || (document.location.href.toLowerCase().indexOf('file:///p:/') == 0);
    }
    novotive.isDeveloperHost = isDeveloperHost;

    function isUmgdyHost() {
        return document.location.host.toLowerCase().contains("umgdy.gov.pl");
    }
    novotive.isUmgdyHost = isUmgdyHost;

    (function (config) {
        config.localProxyUrl = null;
        config.remoteProxyUrl = "http://novotive.appspot.com/proxy?url=";
    })(novotive.config || (novotive.config = {}));
    var config = novotive.config;

    (function (dom) {
        function nodeValue(thisNode) {
            return (thisNode.nodeValue || thisNode.textContent || "").trim();
        }
        dom.nodeValue = nodeValue;

        function childNodesCore(thisNode, tagName) {
            var res = new Array();
            if (!(thisNode))
                return res;

            var childNodes = (thisNode).childNodes;
            for (var i = 0; i < childNodes.length; i++) {
                var node = childNodes[i];
                var tagNameValid = (!(tagName)) || (node.nodeName.toLowerCase() == tagName.toLowerCase());
                var nodeHasValues = (node.childNodes.length > 0) || (nodeValue(node) != "") || ((node.attributes != null) && (node.attributes.length > 0));
                if (tagNameValid && nodeHasValues) {
                    res.push(node);
                }
            }
            return res;
        }
        ;

        function childNodes(thisNode, path) {
            var tagNames;
            if (path)
                tagNames = path.split("/");
else
                tagNames = [null];
            var iNode = thisNode;
            var iNodes;

            for (var i = 0; i < tagNames.length; i++) {
                var iTag = tagNames[i];
                var iNodes = childNodesCore(iNode, iTag);
                if (iNodes.length > 0) {
                    iNode = iNodes[0];
                } else {
                    return iNodes;
                }
            }
            return iNodes;
        }
        dom.childNodes = childNodes;
        ;

        function childNode(thisNode, path) {
            var nodes = childNodes(thisNode, path);
            if (nodes.length > 0)
                return nodes[0];
else
                return null;
        }
        dom.childNode = childNode;

        function childValues(thisNode, path) {
            var res = new Array();

            var chNodes = childNodes(thisNode, path);
            if (chNodes.length < 1)
                return res;

            for (var i = 0; i < chNodes.length; i++) {
                var node = chNodes[i];
                if (node.childNodes.length > 0) {
                    res.push(nodeValue(node.childNodes[0]));
                }
            }

            return res;
        }
        dom.childValues = childValues;
        ;

        function childValue(thisNode, path) {
            var values = childValues(thisNode, path);
            if (values.length > 0)
                return values[0];
            return "";
        }
        dom.childValue = childValue;
        ;

        function childAttr(thisNode, path, attrName) {
            var nodes = childNodes(thisNode, path);
            if (nodes.length > 0)
                return jQuery(nodes[0]).attr(attrName);
else
                return "";
        }
        dom.childAttr = childAttr;
    })(novotive.dom || (novotive.dom = {}));
    var dom = novotive.dom;

    // module dom
    (function (io) {
        // Cross domain Http request
        function createCORSRequest(url, method) {
            if (typeof method === "undefined") { method = "GET"; }
            var xhr;

            try  {
                // XDomainRequest for IE.
                xhr = new XDomainRequest();
                xhr.open(method, url);
                return xhr;
            } catch (e) {
                // XDomainRequest not supported -> try usuing XMLHttpRequest
            }

            try  {
                // XHR for Chrome/Firefox/Opera/Safari... and IE10
                xhr = new XMLHttpRequest();

                //if  ("withCredentials" in xhr) { //failed in IE10+Win8
                xhr.open(method, url, true);

                //} else { // CORS not supported.
                //xhr = null;
                //}
                return xhr;
            } catch (e) {
                return null;
            }
        }

        // createCORSRequest()
        function getProxyResponse(url, onSuccess, onFail) {
            if (!(url)) {
                onFail(new log.LogRecord("Remote proxy HTTP request failed: url not set"));
                return;
            }
            var proxyUlr = novotive.config.remoteProxyUrl + encodeURIComponent(url);

            var xhr = createCORSRequest(proxyUlr);
            if (!xhr) {
                onFail(new log.LogRecord("Your web browser does not support this feature (cross domain requests)"));
                return;
            }

            xhr.onload = function () {
                if (xhr.responseText)
                    onSuccess(xhr.responseText);
else
                    onFail(new log.LogRecord("Remote proxy HTTP request failed: empty response.", url));
            };

            xhr.onerror = function () {
                onFail(new log.LogRecord("Remote proxy HTTP request failed", url, xhr.responseText));
            };

            xhr.send();
        }

        function getLocalResponse(requestUrl, onSuccess, onFail) {
            if (!(requestUrl)) {
                onFail(new log.LogRecord("Local HTTP request failed: url not set"));
                return;
            }

            var response = jQuery.ajax({
                type: "GET",
                url: requestUrl,
                data: {}
            });
            response.done(function (data, textStatus, jqXHR) {
                if (jqXHR.responseText)
                    onSuccess(jqXHR.responseText);
else
                    onFail(new log.LogRecord("Local HTTP request failed: empty response.", requestUrl));
            });
            response.fail(function (jqXHR, textStatus, errorThrown) {
                onFail(new log.LogRecord("Local HTTP request failed", requestUrl, textStatus));
            });
        }

        function getResponse(url, onSuccess, onFail) {
            getLocalResponse(url, function (localResponse) {
                onSuccess(localResponse);
            }, function (localErrorStatus) {
                getProxyResponse(url, function (proxyResponse) {
                    onSuccess(proxyResponse);
                }, function (proxyErrorStatus) {
                    localErrorStatus.setMessage(proxyErrorStatus.message);
                    localErrorStatus.addDescriptions(proxyErrorStatus.descriptions);
                    onFail(localErrorStatus);
                });
            });
        }

        function getXmlExceptionReport(xmlDoc) {
            /*
            <ExceptionReport xmlns="http://www.opengis.net/ows" version="1.2.0">
            <Exception exceptionCode="InvalidParameterValue" locator="version">
            <ExceptionText>Invalid parameter value: locator=version</ExceptionText>
            <ExceptionText>This parameter value is not supported: 2.0.1</ExceptionText>
            </Exception>
            </ExceptionReport>
            */
            var exReportNodes = xmlDoc.getElementsByTagName("ExceptionReport") || xmlDoc.getElementsByTagName("ows:ExceptionReport");
            if (exReportNodes.length > 0) {
                var exNodes = dom.childNodes(exReportNodes[0], "Exception");
                if (exNodes.length < 1) {
                    exNodes = dom.childNodes(exReportNodes[0], "ows:Exception");
                }
                if (exNodes.length > 0) {
                    var exNode = exNodes[0];
                    var exCode = jQuery(exNode).attr("exceptionCode");
                    var exTitle = "XML Exception";
                    if (exCode > "")
                        exTitle += ": " + exCode;

                    var exTextArr = dom.childValues(exNode, "ExceptionText");
                    if (exTextArr.length < 1) {
                        exTextArr = dom.childValues(exNode, "ows:ExceptionText");
                    }

                    var exLog = new log.LogRecord(exTitle);
                    exLog.addDescriptions(exTextArr);
                    return exLog;
                }
            }
            return null;
        }

        function getXmlServiceExceptionReport(xmlDoc) {
            /*
            <ServiceExceptionReport version="1.1.1" >
            <ServiceException code="MissingParameterValue" locator="request">
            Could not determine geoserver request from http request
            </ServiceException>
            </ServiceExceptionReport>
            */
            var exReportNodes = xmlDoc.getElementsByTagName("ServiceExceptionReport");
            if (exReportNodes.length > 0) {
                var exceptionNodes = dom.childNodes(exReportNodes[0], "ServiceException");
                if (exceptionNodes.length > 0) {
                    var exNode = exceptionNodes[0];
                    var exCode = jQuery(exNode).attr("code");
                    var exTitle = "XML ServiceException";
                    if (exCode > "")
                        exTitle += ": " + exCode;

                    var exLog = new log.LogRecord(exTitle);

                    var exText = dom.nodeValue(exNode);
                    if (exText) {
                        //exText = jQuery.trim(exNode.textContent);
                        exLog.addDescription(exText);
                    }
                    return exLog;
                }
            }
            return null;
        }

        function getXml(url, onSuccess, onFail) {
            //var xDoc = new DOMParser().parseFromString("aaa", "bbb");
            //var xNode = xDoc.getElementsByTagName("ccc")[0];
            getResponse(url, function (response) {
                if (!(response)) {
                    onFail(new log.LogRecord("HTTP response is not valid XML: Empty HTTP response", url));
                    return;
                }

                var xmlDoc;
                try  {
                    xmlDoc = jQuery.parseXML(response);

                    var xmlExceptionReport = getXmlExceptionReport(xmlDoc) || getXmlServiceExceptionReport(xmlDoc);
                    if (xmlExceptionReport) {
                        xmlExceptionReport.url = url;
                        onFail(xmlExceptionReport);
                        return;
                    }
                } catch (e) {
                    var respStr = (response || "").trim();
                    if (respStr.length > 64)
                        respStr = respStr.substr(0, 64) + "...";
                    onFail(new log.LogRecord("HTTP response is not valid XML: " + respStr, url));
                    return;
                }

                onSuccess(xmlDoc);
            }, function (errInfo) {
                onFail(errInfo);
            });
        }
        io.getXml = getXml;
    })(novotive.io || (novotive.io = {}));
    var io = novotive.io;

    // module io
    // ---------------------------------------------------------------------------------------
    (function (log) {
        log.errorsLog = new Array();
        log.warningsLog = new Array();
        log.infosLog = new Array();

        var LogRecord = (function () {
            function LogRecord(message, url, description) {
                this.message = message;
                this.url = url;
                this.name = "LogError";
                this.descriptions = new Array();
                if (description)
                    this.addDescription(description);
            }
            LogRecord.prototype.setMessage = function (msg) {
                this.addDescription(this.message);
                this.message = msg;
            };

            LogRecord.prototype.addDescription = function (dsc) {
                if ((dsc) && (dsc.toLowerCase() != "error") && (this.descriptions.indexOf(dsc) < 0))
                    this.descriptions.push(dsc);
            };

            LogRecord.prototype.addDescriptions = function (dsc) {
                for (var i = 0; i < dsc.length; i++)
                    this.addDescription(dsc[i]);
            };

            LogRecord.prototype.toString = function () {
                var res = this.message;
                if (this.descriptions.length > 0)
                    res += "\r\n - " + this.descriptions.join("\r\n - ");
                if (this.url)
                    res += "\r\n" + this.url;
                return res;
            };

            LogRecord.prototype.convertToHtml = function (s) {
                // convert <div>aaa<div> to html text
                s = s.replace("\n", " ");
                s = s.replace("\r", " ");
                s = s.shortUrls(100);
                s = s.replace("http://", "").replace("https://", "");

                var el = document.createElement("p");
                el.innerText = s;
                return el.innerHTML;
            };

            LogRecord.prototype.toHtml = function (withDescriptions) {
                if (typeof withDescriptions === "undefined") { withDescriptions = true; }
                var res = "<p><strong> " + this.convertToHtml(this.message) + " </strong></p>";
                if (this.url)
                    res += '<p style="color: gray;"> ' + this.convertToHtml(this.url) + " </p>";

                if ((this.descriptions.length > 0) && (withDescriptions)) {
                    var htmlDsc = new Array();
                    for (var i = 0; i < this.descriptions.length; i++)
                        htmlDsc.push(this.convertToHtml(this.descriptions[i]));

                    //jQueryMobile listview control does not support inner list
                    res += "<p> " + " &#8226; " + htmlDsc.join("<br /> &#8226; ") + " </p>";
                }
                return res;
            };

            LogRecord.prototype.addToLog = function (log) {
                var s = this.toString();
                for (var i = 0; i < log.length; i++) {
                    if (log[i].toString().toLowerCase() == s.toLowerCase())
                        return s;
                }

                // This LogRecord not found - add it to log list
                log.push(this);

                for (var i = 0; i < logListeners.length; i++)
                    logListeners[i](this);

                return s;
            };

            LogRecord.prototype.addToErrorsLog = function () {
                this.name = "LogError";
                return this.addToLog(log.errorsLog);
            };

            LogRecord.prototype.addToWarningsLog = function () {
                this.name = "LogWarning";
                return this.addToLog(log.warningsLog);
            };

            LogRecord.prototype.addToInfosLog = function () {
                this.name = "LogInfo";
                return this.addToLog(log.infosLog);
            };
            return LogRecord;
        })();
        log.LogRecord = LogRecord;

        var logListeners = new Array();

        function addLogEventListener(eventListener) {
            logListeners.push(eventListener);
        }
        log.addLogEventListener = addLogEventListener;

        var LogError = (function (_super) {
            __extends(LogError, _super);
            function LogError(err) {
                _super.call(this, err.message);

                if (err.name)
                    this.name = err.name;

                var errObj = err;
                if ("descriptions" in errObj) {
                    this.addDescriptions(errObj.descriptions);
                }
                if ("url" in errObj) {
                    this.url = errObj.url;
                }
            }
            return LogError;
        })(LogRecord);
        log.LogError = LogError;
    })(novotive.log || (novotive.log = {}));
    var log = novotive.log;
})(novotive || (novotive = {}));

jQuery(document).ready(novotive.onDocumentReady);
