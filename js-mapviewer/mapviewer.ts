

// http://help.arcgis.com/en/webapi/javascript/arcgis/jssamples/layers_custom_wms.html
// http://forums.arcgis.com/threads/20786-overlay-a-WMS-layer-on-top-of-Bingmap-Tilelayer
// http://forums.arcgis.com/threads/52306-How-to-add-different-WMS-Layer-to-one-map
// http://forums.arcgis.com/threads/59077-WMS-services-not-loading-spatial-reference-problems
// http://forums.arcgis.com/threads/61254-WMSLayer-and-EPSG-WKID-codes
// http://forums.arcgis.com/threads/73275-WMS-stuck-on-SRS-EPSG-102100
// https://www.google.pl/search?q=arcgis+javascript+wmslayer+EPSG+102100
// http://forums.arcgis.com/threads/73275-WMS-stuck-on-SRS-EPSG-102100

//http://www.nationalatlas.gov/infodocs/ogcwms.html


///<reference path="../js-novotive/ts/esri.d.ts"/>
///<reference path="../js-languative/languative.ts"/>
///<reference path="../js-novotive/novotive.ts"/>
///<reference path="../js-novotive/novotive-map-services.ts"/>



if (!(dojo) || (!jQuery)) {
    window.location.replace("error-app.html");
    //return;
}



module mapViewer {

    export var map: any = null;



    
    
    export var strings = {
        browserDoesNotSupportThis: "Your web browser does not support this feature"
    }

    export var res = {
        locationIconUrl: "",
        locationFixIconUrl: ""
    }

    export function isReady(): boolean {
        if (!mapViewer.map)
            return false;
        if (!mapViewer.map.loaded)
            return false;
        if (!(map.root) || !(map.root.clientHeight) || !(map.root.clientWidth))
            return false;
        if ((map.root.clientHeight < 2) || (map.root.clientWidth < 2))
            return false;

        return true;
    }

    export function globeExtent() {
        return new esri.geometry.Extent({
            xmin: -20037508.34,
            ymin: -20037508.34,
            xmax: 20037508.34,
            ymax: 20037508.34,
            spatialReference: { wkid: 3857 } // equals to: 3857 3587* 3785 102100* 102113* 900913 
        });
    }

    export function browserSupported() {
        return jQuery.support.ajax && jQuery.support.cors && (localStorage);
    }

    // ----------------------------------------------------------------------------------------

    export module config {

        export var logTooltipsDelay = 15; // seconds

        export var initConfig = {
            mapServices: new Array()
        };

        export function getSetting(key: string) {
            if (!(localStorage))
                return null;
            var stgStr = localStorage.getItem(key);
            if (stgStr)
                return JSON.parse(stgStr);
            else
                return null;
        }

        export function saveSetting(key: string, value: any) {
            if (!(localStorage))
                return;
            localStorage.setItem(key, JSON.stringify(value));
        }

        export function saveUserMapServices() {

            var services = new Array<any>();

            for (var j = 0; j < mapViewer.map.layerIds.length; j++) {
                var mapService = <novotive.MapService>mapViewer.map.getLayer(map.layerIds[j]);
                if (mapService.getConfig)
                    services.push(mapService.getConfig());
            }
            
            saveSetting("mapViewer.config.mapServices", services);

            saveSetting("mapViewer.config.basemap", mapViewer.map.getBasemap());
            saveSetting("mapViewer.config.zoom", mapViewer.map.getZoom());
        }

        export function getUserMapServices() {
            return getSetting("mapViewer.config.mapServices");
        }

        export function getMapOptions() {
            var baseMap = getSetting("mapViewer.config.basemap") || "topo";
            var zoom = getSetting("mapViewer.config.zoom") || 4;
            if (zoom > 10)
                zoom = 10;
            if (zoom < 4)
                zoom = 4;
            return {
                basemap: baseMap,
                zoom: zoom,
                minZoom: 2,
                autoResize: false,
                center: [19, 54],
                slider: false, // ZoomIn, ZoomOut buttons
                infoWindow: new esri.dijit.Popup(null, dojo.create("div")) // Define a popup 
            };
        }

    }
    // module config 

    // ----------------------------------------------------------------------------------------

