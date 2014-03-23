var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _this = this;
///<reference path="ts/esri.d.ts"/>
///<reference path="novotive.ts"/>
dojo.require("esri.map");
dojo.require("esri.layers.wms");
dojo.require("esri.dijit.Popup");
dojo.require("esri.dijit.PopupMobile");
dojo.require("esri.tasks.locator");

var novotive;
(function (novotive) {
    novotive.mercatorEpsgList = [3857, 3587, 102100, 102113, 900913];
    novotive.defaultMercatorEpsg = 3857;

    novotive.mapServiceTypes = {
        wms: "WMS"
    };
    novotive.res = {
        emptyImageUrl: "http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif"
    };

    (function (dom) {
        function wmsExtent(thisNode) {
            // bboxNode must be WGS-84 (EPSG:4326) coordinate system
            function attrToBbox(bboxNode) {
                var minx = Number(bboxNode.getAttribute("minx"));
                var miny = Number(bboxNode.getAttribute("miny"));
                var maxx = Number(bboxNode.getAttribute("maxx"));
                var maxy = Number(bboxNode.getAttribute("maxy"));

                var spatialRef = new esri.SpatialReference(4326);
                var extWgs = new esri.geometry.Extent(minx, miny, maxx, maxy, spatialRef);
                return esri.geometry.geographicToWebMercator(extWgs);
            }

            // *** Root layer (first <Layer /> node)
            // GeoServer on root layer has only <LatLonBoundingBox />
            // ArcGIS on root layer has EX_GeographicBoundingBox(?) and <BoundingBox CRS="EPSG:4326" />
            // *** Child layers
            // GeoServer on child layers has <LatLonBoundingBox /> and <BoundingBox SRS="EPSG:4326" />
            // ArcGIS on child layers has EX_GeographicBoundingBox(?) and <BoundingBox CRS="EPSG:4326" />
            var bboxNodes = dom.childNodes(thisNode, "LatLonBoundingBox");
            if (bboxNodes.length == 1) {
                return attrToBbox(bboxNodes[0]);
            }

            bboxNodes = dom.childNodes(thisNode, "BoundingBox");
            for (var i = 0; i < bboxNodes.length; i++) {
                //  SRS but ArcGIS uses CRS
                // CRS for WMS version 1.3.0; SRS for WMS versions 1.1.1 and below
                var bboxNode = bboxNodes[i];
                if (bboxNode.getAttribute("SRS") == "EPSG:4326")
                    return attrToBbox(bboxNode);
                if (bboxNode.getAttribute("CRS") == "EPSG:4326")
                    return attrToBbox(bboxNode);
            }

            return null;
        }
        dom.wmsExtent = wmsExtent;

        function wmsMercatorEpsg(thisNode) {
            var srsList = dom.childValues(thisNode, "srs");
            var crsList = dom.childValues(thisNode, "crs");
            var epsgList = novotive.mercatorEpsgList;

            for (var i = 0; i < epsgList.length; i++) {
                if (jQuery.inArray("EPSG:" + epsgList[i], srsList) > -1) {
                    return epsgList[i];
                }
                if (jQuery.inArray("EPSG:" + epsgList[i], crsList) > -1) {
                    return epsgList[i];
                }
            }
            return -1;
        }
        dom.wmsMercatorEpsg = wmsMercatorEpsg;

        function wmsStyle(thisNode) {
            var firstStyle = null;
            var styleNodes = dom.childNodes(thisNode, "Style");

            if (styleNodes.length < 1)
                return "Default";

            // Do not look for 'Default' style. Use first style as default
            return dom.childValue(styleNodes[0], "Name");
        }
        dom.wmsStyle = wmsStyle;
    })(novotive.dom || (novotive.dom = {}));
    var dom = novotive.dom;
})(novotive || (novotive = {}));

