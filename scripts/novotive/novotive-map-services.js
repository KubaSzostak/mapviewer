///<reference path="../esri/jsapi/typescript/arcgis-js-api.d.ts"/>
///<reference path="novotive.ts"/>
define(["require", "exports", "esri/geometry/Extent", "esri/SpatialReference", "esri/geometry/webMercatorUtils"], function (require, exports, Extent, SpatialReference, webMercatorUtils) {
    //TODO: run GetImage() after service is loaded and check if resource is interpreted as Image but transferred with MIME type application/vnd.ogc.se_xml
    var mapServicesUtils;
    (function (mapServicesUtils) {
        // Depreaced
        // It was used in previous version of MapViewer
        function wmsExtent(thisNode) {
            // bboxNode must be WGS-84 (EPSG:4326) coordinate system
            function attrToBbox(bboxNode) {
                var minx = Number(bboxNode.getAttribute("minx"));
                var miny = Number(bboxNode.getAttribute("miny"));
                var maxx = Number(bboxNode.getAttribute("maxx"));
                var maxy = Number(bboxNode.getAttribute("maxy"));
                var spatialRef = new SpatialReference(4326);
                var extWgs = new Extent(minx, miny, maxx, maxy, spatialRef);
                return webMercatorUtils.geographicToWebMercator(extWgs);
            }
            // *** Root layer (first <Layer /> node)
            // GeoServer on root layer has only <LatLonBoundingBox /> 
            // ArcGIS on root layer has EX_GeographicBoundingBox(?) and <BoundingBox CRS="EPSG:4326" />
            // *** Child layers
            // GeoServer on child layers has <LatLonBoundingBox /> and <BoundingBox SRS="EPSG:4326" />
            // ArcGIS on child layers has EX_GeographicBoundingBox(?) and <BoundingBox CRS="EPSG:4326" />
            var bboxNodes = novotive.dom.childNodes(thisNode, "LatLonBoundingBox");
            if (bboxNodes.length == 1) {
                return attrToBbox(bboxNodes[0]);
            }
            bboxNodes = novotive.dom.childNodes(thisNode, "BoundingBox");
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
            //return new esri.geometry.Extent(-180, -90, 180, 90, { wkid: 4326 });
            //return undefinied
        }
        mapServicesUtils.wmsExtent = wmsExtent;
        function wmsMercatorEpsg(thisNode) {
            var srsList = novotive.dom.childValues(thisNode, "srs"); //EPSG:4326
            var crsList = novotive.dom.childValues(thisNode, "crs");
            var epsgList = [3857, 3587, 102100, 102113, 900913];
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
        mapServicesUtils.wmsMercatorEpsg = wmsMercatorEpsg;
        function wmsStyle(thisNode) {
            var firstStyle = null;
            var styleNodes = novotive.dom.childNodes(thisNode, "Style");
            if (styleNodes.length < 1)
                return "Default";
            // Do not look for 'Default' style. Use first style as default
            return novotive.dom.childValue(styleNodes[0], "Name");
        }
        mapServicesUtils.wmsStyle = wmsStyle;
    })(mapServicesUtils || (mapServicesUtils = {}));
});
//# sourceMappingURL=novotive-map-services.js.map