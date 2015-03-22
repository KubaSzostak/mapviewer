///<reference path="mapviewer.ts"/>
mapViewer.mapConfig.centerX = 19.0;
mapViewer.mapConfig.centerY = 54.0;
mapViewer.mapConfig.zoom = 6;
mapViewer.mapConfig.basemap = "topo";
// Supported mapService types: esri.layers.WMSLayer
mapViewer.mapConfig.mapServices.push({
    serviceType: "esri.layers.WMSLayer",
    url: "http://wms.gdos.gov.pl/geoserver/wms?SERVICE=WMS&request=GetCapabilities",
    title: "GDOŚ",
    visible: true,
    opacity: 0.7
});
//# sourceMappingURL=mapviewer-config.js.map