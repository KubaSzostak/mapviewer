///<reference path="../typings/jquery/jquery.d.ts"/>
///<reference path="../typings/dojo/dojo.d.ts"/>
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
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
        var s;
    };
}
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    };
}
var strUtils;
(function (strUtils) {
    function contains(src) {
        var strings = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            strings[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < strings.length; i++) {
            if (src.indexOf(strings[i]) > -1)
                return true;
        }
        return false;
    }
    strUtils.contains = contains;
    function replaceUrlWithHtmlLinks(src, target, rel) {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        var attr = "";
        if (target) {
            attr += ' target="' + target + '" ';
        }
        if (rel) {
            attr += ' rel="' + rel + '" ';
        }
        return src.replace(exp, "<a " + attr + " href='$1'>$1</a>");
    }
    strUtils.replaceUrlWithHtmlLinks = replaceUrlWithHtmlLinks;
    function shortUrls(src, maxUrlLength) {
        if (maxUrlLength === void 0) { maxUrlLength = 100; }
        var res = src.replace(/(https?\:\/\/[^\s]*)/gi, function (match) {
            if (match.length > maxUrlLength)
                return match.substring(0, maxUrlLength) + "...";
            else
                return match;
        });
        return res;
    }
    strUtils.shortUrls = shortUrls;
})(strUtils || (strUtils = {}));
// extensions
// ---------- ------ ---------------------------- -------- ------------ ----------------------
var novotive;
(function (novotive) {
    novotive.version = "1.5.318"; // <p data-nvt-version="" ></p>
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
    function getLowerCaseHost() {
        return document.location.host.toLowerCase();
    }
    function isDeveloperHost() {
        var host = getLowerCaseHost();
        return (host.indexOf("localhost") > 0) || (host.indexOf("192.168.1.158") > 0) || (host.toLowerCase().indexOf('file:///p:/') == 0);
    }
    novotive.isDeveloperHost = isDeveloperHost;
    function isUmgdyHost() {
        var host = getLowerCaseHost();
        return strUtils.contains(host, "umgdy.gov.pl");
    }
    novotive.isUmgdyHost = isUmgdyHost;
    var config;
    (function (config) {
        config.localProxyUrl = null; //  /geoportal/catalog/download/proxy.jsp
        config.remoteProxyUrl = "http://novotive.appspot.com/proxy?url=";
        function getSetting(key) {
            if (!(localStorage))
                return null;
            var stgStr = localStorage.getItem(key);
            if (stgStr)
                return JSON.parse(stgStr);
            else
                return null;
        }
        config.getSetting = getSetting;
        function saveSetting(key, value) {
            if (!(localStorage))
                return;
            localStorage.setItem(key, JSON.stringify(value));
        }
        config.saveSetting = saveSetting;
    })(config = novotive.config || (novotive.config = {}));
    var dom;
    (function (dom) {
        function nodeValue(thisNode) {
            return (thisNode.nodeValue || thisNode.textContent || "").trim();
        }
        dom.nodeValue = nodeValue;
        function childNodesCore(thisNode, tagName) {
            var res = new Array();
            if (!(thisNode))
                return res;
            var childNodes = thisNode.childNodes;
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
                tagNames = path.split("/"); // tag name can be "Records/Record/Title";
            else
                tagNames = [null];
            var iNode = thisNode;
            var iNodes;
            for (var i = 0; i < tagNames.length; i++) {
                var iTag = tagNames[i];
                var iNodes = childNodesCore(iNode, iTag);
                if (iNodes.length > 0) {
                    iNode = iNodes[0];
                }
                else {
                    return iNodes; // empty array
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
    })(dom = novotive.dom || (novotive.dom = {}));
    // module dom
    var io;
    (function (io) {
        // Cross domain Http request
        function createCORSRequest(url, method) {
            if (method === void 0) { method = "GET"; }
            var xhr;
            try {
                // XDomainRequest for IE.
                xhr = new XDomainRequest();
                xhr.open(method, url);
                return xhr;
            }
            catch (e) {
            }
            try {
                // XHR for Chrome/Firefox/Opera/Safari... and IE10
                xhr = new XMLHttpRequest();
                //if  ("withCredentials" in xhr) { //failed in IE10+Win8                    
                xhr.open(method, url, true);
                //} else { // CORS not supported.                   
                //xhr = null;
                //}
                return xhr;
            }
            catch (e) {
                return null;
            }
        }
        // createCORSRequest()
        function getProxyResponse(url, onSuccess, onFail) {
            // By default web browsers does not support downloading data from outside of javascript domain.
            // You have to use proxy or CORS 
            // http://www.html5rocks.com/en/tutorials/cors/
            if (!(url)) {
                onFail(new log.LogRecord("Remote proxy HTTP request failed: url not set"), log.errorsLog);
                return;
            }
            var proxyUlr = novotive.config.remoteProxyUrl + encodeURIComponent(url);
            var xhr = createCORSRequest(proxyUlr);
            if (!xhr) {
                onFail(new log.LogRecord("Your web browser does not support this feature (cross domain requests)"), log.errorsLog);
                return;
            }
            xhr.onload = function () {
                if (xhr.responseText)
                    onSuccess(xhr.responseText);
                else
                    onFail(new log.LogRecord("Remote proxy HTTP request failed: empty response.", url), log.errorsLog);
            };
            xhr.onerror = function () {
                onFail(new log.LogRecord("Remote proxy HTTP request failed", url, xhr.responseText), log.errorsLog);
            };
            xhr.send();
        }
        function getLocalResponse(requestUrl, onSuccess, onFail) {
            if (!(requestUrl)) {
                onFail(new log.LogRecord("Local HTTP request failed: url not set"), log.errorsLog);
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
                    onFail(new log.LogRecord("Local HTTP request failed: empty response.", requestUrl), log.errorsLog);
            });
            response.fail(function (jqXHR, textStatus, errorThrown) {
                onFail(new log.LogRecord("Local HTTP request failed", requestUrl, textStatus), log.errorsLog);
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
                    onFail(localErrorStatus, log.errorsLog);
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
                    var exNode = exNodes[0]; // return only the first one
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
                    onFail(new log.LogRecord("HTTP response is not valid XML: Empty HTTP response", url), log.errorsLog);
                    return;
                }
                var xmlDoc;
                try {
                    xmlDoc = jQuery.parseXML(response);
                    var xmlExceptionReport = getXmlExceptionReport(xmlDoc) || getXmlServiceExceptionReport(xmlDoc);
                    if (xmlExceptionReport) {
                        xmlExceptionReport.url = url;
                        onFail(xmlExceptionReport, log.errorsLog);
                        return;
                    }
                }
                catch (e) {
                    var respStr = (response || "").trim();
                    if (respStr.length > 64)
                        respStr = respStr.substr(0, 64) + "...";
                    onFail(new log.LogRecord("HTTP response is not valid XML: " + respStr, url), log.errorsLog);
                    return;
                }
                onSuccess(xmlDoc);
            }, function (errInfo) {
                onFail(errInfo, log.errorsLog);
            });
        }
        io.getXml = getXml;
    })(io = novotive.io || (novotive.io = {}));
    // module io
    // ---------------------------------------------------------------------------------------
    var log;
    (function (__log) {
        __log.errorsLog = new Array();
        __log.warningsLog = new Array();
        __log.infosLog = new Array();
        var logListeners = new Array();
        var _log = console.log;
        var _warn = console.warn;
        var _error = console.error;
        var _info = console.info;
        // all log items should be displayed in console window
        function init() {
            console.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var res = _log.apply(console, args);
                addToCustomLog("LogInfo", __log.infosLog, args);
                return res;
            };
            console.info = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var res = _info.apply(console, args);
                addToCustomLog("LogInfo", __log.infosLog, args);
                return res;
            };
            console.warn = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var res = _warn.apply(console, args);
                addToCustomLog("LogWarning", __log.warningsLog, args);
                return res;
            };
            console.error = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                var res = _error.apply(console, args);
                addToCustomLog("LogError", __log.errorsLog, args);
                return res;
            };
        }
        __log.init = init;
        function addLogEventListener(eventListener) {
            logListeners.push(eventListener);
        }
        __log.addLogEventListener = addLogEventListener;
        function addToCustomLog(name, log) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            if ((args) && (args.length) && (args[0] instanceof LogRecord)) {
                var lr = args[0];
                lr.name = name;
                console.group(lr.message);
                console.error(lr.name);
                if (lr.url)
                    console.info(lr.url);
                for (var i = 0; i < lr.descriptions.length; i++)
                    console.log(lr.descriptions[i]);
                console.groupEnd();
                addToLog(lr, log);
            }
        }
        function addToLog(rec, log) {
            var s = rec.toString();
            for (var i = 0; i < log.length; i++) {
                if (log[i].toString().toLowerCase() == s.toLowerCase())
                    return s;
            }
            // This LogRecord not found - add it to log list
            log.push(rec);
            for (var i = 0; i < logListeners.length; i++)
                logListeners[i](rec, log);
            return s;
        }
        var LogRecord = (function () {
            function LogRecord(msg, url, description) {
                this.url = url;
                this.name = "LogError";
                this.descriptions = new Array();
                if (typeof msg == "string") {
                    this.message = msg;
                }
                else {
                    var err = msg;
                    this.message = err.message;
                    this.name = err.name;
                    if ("descriptions" in err) {
                        this.addDescriptions(err.descriptions);
                    }
                    if ("url" in err) {
                        this.url = err.url;
                    }
                }
                if (description)
                    this.addDescription(description);
            }
            LogRecord.prototype.setMessage = function (msg) {
                this.addDescription(this.message); // Move actual message to descriptions
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
                s = strUtils.shortUrls(s, 100);
                s = s.replace("http://", "").replace("https://", "");
                var el = document.createElement("p");
                el.innerText = s;
                return el.innerHTML;
            };
            LogRecord.prototype.toHtml = function (withDescriptions) {
                if (withDescriptions === void 0) { withDescriptions = true; }
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
            return LogRecord;
        })();
        __log.LogRecord = LogRecord;
    })(log = novotive.log || (novotive.log = {}));
})(novotive || (novotive = {}));
//jQuery(document).ready(novotive.onDocumentReady);
//# sourceMappingURL=novotive.js.map