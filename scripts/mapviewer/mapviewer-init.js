///<reference path="mapviewer.ts"/>
mapViewer.config.mapConfig.centerX = 19.0;
mapViewer.config.mapConfig.centerY = 54.0;
mapViewer.config.mapConfig.zoom = 6;
mapViewer.config.mapConfig.basemap = "topo";
// Supported mapService types: esri.layers.WMSLayer, esri.layers.WMTSLayer
mapViewer.config.mapConfig.mapServices.push({
    serviceType: "esri.layers.WMSLayer",
    url: "http://wms.gdos.gov.pl/geoserver/wms?SERVICE=WMS&request=GetCapabilities",
    title: "GDOŚ"
});
//# sourceMappingURL=mapviewer-init.js.map