    export module ui {
        export var lastLogMessage = "";

        export function showMap() {
            hideMenuPanel();
            jQuery.mobile.changePage("#map", { role: "page", changeHash: true, transition: "fade" });
            map.reposition();
            map.resize();
        }

        export function showDialog(id: string, dlgTransition: string = "fade") {
            jQuery.mobile.changePage("#" + id, { role: "dialog", changeHash: false, transition: dlgTransition });
        }

        export function hideMenuPanel() {
            jQuery('#menuPanel').panel('close');
        }

        export function setInnerHtml(tagId: string, html: string) {
            var cssDisplay = "none";
            if (html && (html != ""))
                cssDisplay = "block";

            var tag = jQuery("#" + tagId);
            tag.html(html);
            tag.css("display", cssDisplay);
        }

        export function showLogMessage(rec: novotive.log.LogRecord) {

            jQuery("#mapErrorsCount").text(novotive.log.errorsLog.length);
            jQuery("#mapWarningsCount").text(novotive.log.warningsLog.length);

            
            if (novotive.log.errorsLog.length > 0)
                jQuery("#mapErrorsCountContainer").css("display", "inline");
            if (novotive.log.warningsLog.length > 0)
                jQuery("#mapWarningsCountContainer").css("display", "inline");

            var msgText = jQuery("#mapMessage");
            msgText.fadeOut(function () { // hide previous message
                msgText.html(rec.message); // change text message
            }).fadeIn(function () {

                    var msgContainer = jQuery("#mapMessageContainer");
                    msgContainer.fadeIn(function () { // show message container 
                        lastLogMessage = rec.toString().toLowerCase();
                    }).delay(config.logTooltipsDelay * 1000).fadeIn(function () { // wait XX seconds
                            if (lastLogMessage == rec.toString().toLowerCase()) // check if no other messages displayed
                                msgContainer.fadeOut();
                        });
                }
                ); // show new message   

        }
        
        export function zoomInOut(value: number) {
            if (!mapViewer.isReady())
                return;

            var zoomLevel = mapViewer.map.getZoom() + value;

            if (zoomLevel > mapViewer.map.getMaxZoom()) {
                console.info("New zoom level is higher than map.getMaxZoom()");
                return;
            }
            if (zoomLevel < mapViewer.map.getMinZoom()) {
                console.info("New zoom level is lower than map.getMinZoom()");
                return;
            }
            mapViewer.map.setZoom(zoomLevel);
        }

        function getLogSection(section: string, log: Array<novotive.log.LogError>, dataIcon: string= 'false') {
            if (!(log))
                return "";
            if (log.length < 1)
                return "";

            var res = '<li data-role="list-divider" data-phrase-id="' + section + '">' + section + '</li>';

            for (var i = 0; i < log.length; i++) {
                res += '<li data-icon="'+dataIcon+'"><a href="#">' + log[i].toHtml() + '</a></li>';
            }
            return res + "\r\n";
        }

        export function showLogDialog(errors: Array<novotive.log.LogError>, warnings: Array<novotive.log.LogError>, infos: Array<novotive.log.LogError>) {
            var logSections = "";
            logSections += getLogSection("Errors", errors, "delete");
            logSections += getLogSection("Warnings", warnings, "alert");
            logSections += getLogSection("Informations", infos, "info");

            //First load dialog - that initialize listview control
            showDialog("mapLogDialog");

            var logList = jQuery("#mapLogDialogList");
            logList.html(logSections);
            logList.listview("refresh");  
        }

        export function showLog() {
            showLogDialog(novotive.log.errorsLog, novotive.log.warningsLog, novotive.log.infosLog);
        }
    }
    // module ui

    // ----------------------------------------------------------------------------------------

    export module events {

        export function init() {

            mapViewer.map = new esri.Map("mapDiv", mapViewer.config.getMapOptions());
            loadMapServices();

            dojo.connect(mapViewer.map, "onLoad", mapLoaded);
            dojo.connect(mapViewer.map, "onResize", mapSizeChanged);

            dojo.connect(mapViewer.map, "onUpdateStart", function () {
                jQuery.mobile.loading("show");
            });
            dojo.connect(mapViewer.map, "onUpdateEnd", function () {
                jQuery.mobile.loading("hide");
            });

            novotive.log.addLogEventListener(mapViewer.ui.showLogMessage);

            jQuery("#langDictionaryContent").text(JSON.stringify(languative.dictonaries.html, null, "  "));

            //$("#mapMessageContainer").delay(5000).fadeIn();
            //$("#mapMessageContainer").delay(7000).fadeIn();

        }

