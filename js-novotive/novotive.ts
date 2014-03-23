

declare var jQuery;

declare module dojo {
    export function ready(callback: () => any);
    export function connect(obj: any, event: string, method: Function): any;
    export function disconnect(handle: any): any;
    export function declare(className?: string, superclass?: Function, props?: Object): Function;
    export function require(module: string);
    export function objectToQuery(map: Object): String;
    export function create(tag: string): HTMLElement;
}

// ---------- ------ ---------------------------- -------- ------------ ----------------------


if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
        ? Math.ceil(from)
        : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++)
        {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

interface String {
    contains(...strings: string[]): boolean;
    replaceUrlWithHtmlLinks(target?: string, rel?: string): string;
    shortUrls(maxUrlLength?: number): string;
}

String.prototype.contains = function (...strings: string[]): boolean {    
    for (var i = 0; i < strings.length; i++) {
        if (this.indexOf(strings[i]) > -1)
            return true;
    }
    return false;
}

String.prototype.replaceUrlWithHtmlLinks = function (target?: string, rel?: string): string {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var attr = "";
    if (target) {
        attr += ' target="' + target + '" ';
    }
    if (rel) {
        attr += ' rel="' + rel + '" ';
    }
    return this.replace(exp, "<a "+attr+" href='$1'>$1</a>"); 
}

String.prototype.shortUrls = function (maxUrlLength: number = 100): string {
    var res = this.replace(/(https?\:\/\/[^\s]*)/gi, function (match) {
        if (match.length > maxUrlLength)
            return match.substring(0, maxUrlLength) + "...";
        else
            return match;
    });
    return res;
}


// extensions
// ---------- ------ ---------------------------- -------- ------------ ----------------------

module novotive {

    export var version = "1.4.909"; // <p data-nvt-version="" ></p>
    export var homeUrl = "/";

    export function onDocumentReady() {
                
        jQuery(document).find('[data-nvt-url="home"]').each(function () {
            if (this.href) {
                this.href = homeUrl;
            }
        });
        jQuery(document).find('[data-nvt-version]').text(version);
    }

    export function urlParameters(): any {
        //inbox.html?msg=1234&type=unread#msg-content
        var res: any = new Object();
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

    export function isDeveloperHost() {
        return (document.location.host.indexOf("localhost") > 0)
            || (document.location.host.indexOf("192.168.1.158") > 0)
            || (document.location.href.toLowerCase().indexOf('file:///p:/') == 0);
    }

    export function isUmgdyHost() {
        return document.location.host.toLowerCase().contains("umgdy.gov.pl");
    }

    export module config {
        export var localProxyUrl = null; //  /geoportal/catalog/download/proxy.jsp
        export var remoteProxyUrl = "http://novotive.appspot.com/proxy?url=";
    }

    export module dom {

        export function nodeValue(thisNode: Node): string {
            return (thisNode.nodeValue || thisNode.textContent ||  "").trim();
        }

        function childNodesCore(thisNode: Node, tagName?: string): Array<Node> {
            var res = new Array<Node>();
            if (!(thisNode))
                return res;

            var childNodes = (<Node>thisNode).childNodes;
            for (var i = 0; i < childNodes.length; i++) {
                var node = childNodes[i];
                var tagNameValid = (!(tagName)) || (node.nodeName.toLowerCase() == tagName.toLowerCase());
                var nodeHasValues = (node.childNodes.length > 0) || (nodeValue(node) != "") || ((node.attributes != null) && (node.attributes.length > 0));
                if (tagNameValid && nodeHasValues) {
                        res.push(node);
                }
            }
            return res;
        };

        export function childNodes(thisNode: Node, path?: string): Array<Node> {
            var tagNames: Array<string>;
            if (path)
                tagNames = path.split("/"); // tag name can be "Records/Record/Title";
            else
                tagNames = [null];
            var iNode = thisNode;
            var iNodes: Array<Node>;
            
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
        };

        export function childNode(thisNode: Node, path?: string): Node {
            var nodes = childNodes(thisNode, path);
            if (nodes.length > 0)
                return nodes[0];
            else
                return null;
        }

        export function childValues(thisNode: Node, path?: string): Array<string> {
            var res = new Array<string>();

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
        };

        export function childValue(thisNode: Node, path?: string) : string {
            var values = childValues(thisNode, path);
            if (values.length > 0)
                return values[0];
            return "";
        };

        export function childAttr(thisNode: Node, path: string, attrName: string): string {
            var nodes = childNodes(thisNode, path);
            if (nodes.length > 0)
                return jQuery(nodes[0]).attr(attrName);
            else
                return "";
        }
    }
    // module dom
    
    export module io {

        // Cross domain Http request
        function createCORSRequest(url: string, method: string = "GET") {
            
            var xhr: any;

            try {
                // XDomainRequest for IE.
                xhr = new XDomainRequest();
                xhr.open(method, url);
                return xhr;
            }
            catch (e) {
                // XDomainRequest not supported -> try usuing XMLHttpRequest
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

            } catch (e) {
                return null;
            }
        }
        // createCORSRequest()


        function getProxyResponse(url: string, onSuccess: (response: any) => any, onFail: log.LogEventListener) {

            // By default web browsers does not support downloading data from outside of javascript domain.
            // You have to use proxy or CORS 
            // http://www.html5rocks.com/en/tutorials/cors/

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

        function getLocalResponse(requestUrl, onSuccess: (response: any) => any, onFail: log.LogEventListener) {

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

        function getResponse(url, onSuccess: (response: any) => any, onFail: novotive.log.LogEventListener) {

            getLocalResponse(
                url,
                function (localResponse) {
                    onSuccess(localResponse);
                },
                function (localErrorStatus) { // localResponse.onFail
                    getProxyResponse(
                        url,
                        function (proxyResponse) {
                            onSuccess(proxyResponse);
                        },
                        function (proxyErrorStatus) {
                            localErrorStatus.setMessage(proxyErrorStatus.message);
                            localErrorStatus.addDescriptions(proxyErrorStatus.descriptions);
                            onFail(localErrorStatus);
                        }
                        );
                }
                );
        }

        function getXmlExceptionReport(xmlDoc: Document): log.LogRecord {
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

        function getXmlServiceExceptionReport(xmlDoc: Document): log.LogRecord {
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

        export function getXml(url, onSuccess: (response: Document) => any, onFail: log.LogEventListener) {

            //var xDoc = new DOMParser().parseFromString("aaa", "bbb");
            //var xNode = xDoc.getElementsByTagName("ccc")[0];

            getResponse(
                url,
                function (response) { // onSuccess
                    if (!(response)) {
                        onFail(new log.LogRecord("HTTP response is not valid XML: Empty HTTP response", url));
                        return;
                    }

                    var xmlDoc;
                    try {
                        xmlDoc = jQuery.parseXML(response);

                        var xmlExceptionReport = getXmlExceptionReport(xmlDoc)
                            || getXmlServiceExceptionReport(xmlDoc);
                        if (xmlExceptionReport) {
                            xmlExceptionReport.url = url;
                            onFail(xmlExceptionReport);
                            return;
                        }
                    } catch (e) {
                        var respStr: string = (response || "").trim();
                        if (respStr.length > 64)
                            respStr = respStr.substr(0, 64) + "...";
                        onFail(new log.LogRecord("HTTP response is not valid XML: " + respStr, url));
                        return;
                    }

                    onSuccess(xmlDoc);
                },
                function (errInfo) { // onFail
                    onFail(errInfo);
                }
                );
        }

    }
    // module io

    // ---------------------------------------------------------------------------------------

    export module log {
        export var errorsLog: Array<LogError> = new Array<LogError>();
        export var warningsLog: Array<LogError> = new Array<LogError>();
        export var infosLog: Array<LogError> = new Array<LogError>();

        export class LogRecord implements Error {

            constructor(public message: string, public url?: string, description?: string) {
                if (description)
                    this.addDescription(description);
            }

            public name: string = "LogError";
            public descriptions: Array<string> = new Array<string>();

            public setMessage(msg: string) {
                this.addDescription(this.message); // Add actual message to descriptions
                this.message = msg;
            }

            public addDescription(dsc: string) {
                if ((dsc) && (dsc.toLowerCase() != "error") && (this.descriptions.indexOf(dsc) < 0))
                    this.descriptions.push(dsc);
            }

            public addDescriptions(dsc: Array<string>) {
                for (var i = 0; i < dsc.length; i++)
                    this.addDescription(dsc[i]);
            }

            public toString() {
                var res = this.message;
                if (this.descriptions.length > 0)
                    res += "\r\n - " + this.descriptions.join("\r\n - ");
                if (this.url)
                    res += "\r\n" + this.url;
                return res;
            }

            convertToHtml(s: string) {
                // convert <div>aaa<div> to html text
                s = s.replace("\n", " ");
                s = s.replace("\r", " ");
                s = s.shortUrls(100);
                s = s.replace("http://", "").replace("https://", "");

                var el = document.createElement("p");
                el.innerText = s;
                return el.innerHTML;
            }

            public toHtml(withDescriptions: boolean = true) {
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
            }

            public addToLog(log: Array<LogError>) {
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
            }

            public addToErrorsLog() {
                this.name = "LogError";
                return this.addToLog(log.errorsLog);
            }

            public addToWarningsLog() {
                this.name = "LogWarning";
                return this.addToLog(log.warningsLog);
            }

            public addToInfosLog() {
                this.name = "LogInfo";
                return this.addToLog(log.infosLog);
            }
        }

        export interface LogEventListener {
            (logRec: LogRecord)
        }

        var logListeners: Array<LogEventListener> = new Array<LogEventListener>();

        export function addLogEventListener(eventListener: LogEventListener) {
            logListeners.push(eventListener);
        }

        export class LogError extends LogRecord {
            constructor(err: Error) {
                super(err.message);

                if (err.name)
                    this.name = err.name;

                var errObj = <any>err;
                if ("descriptions" in errObj) {
                    this.addDescriptions(errObj.descriptions);
                }
                if ("url" in errObj) {
                    this.url = errObj.url;
                }
            }
        }
    }
    // module log

    // --------------------------------------------------------------------------------------
}

jQuery(document).ready(novotive.onDocumentReady);