dojo.ready(function () {
    dojo.declare("novotive.WmsService", esri.layers.DynamicMapServiceLayer, {
        constructor: function (config) {
            var me = this;
            me.serviceType = novotive.mapServiceTypes.wms;
            me.loadError = null;

            me.url = config.url.split("?")[0] + "?";
            me.title = config.title || "WMS Service";
            ;
            me.displayTitle = config.displayTitle;
            me.description = config.description;

            if (config.extent && config.spatialReference) {
                me.initialExtent = config.extent;
                me.fullExtent = config.extent;
                me.spatialReference = config.spatialReference;
                me.layers = config.layers;
                me.opacity = config.opacity;
                me.visible = config.visible;
                me.loaded = true;
                me.onLoad(me);
                return;
            }

            me.loaded = false;
            me.spatialReference = new esri.SpatialReference({ wkid: novotive.defaultMercatorEpsg });
            me.layers = new Array();

            me.initialExtent = mapViewer.globeExtent();
            me.fullExtent = mapViewer.globeExtent();

            var capabilitiesParams = {
                service: "wms",
                request: "GetCapabilities",
                version: "1.1.1"
            };

            novotive.io.getXml(me.url + dojo.objectToQuery(capabilitiesParams), function (xml) {
                try  {
                    me.parseCapabilities(xml);
                    me.loaded = true;
                    me.onLoad(me);
                } catch (e) {
                    var lg = new novotive.log.LogError(e);
                    lg.setMessage("Loading WMS capabilities failed");
                    lg.addDescription("Ivalid GetCapabilities XML format");
                    lg.url = me.url;
                    me.onError(lg);
                }
            }, function (errInfo) {
                errInfo.setMessage("Loading WMS capabilities failed");
                me.loadError = errInfo;
                me.onError(errInfo);
            });
        }
    });

    novotive.WmsService.prototype.getConfig = function () {
        var me = this;
        return {
            url: me.url,
            title: me.title,
            displayTitle: me.displayTitle,
            description: me.description,
            serviceType: me.serviceType,
            extent: me.fullExtent,
            spatialReference: me.spatialReference,
            layers: me.layers,
            opacity: me.opacity,
            visible: me.visible
        };
    };

    novotive.WmsService.prototype.parseCapabilities = function (xmlDoc) {
        //xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
        //var capability = getXmlNodes(xmlDoc.childNodes[0], "Capability")[0];
        var me = this;
        var capabilityNode = xmlDoc.getElementsByTagName("Capability")[0];
        var serviceNode = xmlDoc.getElementsByTagName("Service")[0];
        var rootLayerNode = novotive.dom.childNodes(capabilityNode, "Layer")[0];

        var epsg = novotive.dom.wmsMercatorEpsg(rootLayerNode);
        if (epsg < 1) {
            epsg = novotive.defaultMercatorEpsg;
            var lg = new novotive.log.LogRecord("WMS Service does not support Web Mercator coordinnate system definition, hardcoded EPSG:" + novotive.defaultMercatorEpsg + " used instead", this.url);
            console.warn(lg.addToWarningsLog());
        }

        me.spatialReference = new esri.SpatialReference({ wkid: epsg });

        me.title = novotive.dom.childValue(serviceNode, "Title");
        me.description = novotive.dom.childValue(serviceNode, "Abstract");
        me.initialExtent = novotive.dom.wmsExtent(rootLayerNode);
        me.fullExtent = novotive.dom.wmsExtent(rootLayerNode);

        this.layers = new Array();
        var childLayers = novotive.dom.childNodes(rootLayerNode, "Layer");
        for (var i = 0; i < childLayers.length; i++) {
            var subLayer = new Object();
            var childLayerNode = childLayers[i];
            subLayer.name = novotive.dom.childValue(childLayerNode, "Name");
            subLayer.title = novotive.dom.childValue(childLayerNode, "Title");
            subLayer.description = novotive.dom.childValue(childLayerNode, "Abstract");
            subLayer.extent = novotive.dom.wmsExtent(childLayerNode);
            subLayer.visible = true;
            subLayer.style = novotive.dom.wmsStyle(childLayers[i]);

            me.layers.push(subLayer);
        }
    };

    novotive.WmsService.prototype.getImageUrl = function (extent, width, height, callback) {
        var me = this;

        var layerList = new Array();
        var styleList = new Array();
        for (var i = 0; i < me.layers.length; i++) {
            var layer = me.layers[i];
            if (layer.visible) {
                layerList.push(layer.name);
                styleList.push(layer.style);
            }
        }

        if (layerList.length < 1) {
            callback(novotive.res.emptyImageUrl);
            return;
        }

        var params = {
            // constant values
            service: "wms",
            request: "GetMap",
            version: "1.1.1",
            transparent: true,
            format: "image/png",
            //bgcolor: "ffffff",
            exceptions: "application/vnd.ogc.se_xml",
            // changing values
            layers: layerList.join(","),
            styles: styleList.join(","),
            srs: "EPSG:" + this.spatialReference.wkid,
            bbox: extent.xmin + "," + extent.ymin + "," + extent.xmax + "," + extent.ymax,
            width: width,
            height: height
        };

        var imgUrl = me.url + dojo.objectToQuery(params);
        callback(imgUrl);
        return imgUrl;
    };
});
//@ sourceMappingURL=novotive-map-services.js.map