        function loadMapServices() {

            var servicesUrls = new Array();

            // First load map services saved by user
            var userServices = mapViewer.config.getUserMapServices();
            if (userServices) {
                for (var ui = 0; ui < userServices.length; ui++) {
                    var config = <novotive.MapServiceConfig>userServices[ui];
                    mapServices.addFromConfig(config);
                    servicesUrls.push(config.url.split("?")[0] + "?");
                }
            }

            // Load services from url parameters
            var params = novotive.urlParameters();
            if (params.wms) {
                var urlWmsArr = params.wms.split(",");
                for (var uwi = 0; uwi < urlWmsArr.length; uwi++) {
                    var urlWms = urlWmsArr[uwi];
                    var mapService = mapViewer.mapServices.getByUrl(urlWms);
                    var mapAdded = servicesUrls.indexOf(urlWms.split("?")[0] + "?") > -1;
                    if (!(mapService) && !(mapAdded)) {
                        console.info("Adding map service from url parameters: \r\n wms:" + urlWms);
                        mapServices.add(novotive.mapServiceTypes.wms, urlWms, null);
                        servicesUrls.push(mapConfig.url.split("?")[0] + "?");
                    }

                }
            }

            for (var mi = 0; mi < mapViewer.config.initConfig.mapServices.length; mi++) {
                var mapConfig = mapViewer.config.initConfig.mapServices[mi];
                var mapService = mapViewer.mapServices.getByUrl(mapConfig.url);
                var mapAdded = servicesUrls.indexOf(mapConfig.url.split("?")[0] + "?") > -1;
                if (!(mapService) && !(mapAdded)) {
                    console.info("Adding map service from mapViewer.config.initConfig \r\n" + mapConfig.serviceType + ": " + mapConfig.url);
                    mapServices.add(mapConfig.serviceType, mapConfig.url, mapConfig.displayTitle);
                    servicesUrls.push(mapConfig.url.split("?")[0] + "?");
                }
            }
        }

        function initResizeEvents() {
            dojo.connect(window, "onresize", displaySizeChanged);
            dojo.connect(window, "orientationchange", displaySizeChanged);
            dojo.connect(document.body, "onresize", displaySizeChanged);

            // On android devices div.onresize/body.onresize does not work.
            // When virtual keyboard is on at startup and then is turned off
            // window size does not changes but div/body size does. So check it every 2 seconds:
            if (!(document.body.onresize)) {
                setInterval(displaySizeChanged, 2000);
            }

            // On showing dialogs scrool events hapend and size of page content can change.
            // After closing dialog #map page is showing again, so reset display sizes.
            jQuery(document).on("pageshow", "#map", displaySizeChanged); 
        }
        
        function mapLoaded() {
            
            initResizeEvents();

            // centerAt when map is loaded
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(mapViewer.geolocation.updateLocationMark, mapViewer.geolocation.logLocationError);
                // show user position at startup
                navigator.geolocation.getCurrentPosition(mapViewer.geolocation.showLocationMark, mapViewer.geolocation.logLocationError);
            }            
            
            if (!mapViewer.browserSupported()) {
                jQuery.mobile.changePage("#browserSupportWarning", { role: "page", changeHash: true });
            }
            //map.disableMapNavigation();
        }

        function displaySizeChanged() {
            if (!mapViewer.isReady() || (jQuery.mobile.activePage.attr("id") != "map")) {
                return;
            }
            mapViewer.map.reposition();
            mapViewer.map.resize();
        }

        function mapSizeChanged(extent, width, height) {
            if (mapViewer.isReady()) {
                mapViewer.map.__resizeCenter = mapViewer.map.extent.getCenter();
                setTimeout(function () {
                    mapViewer.map.centerAt(mapViewer.map.__resizeCenter);
                }, 200);
            }
        }
    }
    // module events

    // -----------------------------------------------------------------------------------------

    export module mapServices {

        var selectedServiceId: string = null;

        export function getByUrl(url: string): novotive.MapService {
            for (var j = 0; j < mapViewer.map.layerIds.length; j++) {
                var serviceId = map.layerIds[j];
                var mapService = <novotive.MapService>mapViewer.map.getLayer(serviceId);
                if (url.indexOf(mapService.url) > -1)
                    return mapService;
            }
            return null;
        }

        function getById(serviceId: string): novotive.MapService {
            var res = mapViewer.map.getLayer(serviceId);
            if (res)
                return <novotive.MapService>res;
            else
                return null;
        }

        export function add(serviceType: string, serviceUrl: string, displayTitle: string) {

            addFromConfig({ serviceType: serviceType, url: serviceUrl, displayTitle: displayTitle });
        }
        // add()

        export function addFromConfig(config: novotive.MapServiceConfig) {

            var mapSrv = getByUrl(config.url);
            if (mapSrv) {
                var lg = new novotive.log.LogRecord("Map service with this url is already added to map", config.url);
                console.info(lg.addToInfosLog());
                return;
            }

            function logErrToConsole(errLogRec: novotive.log.LogRecord) {
                console.error(errLogRec.addToErrorsLog());
            }

            if (config.serviceType == novotive.mapServiceTypes.wms) {
                getWmsService(config, addMapService, logErrToConsole);
            }
            else {
                var lg = new novotive.log.LogRecord("Map service type '" + config.serviceType + "' not supported", config.url);
                logErrToConsole(lg);
            }
        }

        export function getWmsService(config: novotive.MapServiceConfig, onSuccess: (mapService: novotive.MapService) => any, onError: novotive.log.LogEventListener) {
            
            var wmsService = new novotive.WmsService(config);
            var errHandle;

            if (wmsService.loaded)
                onSuccess(wmsService);
            else if (wmsService.loadError) {
                onError(wmsService.loadError);
            }
            else {
                dojo.connect(wmsService, "onLoad", onSuccess);
                // fire getWmsService error handler  once - it could be an dialog
                var errHandle = dojo.connect(wmsService, "onError", function (error: Error) {
                    var lg = getMapServiceLogRecord(wmsService, error);
                    onError(lg);
                    dojo.disconnect(errHandle);
                });
            }

            // always log errors to console
            dojo.connect(wmsService, "onLoad", function () {
                dojo.connect(wmsService, "onError", function (error: Error) {
                    var lg = getMapServiceLogRecord(wmsService, error);
                    console.error(lg.addToErrorsLog());
                }); 
            });
        }


        export function showLayersDialog(serviceId) {
            if (serviceId)
                selectedServiceId = serviceId;

            var mapService = getById(selectedServiceId);

            if (mapService.displayTitle) {
                ui.setInnerHtml("MapServiceDialogDisplayTitle", mapService.displayTitle);
                ui.setInnerHtml("MapServiceDialogTitle", mapService.title);
            }
            else {
                ui.setInnerHtml("MapServiceDialogDisplayTitle", mapService.title);
                ui.setInnerHtml("MapServiceDialogTitle", null);
            }
            ui.setInnerHtml("MapServiceDialogDescription", mapService.description);
            ui.setInnerHtml("MapServiceDialogUrl", mapService.url);


            var mapLayers = jQuery("#MapServiceDialogLayers");
            mapLayers.html("");
            var layers = mapService.layers;
            for (var i = 0; i < layers.length; i++) {
                var subLayer = layers[i];
                var chId = "mapService_" + serviceId + "_" + subLayer.name;
                var checked = "";
                if (subLayer.visible)
                    checked = ' checked="checked" ';
                mapLayers.append(
                    '<input type="checkbox" name="' + serviceId + '" value="' + subLayer.name + '" id="' + chId + '" ' + checked + '>'
                    + '<label for="' + chId + '">' + subLayer.title + '</label>');

            }
            mapLayers.controlgroup();
            mapLayers.trigger("create");
            mapLayers.controlgroup("refresh");

            //for (var j = 0; j < map.layerIds.length; j++) {
            //    var layer = map.getLayer(map.layerIds[j]);
            //    alert(layer.id + ' ' + layer.opacity + ' ' + layer.visible);
            //}

            mapViewer.ui.showDialog("mapServiceLayersDialog");
            //$('#mapServicesPanel').panel('close');
        }
        // showLayersDialog() 


        export function showLayersDialogSave() {
            var mapService = getById(selectedServiceId);

            var checkedLayers = jQuery("#MapServiceDialogLayers").find(':checkbox').filter(':checked');
            var checkedLayerNames = new Array();
            checkedLayers.each(function () {
                checkedLayerNames.push(jQuery(this).attr('value'));
            });


            var layers = mapService.layers;
            for (var i = 0; i < layers.length; i++) {
                var subLayer = layers[i];
                subLayer.visible = checkedLayerNames.indexOf(subLayer.name) > -1;
            }
            mapService.refresh();
            mapViewer.ui.showMap();
            mapViewer.config.saveUserMapServices();
        } // showLayersDialogSave()


        export function showActions(serviceId: string) {
            selectedServiceId = serviceId;
            var mapService = mapViewer.map.getLayer(serviceId);
            jQuery("#mapServiceAction").popup("open", { positionTo: "#" + getSidePanelId(mapService) + "_Config" });
        } // showActions()


        export function deleteSelectedMapService() {
            jQuery("#mapServiceAction").popup("close");
            var mapService = mapViewer.map.getLayer(selectedServiceId);
            mapViewer.map.removeLayer(mapService);
            removeFromSidePanel(mapService);
            mapViewer.config.saveUserMapServices();
        }
        // deleteService()

        export function addMapService(mapService: novotive.MapService) {
            mapViewer.map.addLayer(mapService);
            addToSidePanel(mapService);
        }

        function getSidePanelId(mapService: novotive.MapService) {
            return "mapServiceSidePanelItem_" + mapService.id;
        }

        function addToSidePanel(mapService: novotive.MapService) {            
            var liBody = '';
            liBody += '<li id="' + getSidePanelId(mapService) + '"  >\n';
            liBody += '  <a onClick="mapViewer.mapServices.showLayersDialog(\'' + mapService.id + '\')">\n';
            liBody += '    <h4>' + (mapService.displayTitle || mapService.title) + '</h4>\n';
            liBody += '    <p>' + mapService.description + '</p>\n';
            liBody += '    <p style="color: gray;">' + mapService.url.toLowerCase().replace("http://", "") + '</p>\n';
            liBody += '    <a id="' + getSidePanelId(mapService) + "_Config" +'" data-icon="edit" data-theme="d" onClick="mapViewer.mapServices.showActions(\'' + mapService.id + '\')">Map service action</a>\n';
            liBody += '  </a>';
            liBody += '</li>\n\n';
            
            var mapList = jQuery("#mapServicesList");
            mapList.append(liBody);
            mapList.listview("refresh");
        }

        function removeFromSidePanel(mapService: novotive.MapService) {
            var liId = getSidePanelId(mapService);
            jQuery("#" + liId).remove();
            jQuery("#mapServicesList").listview("refresh");
        }

        function getMapServiceLogRecord(mapService: novotive.MapService, err: Error) {
            var lg = new novotive.log.LogError(err);
            lg.addDescription("Map service: " + (mapService.displayTitle || mapService.title));
            if (!(lg.url))
                lg.url = mapService.url;
            return lg;
        }

        var addDialogMapServices = new Array<novotive.MapService>();

        export function addDialogGetMetadata(url: string = null, displayTitle: string = null) {
            addDialogMapServices = new Array<novotive.MapService>(); //clear array
            //jQuery("#mapServiceAddDialog").dialog("close");
            if (!(url))
                url = jQuery("#mapServiceAddDialogUrl").val();
            mapViewer.ui.showDialog("progressDialog", "slide");

            var config = { serviceType: novotive.mapServiceTypes.wms, url: url, displayTitle: displayTitle };

            getWmsService(config,
                function (mapService) {
                    addDialogMapServices.push(mapService);
                    mapViewer.ui.showDialog("mapServiceSelectDialog", "slidefade");
                    jQuery("#mapServiceSelectDialogServiceTitle").val(mapService.displayTitle || mapService.title);
                    jQuery("#mapServiceSelectDialogServiceUrl").text(mapService.url); 
                },
                function (errorStatus) {
                    errorStatus.setMessage("Loading WMS capabilities failed");
                    console.error(errorStatus.addToErrorsLog());
                    mapViewer.ui.showLogDialog(new Array<novotive.log.LogRecord>(errorStatus), null, null);
                }
                );
        }

        export function addDialogAddMapService(index: number) {
            var mapService: any = addDialogMapServices[index];
            addMapService(mapService);
            mapViewer.ui.showMap();            
            mapViewer.config.saveUserMapServices();
            if (mapService.fullExtent) {
                mapViewer.map.setExtent(mapService.fullExtent);
            }
        }


    }
    // module mapService 

    // ----------------------------------------------------------------------------------------

    export module geolocation {

        var lastPosition: Position = null;

        function createLocationSymbol(url, xOffset, yOffset, size) {
            return new esri.symbol.PictureMarkerSymbol(
                {
                    angle: 0,
                    xoffset: xOffset,
                    yoffset: yOffset,
                    type: "esriPMS",
                    url: url,
                    contentType: "image/png",
                    width: size,
                    height: size
                });
        }

        function locationErrorMessage(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    return "Access to location services is denied";
                case error.POSITION_UNAVAILABLE:
                    return "Current location not available";
                case error.TIMEOUT:
                    return "Location estimation timeout";
                default:
                    return "Unknown location error - " + error;
            }
        }

        function showLocationError(error) {
            clearLocationMark();
            var lg = new novotive.log.LogRecord(locationErrorMessage(error), null, error.message);
            console.error(lg.addToErrorsLog());
            mapViewer.ui.showLogMessage(lg); // always show error Message 
            lastPosition = null;
        }

        export function logLocationError(error) {
            clearLocationMark();
            var errMsg = locationErrorMessage(error);
            console.warn(errMsg);
            lastPosition = null;
        }

        function clearLocationMark() {
            if (mapViewer.isReady()) {
                mapViewer.map.infoWindow.hide();
                mapViewer.map.graphics.clear();
            }
        }

        function centerAtLocation(location: Position) {
            if (mapViewer.isReady()) {
                var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(location.coords.longitude, location.coords.latitude));
                mapViewer.map.centerAt(pt);
            }
        }


        export function updateLocationMark(location: Position) {
            if (!mapViewer.isReady())
                return;
            if (location.coords.accuracy <= 100) {
                var symbol = createLocationSymbol("images/location-fix.png", 4, 9, 18);
            } else {
                var symbol = createLocationSymbol("images/location.png", 4, 9, 18);
            }

            var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(location.coords.longitude, location.coords.latitude));
            var attributes = {
                "lat": location.coords.latitude,
                "lon": location.coords.longitude,
                "accuracy": Math.round( location.coords.accuracy),
                "time": new Date(location.timestamp).toLocaleTimeString()
            };
            var infoTemplate = new esri.InfoTemplate("Location",
                "&phi;: ${lat} <br/>&lambda;: ${lon} <br/>Accuracy: ${accuracy} <br/>Time: ${time}");
            var graphic = new esri.Graphic(pt, symbol, attributes, infoTemplate);

            clearLocationMark();
            mapViewer.map.graphics.add(graphic);
            lastPosition = location;
            //mapViewer.map.centerAt(pt);

            // Position the center of the map and set zoom level
        }

        export function showLocationMark(position: Position) {
            updateLocationMark(position);
            centerAtLocation(position);
        }

        export function showLocation() {
            if (!mapViewer.isReady())
                return;

            if (lastPosition) {
                centerAtLocation(lastPosition);
            }
            else {
                var lg = new novotive.log.LogRecord("Your location is unknown", null, "Your browser doesn't support geolocation");
                console.error(lg.addToErrorsLog());
                mapViewer.ui.showLogMessage(lg); // always show error Message 
            }
        }

    }
    // module geolocation

    // ---------------------------------------------------------------------------------------

}
// mapViewer




dojo.ready(mapViewer.events.init);