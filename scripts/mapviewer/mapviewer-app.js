///<reference path="../languative/languative.ts"/>
///<reference path="../mapviewer/mapviewer.ts"/>
///<reference path="../typings/dojo/dojo.d.ts"/>
///<reference path="../esri/jsapi/typescript/arcgis-js-api.d.ts"/>
define(["require", "exports", "dojo/on", "dojo/dom-construct", "dojo/ready", "esri/config", "esri/map", "esri/graphic", "esri/symbols/PictureMarkerSymbol", "esri/layers/WMSLayer", "esri/geometry/Extent", "esri/geometry/Point", "esri/geometry/webMercatorUtils", "esri/InfoTemplate", "esri/dijit/InfoWindowLite", "esri/dijit/Scalebar"], function (require, exports, on, domConstruct, ready, esri_config, Map, Graphic, PictureMarkerSymbol, WMSLayer, Extent, Point, webMercatorUtils, InfoTemplate, InfoWindowLite, Scalebar) {
    // http://help.arcgis.com/en/webapi/javascript/arcgis/jssamples/layers_custom_wms.html
    // http://forums.arcgis.com/threads/20786-overlay-a-WMS-layer-on-top-of-Bingmap-Tilelayer
    // http://forums.arcgis.com/threads/52306-How-to-add-different-WMS-Layer-to-one-map
    // http://forums.arcgis.com/threads/59077-WMS-services-not-loading-spatial-reference-problems
    // http://forums.arcgis.com/threads/61254-WMSLayer-and-EPSG-WKID-codes
    // http://forums.arcgis.com/threads/73275-WMS-stuck-on-SRS-EPSG-102100
    // https://www.google.pl/search?q=arcgis+javascript+wmslayer+EPSG+102100
    // http://forums.arcgis.com/threads/73275-WMS-stuck-on-SRS-EPSG-102100
    //http://www.nationalatlas.gov/infodocs/ogcwms.html
    esri_config.defaults.io.proxyUrl = "http://proxy-ksz.rhcloud.com/proxy.jsp";
    var mapViewerApp;
    (function (mapViewerApp) {
        mapViewerApp.map = null;
        mapViewerApp.res = {
            emptyImageUrl: "http://js.arcgis.com/3.13/js/esri/images/pixel.png",
            gpsLocationMarker: new PictureMarkerSymbol("http://js.arcgis.com/3.13/esri/dijit/images/locate.png", 20, 20),
            gpsFixedLocationMarker: new PictureMarkerSymbol("http://js.arcgis.com/3.13/esri/dijit/images/sdk_gps_location.png", 28, 28),
            searchResultMarker: new PictureMarkerSymbol("http://js.arcgis.com/3.13/esri/dijit/Search/images/search-pointer.png", 36, 36)
        };
        var utils;
        (function (utils) {
            /*
             WmsService class forces projection compatibile with:
             Web Mercator / Spherical Mercator / Google Maps / Bing Maps / OSM / ArcGIS Online.
             Valid EPSG values used by above services are: [3857, 3587, 3785, 102100, 102113, 900913]
             Recomended is 3857 - http://wiki.openstreetmap.org/wiki/EPSG:3857
            */
            utils.mercatorEpsgList = [3857, 3587, 102100, 102113, 900913]; // , 3785 causes vertical movement on geoserver.org services
            utils.defaultMercatorEpsg = 3857; // Recomended Web Mercator EPSG, http://wiki.openstreetmap.org/wiki/EPSG:3857
            function globeExtent() {
                return new Extent({
                    xmin: -20037508.34,
                    ymin: -20037508.34,
                    xmax: 20037508.34,
                    ymax: 20037508.34,
                    spatialReference: { wkid: 3857 } // equals to: 3857 3587* 3785 102100* 102113* 900913 
                });
            }
            utils.globeExtent = globeExtent;
            function getMapServiceConfig(service) {
                var res = {};
                var sInfo = utils.getMapServiceInfo(service);
                res.serviceType = sInfo.serviceType;
                res.url = service.url;
                res.title = sInfo.title;
                res.opacity = service.opacity;
                res.visible = service.visible;
                res.visibleLayers = getVisibleLayers(sInfo);
                return res;
            }
            function getVisibleLayers(mapServiceInfo) {
                var layers = mapServiceInfo.subLayers;
                var res = new Array();
                if (!mapServiceInfo.subLayers)
                    return res;
                for (var i = 0; i < mapServiceInfo.subLayers.length; i++) {
                    var layer = mapServiceInfo.subLayers[i];
                    if (layer.visible)
                        res.push(layer.id);
                }
                return res;
            }
            utils.getVisibleLayers = getVisibleLayers;
            function applyMapServiceConfig(service, config) {
                service.displayTitle = config.title;
                service.opacity = config.opacity || 1;
                service.visible = config.visible || true;
                //TODO: visibleLayers
            }
            function saveMapViewerConfig() {
                var mapCenterPt = mapViewerApp.map.extent.getCenter();
                var wgsCenterPt = webMercatorUtils.webMercatorToGeographic(mapCenterPt);
                var config = {};
                config.centerX = wgsCenterPt.x;
                config.centerY = wgsCenterPt.y;
                config.zoom = mapViewerApp.map.getZoom();
                config.basemap = mapViewerApp.map.getBasemap();
                config.mapServices = new Array();
                var basemapIds = mapViewerApp.map.basemapLayerIds;
                for (var j = 0; j < mapViewerApp.map.layerIds.length; j++) {
                    var mapService = mapViewerApp.map.getLayer(mapViewerApp.map.layerIds[j]);
                    if (basemapIds.indexOf(mapService.id) < 0) {
                        var mapConfig = getMapServiceConfig(mapService);
                        config.mapServices.push(mapConfig);
                    }
                }
                novotive.config.saveSetting("mapViewerConfig", config);
            }
            utils.saveMapViewerConfig = saveMapViewerConfig;
            function getMapViewerConfig() {
                // Config set by EndUser, who is interacting with MapViewer in web browser
                var userConfig = (novotive.config.getSetting("mapViewerConfig") || {});
                // Config set in script by MapViewer customization author (developer)			
                var devConfig = mapViewer.mapConfig || {};
                var res = {};
                res.basemap = userConfig.basemap || devConfig.basemap || "topo";
                res.centerX = userConfig.centerX || devConfig.centerX || 19.0;
                res.centerY = userConfig.centerY || devConfig.centerY || 54.0;
                res.zoom = userConfig.zoom || devConfig.zoom || 6;
                if (res.zoom > 10)
                    res.zoom = 10;
                if (res.zoom < 4)
                    res.zoom = 4;
                res.mapServices = new Array();
                if (userConfig.mapServices)
                    res.mapServices = userConfig.mapServices;
                else if (devConfig.mapServices)
                    res.mapServices = devConfig.mapServices;
                return res;
            }
            utils.getMapViewerConfig = getMapViewerConfig;
            function getMapOptions(config) {
                var res = {
                    basemap: config.basemap,
                    zoom: config.zoom,
                    minZoom: 3,
                    autoResize: false,
                    fadeOnZoom: true,
                    logo: true,
                    showAttribution: false,
                    center: [config.centerX, config.centerY],
                    slider: false,
                    wrapAround180: true,
                    showInfoWindowOnClick: true
                };
                return res;
            }
            utils.getMapOptions = getMapOptions;
            function addServiceLogInfo(logRec, service) {
                var sInfo = utils.getMapServiceInfo(service);
                logRec.addDescription("Map service type: " + sInfo.serviceType);
                logRec.addDescription("Map title: " + sInfo.title);
                logRec.addDescription("Map ID: " + sInfo.id);
                logRec.url = service.url;
                return logRec;
            }
            utils.addServiceLogInfo = addServiceLogInfo;
            function getMapServiceInfo(mapService) {
                var service = mapService;
                var res = mapService;
                //res.id = mapService.id;
                //res.displayTitle = service.displayTitle; 
                //res.description = service.description;
                //res.visible = service.visible;
                //res.title = service.title;
                if (!res.title)
                    res.title = mapService.id;
                if (!res.serviceType)
                    res.serviceType = getMapServiceType(service);
                return res;
            }
            utils.getMapServiceInfo = getMapServiceInfo;
            function getMapServiceType(service) {
                var res = service.declaredClass || "";
                return res.toLowerCase();
            }
            utils.getMapServiceType = getMapServiceType;
            function updateVisibleLayers(service) {
                var serviceInfo = getMapServiceInfo(service);
                if (!serviceInfo.subLayers)
                    return;
                var visibleIds = new Array();
                for (var i = 0; i < serviceInfo.subLayers.length; i++) {
                    var layer = serviceInfo.subLayers[i];
                    if (layer.visible)
                        visibleIds.push(layer.id);
                }
                var wms = mapServices.castWms(service);
                if (wms) {
                    wms.setVisibleLayers(visibleIds);
                    wms.refresh();
                }
            }
            utils.updateVisibleLayers = updateVisibleLayers;
        })(utils = mapViewerApp.utils || (mapViewerApp.utils = {}));
        // utils
        function isReady() {
            if (!mapViewerApp.map)
                return false;
            if (!mapViewerApp.map.loaded)
                return false;
            if (!(mapViewerApp.map.root))
                return false;
            var mapRoot = mapViewerApp.map.root;
            if (!(mapRoot.clientHeight) || !(mapRoot.clientWidth))
                return false;
            if ((mapRoot.clientHeight < 2) || (mapRoot.clientWidth < 2))
                return false;
            return true;
        }
        mapViewerApp.isReady = isReady;
        function initMapInfoWindow(map) {
            var domNode = domConstruct.create("div", null, map.root, "last");
            var iwlFix = InfoWindowLite;
            var infoWindow = new iwlFix(null, domNode); // new InfoWindowLite();
            infoWindow.startup();
            map.setInfoWindow(infoWindow);
        }
        function initScalebar(map) {
            var scalebarOpts = {};
            var scalebar = new Scalebar({
                attachTo: "bottom-left",
                map: map,
                scalebarStyle: "ruler",
                // "dual" displays both miles and kilmometers, sets scalebarStyle: "line"
                // "english" is the default, which displays miles
                // "metric" for kilometers
                scalebarUnit: "dual"
            });
        }
        function init() {
            var config = mapViewerApp.utils.getMapViewerConfig();
            var mapOpts = utils.getMapOptions(config);
            mapViewerApp.map = new Map("mapDiv", mapOpts);
            initMapInfoWindow(mapViewerApp.map);
            initScalebar(mapViewerApp.map);
            mapViewerApp.map.on("load", events.mapLoaded);
            mapViewerApp.map.on("resize", events.mapSizeChanged);
            mapViewerApp.map.on("update-start", function () {
                jQuery.mobile.loading("show");
            });
            mapViewerApp.map.on("update-end", function () {
                jQuery.mobile.loading("hide");
            });
            novotive.log.addLogEventListener(mapViewerApp.ui.showLogMessage);
            // when all event listeners are set you can add map services
            mapServices.addMapServices(config.mapServices);
            ui.bindClick("toolbarPrintButton", function () {
                window.print();
            });
            ui.bindClick("menuPanelPrintButton", function () {
                window.print();
                ui.showMap();
            });
        }
        mapViewerApp.init = init;
        // ----------------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------
        var ui;
        (function (ui) {
            ui.lastLogMessage = "";
            ui.logTooltipsDelay = 15; // seconds	
            function showMap() {
                hideMenuPanel();
                jQuery.mobile.changePage("#map", { role: "page", changeHash: true, transition: "fade" });
                //map.reposition();
                //map.resize();
            }
            ui.showMap = showMap;
            function showDialog(id, dlgTransition) {
                if (dlgTransition === void 0) { dlgTransition = "fade"; }
                jQuery.mobile.changePage("#" + id, { role: "dialog", changeHash: false, transition: dlgTransition });
            }
            ui.showDialog = showDialog;
            function hideMenuPanel() {
                var menuPanel = jQuery('#menuPanel');
                menuPanel.panel('close');
            }
            ui.hideMenuPanel = hideMenuPanel;
            function setInnerHtml(tagId, html) {
                var cssDisplay = "none";
                if (html && (html != ""))
                    cssDisplay = "block";
                var tag = jQuery("#" + tagId);
                tag.html(html);
                tag.css("display", cssDisplay);
            }
            ui.setInnerHtml = setInnerHtml;
            function bindClick(id, clickFunc) {
                var elem = jQuery("#" + id);
                elem.bind("click", function (e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    clickFunc();
                    elem.removeClass("ui-btn-active");
                    elem.removeClass("ui-focus");
                });
            }
            ui.bindClick = bindClick;
            function showLogMessage(rec, log) {
                jQuery("#mapErrorsCount").text(novotive.log.errorsLog.length);
                jQuery("#mapWarningsCount").text(novotive.log.warningsLog.length);
                if (novotive.log.errorsLog.length > 0)
                    jQuery("#mapErrorsCountContainer").css("display", "inline");
                if (novotive.log.warningsLog.length > 0)
                    jQuery("#mapWarningsCountContainer").css("display", "inline");
                var msgText = jQuery("#mapMessage");
                msgText.fadeOut(function () {
                    msgText.html(rec.message); // change text message
                }).fadeIn(function () {
                    var msgContainer = jQuery("#mapMessageContainer");
                    msgContainer.fadeIn(function () {
                        ui.lastLogMessage = rec.toString().toLowerCase();
                    }).delay(ui.logTooltipsDelay * 1000).fadeIn(function () {
                        if (ui.lastLogMessage == rec.toString().toLowerCase())
                            msgContainer.fadeOut();
                    });
                }); // show new message   
            }
            ui.showLogMessage = showLogMessage;
            function zoomInOut(value) {
                if (!mapViewerApp.isReady())
                    return;
                var zoomLevel = mapViewerApp.map.getZoom() + value;
                if (zoomLevel > mapViewerApp.map.getMaxZoom()) {
                    console.info("New zoom level is higher than map.getMaxZoom()");
                    return;
                }
                if (zoomLevel < mapViewerApp.map.getMinZoom()) {
                    console.info("New zoom level is lower than map.getMinZoom()");
                    return;
                }
                mapViewerApp.map.setZoom(zoomLevel);
            }
            ui.zoomInOut = zoomInOut;
            function getLogSection(section, log, dataIcon) {
                if (dataIcon === void 0) { dataIcon = 'false'; }
                if (!(log))
                    return "";
                if (log.length < 1)
                    return "";
                var res = '<li data-role="list-divider" data-phrase-id="' + section + '">' + section + '</li>';
                for (var i = 0; i < log.length; i++) {
                    res += '<li data-icon="' + dataIcon + '"><a href="#">' + log[i].toHtml() + '</a></li>';
                }
                return res + "\r\n";
            }
            function showError(rec) {
                showLogDialog([rec], null, null);
            }
            ui.showError = showError;
            function showLogDialog(errors, warnings, infos) {
                var logSections = "";
                logSections += getLogSection("Errors", errors, "delete");
                logSections += getLogSection("Warnings", warnings, "alert");
                logSections += getLogSection("Informations", infos, "info");
                //First load dialog - that initialize listview control
                showDialog("mapLogDialog");
                var logList = jQuery("#mapLogDialogList");
                logList.listview().trigger("create");
                logList.html(logSections);
                logList.listview().listview("refresh");
            }
            ui.showLogDialog = showLogDialog;
            function showLog() {
                showLogDialog(novotive.log.errorsLog, novotive.log.warningsLog, novotive.log.infosLog);
            }
            ui.showLog = showLog;
            // mapServices ----------------------------------------------------------------------------------
            var selectedMapServiceId = null;
            var scriptFunctionsRoot = "mapViewer.app.ui.";
            function getClickTag(func) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var res = ' onclick="mapViewer.app.ui.' + func.name + '(';
                for (var i = 0; i < args.length; i++) {
                    var arg = args[i];
                    if (typeof arg === 'string')
                        arg = "'" + arg + "'";
                    res = res + arg;
                    if (i < args.length - 1)
                        res = res + ", ";
                }
                res = res + ')" ';
                return res;
            }
            function showMapServiceSettings(serviceId) {
                var mapService = mapServices.getById(serviceId || selectedMapServiceId);
                if (mapService) {
                    selectedMapServiceId = mapService.id;
                    var serviceInfo = utils.getMapServiceInfo(mapService);
                }
                else {
                    console.error("Invalid mapViewerApp.ui.showLayersDialog() parameter: " + serviceId);
                    return;
                }
                ui.setInnerHtml("MapServiceDialogDisplayTitle", serviceInfo.title);
                ui.setInnerHtml("MapServiceDialogTitle", serviceInfo.description);
                ui.setInnerHtml("MapServiceDialogDescription", "");
                ui.setInnerHtml("MapServiceDialogUrl", mapService.url);
                var mapLayers = jQuery("#MapServiceDialogLayers");
                mapLayers.html("");
                jQuery("#MapServiceDialogLayersSection").hide();
                if (serviceInfo.subLayers && serviceInfo.subLayers.length) {
                    jQuery("#MapServiceDialogLayersSection").show();
                    for (var i = 0; i < serviceInfo.subLayers.length; i++) {
                        var subLayer = serviceInfo.subLayers[i];
                        var chId = "mapService_" + serviceId + "_" + subLayer.id;
                        var checked = "";
                        if (subLayer.visible)
                            checked = ' checked="checked" ';
                        mapLayers.append('<input type="checkbox" name="' + serviceId + '" value="' + subLayer.id + '" id="' + chId + '" ' + checked + '>' + '<label for="' + chId + '">' + subLayer.title + '</label>');
                    }
                }
                mapLayers.controlgroup();
                mapLayers.trigger("create");
                mapLayers.controlgroup("refresh");
                mapViewerApp.ui.showDialog("mapServiceLayersDialog");
            }
            ui.showMapServiceSettings = showMapServiceSettings;
            // showLayersDialog() 
            function showMapServiceSettingsSave() {
                var mapService = mapServices.getById(selectedMapServiceId);
                var serviceInfo = utils.getMapServiceInfo(mapService);
                var checkedLayers = jQuery("#MapServiceDialogLayers").find(':checkbox').filter(':checked');
                var checkedLayerNames = new Array();
                checkedLayers.each(function () {
                    checkedLayerNames.push(jQuery(this).attr('value'));
                });
                var layers = serviceInfo.subLayers;
                for (var i = 0; i < layers.length; i++) {
                    var subLayer = layers[i];
                    subLayer.visible = checkedLayerNames.indexOf(subLayer.id) > -1;
                }
                utils.updateVisibleLayers(mapService);
                mapViewerApp.ui.showMap();
                mapViewerApp.utils.saveMapViewerConfig();
            }
            ui.showMapServiceSettingsSave = showMapServiceSettingsSave; // showLayersDialogSave()
            function showLayerActions(serviceId) {
                var mapService = mapServices.getById(serviceId);
                if (mapService) {
                    selectedMapServiceId = serviceId;
                    jQuery("#mapServiceAction").popup("open", { positionTo: "#" + getMapServiceSidePanelId(mapService) + "_Config" });
                }
            }
            ui.showLayerActions = showLayerActions; // showActions()
            function deleteSelectedMapService() {
                jQuery("#mapServiceAction").popup("close");
                var mapService = mapServices.getById(selectedMapServiceId);
                mapViewerApp.map.removeLayer(mapService);
                removeMapServiceFromSidePanel(mapService);
                utils.saveMapViewerConfig();
            }
            ui.deleteSelectedMapService = deleteSelectedMapService;
            // deleteService()
            function getMapServiceSidePanelId(mapService) {
                return "mapServiceSidePanelItem_" + mapService.id;
            }
            function addMapServiceToSidePanel(mapService) {
                var serviceInfo = utils.getMapServiceInfo(mapService);
                var liBody = '';
                liBody += '<li id="' + getMapServiceSidePanelId(mapService) + '"  >\n';
                liBody += '  <a ' + getClickTag(showMapServiceSettings, mapService.id) + '>\n';
                liBody += '    <h4>' + serviceInfo.title + '</h4>\n';
                liBody += '    <p>' + serviceInfo.description + '</p>\n';
                liBody += '    <p style="color: gray;">' + mapService.url.toLowerCase().replace("http://", "") + '</p>\n';
                liBody += '    <a id="' + getMapServiceSidePanelId(mapService) + "_Config" + '" data-icon="edit" data-theme="d" ' + getClickTag(showLayerActions, mapService.id) + '>Map service action</a>\n';
                liBody += '  </a>';
                liBody += '</li>\n\n';
                var mapList = jQuery("#mapServicesList");
                mapList.append(liBody);
                mapList.listview("refresh");
            }
            ui.addMapServiceToSidePanel = addMapServiceToSidePanel;
            function removeMapServiceFromSidePanel(mapService) {
                var liId = getMapServiceSidePanelId(mapService);
                jQuery("#" + liId).remove();
                jQuery("#mapServicesList").listview("refresh");
            }
            function showAddMapServiceProgress(url, serviceType, title) {
                if (url === void 0) { url = null; }
                if (serviceType === void 0) { serviceType = null; }
                if (title === void 0) { title = null; }
                if (!(url))
                    url = jQuery("#mapServiceAddDialogUrl").val();
                if (!serviceType)
                    serviceType = mapServices.types.wms;
                mapViewerApp.ui.showDialog("progressDialog", "slide");
                mapServices.add(serviceType, url, title, function (err, mapService) {
                    showError(err);
                }, function (mapService) {
                    utils.saveMapViewerConfig();
                    var ext = mapService.fullExtent;
                    if (ext && ext.xmax && (ext.xmax != NaN)) {
                        //mapViewerApp.map.centerAt(ext.getCenter());
                        mapViewerApp.map.setExtent(ext); //<--Error prone
                    }
                    ui.showMap();
                });
            }
            ui.showAddMapServiceProgress = showAddMapServiceProgress;
        })(ui = mapViewerApp.ui || (mapViewerApp.ui = {}));
        // module ui
        // ----------------------------------------------------------------------------------------
        var events;
        (function (events) {
            function mapSizeChanged(eArgs) {
                if (mapViewerApp.isReady()) {
                    var ext = eArgs.target.extent;
                    if (ext && ext.xmax && (ext.xmax != NaN)) {
                        var mapCenter = ext.getCenter(); // mapViewerApp.map.extent.getCenter();
                        setTimeout(function () {
                            // this is important on device orientation change
                            eArgs.target.centerAt(mapCenter); //  mapViewerApp.map.centerAt(mapCenter);
                        }, 200);
                    }
                }
            }
            events.mapSizeChanged = mapSizeChanged;
            function mapLoaded() {
                initResizeEvents();
                // centerAt when map is loaded
                if (navigator.geolocation) {
                    navigator.geolocation.watchPosition(mapViewerApp.geolocation.updateLocationMark, mapViewerApp.geolocation.logLocationError);
                    // show user position at startup
                    navigator.geolocation.getCurrentPosition(mapViewerApp.geolocation.showLocationMark, mapViewerApp.geolocation.logLocationError);
                }
                //map.disableMapNavigation();
            }
            events.mapLoaded = mapLoaded;
            function initResizeEvents() {
                on(window, "resize", displaySizeChanged);
                on(window, "orientationchange", displaySizeChanged);
                on(document.body, "resize", displaySizeChanged);
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
            function displaySizeChanged() {
                if (!mapViewerApp.isReady() || (jQuery.mobile.activePage.attr("id") != "map")) {
                    return;
                }
                mapViewerApp.map.reposition();
                mapViewerApp.map.resize();
            }
        })(events = mapViewerApp.events || (mapViewerApp.events = {}));
        // module events
        // -----------------------------------------------------------------------------------------
        var mapServices;
        (function (mapServices) {
            mapServices.types = {
                wms: "esri.layers.WMSLayer".toLowerCase()
            };
            function getByUrl(url) {
                for (var j = 0; j < mapViewerApp.map.layerIds.length; j++) {
                    var serviceId = mapViewerApp.map.layerIds[j];
                    var mapService = mapViewerApp.map.getLayer(serviceId);
                    if (url.indexOf(mapService.url) > -1)
                        return mapService;
                }
                return null;
            }
            mapServices.getByUrl = getByUrl;
            function getById(serviceId) {
                return mapViewerApp.map.getLayer(serviceId);
            }
            mapServices.getById = getById;
            function castWms(service) {
                return utils.getMapServiceType(service) == mapServices.types.wms ? service : null;
            }
            mapServices.castWms = castWms;
            function initServiceLayers(service) {
                var layers = new Array();
                var wms = castWms(service);
                if (wms) {
                    var visibleLayers = new Array();
                    for (var i = 0; i < wms.layerInfos.length; i++) {
                        var wmsLayerInfo = wms.layerInfos[i];
                        visibleLayers.push(wmsLayerInfo.name);
                        var serviceLayer = {};
                        serviceLayer.id = wmsLayerInfo.name;
                        serviceLayer.title = wmsLayerInfo.title;
                        serviceLayer.description = wmsLayerInfo.description;
                        serviceLayer.visible = true;
                    }
                    wms.setVisibleLayers(visibleLayers);
                }
                service.mapServiceLayers = layers;
            }
            function add(mapServiceType, url, displayTitle, onServiceError, onServiceAdded) {
                var mapService = null;
                if (mapServiceType.toLowerCase() == mapViewerApp.mapServices.types.wms) {
                    mapService = new WMSLayer(url);
                }
                if (mapService == null) {
                    var lr = new novotive.log.LogRecord("Invalid map service type");
                    lr.addDescription("Service type: " + mapServiceType);
                    lr.url = url;
                    if (onServiceError)
                        onServiceError(lr, mapService);
                    console.error(lr);
                    return null;
                }
                mapService.displayTitle = displayTitle;
                addService(mapService, onServiceError, onServiceAdded);
                return mapService;
            }
            mapServices.add = add;
            // add()
            function initNewService(service) {
                var wms = mapServices.castWms(service);
                if (wms && !wms.loaded) {
                    wms.on("load", function (eArgs) {
                        // By default all WMS layers are invisible
                        var visibleLayers = [];
                        for (var i = 0; i < wms.layerInfos.length; i++) {
                            visibleLayers.push(wms.layerInfos[i].name);
                        }
                        wms.setVisibleLayers(visibleLayers);
                    });
                }
            }
            function addService(service, onServiceError, onServiceAdded) {
                if (!service) {
                    console.error("Map service not added: empty addService(layer==null) parameter.");
                    return;
                }
                var existedService = getByUrl(service.url) || getById(service.id);
                if (existedService) {
                    var logRec = new novotive.log.LogRecord("Map service already exists.");
                    utils.addServiceLogInfo(logRec, service);
                    utils.addServiceLogInfo(logRec, existedService);
                    console.warn(logRec);
                    if (onServiceAdded)
                        onServiceAdded(existedService);
                    return;
                }
                initNewService(service);
                console.log("Adding map service", service);
                var loadErrHandler = service.on("error", function (eArgs) {
                    loadErrHandler.remove();
                    var logRec = new novotive.log.LogRecord("Map service initialization errror.");
                    utils.addServiceLogInfo(logRec, service);
                    if (onServiceError)
                        onServiceError(logRec, service);
                    console.error(logRec);
                });
                service.on("load", function (eArgs) {
                    var lr = new novotive.log.LogRecord("Map service added: " + utils.getMapServiceType(eArgs.layer) + "(" + eArgs.layer.url + ")");
                    ui.addMapServiceToSidePanel(service);
                    if (onServiceAdded)
                        onServiceAdded(eArgs.layer);
                    console.info(lr);
                    loadErrHandler.remove();
                    service.on("error", function (eArgs) {
                        var logRec = new novotive.log.LogRecord("Map service errror");
                        logRec.setMessage(eArgs.error.message);
                        utils.addServiceLogInfo(logRec, service);
                        console.error(logRec);
                    });
                });
                mapViewerApp.map.addLayer(service);
            }
            mapServices.addService = addService;
            function addFromConfig(config) {
                var service = add(config.serviceType, config.url, config.title);
                if (service == null)
                    return;
                service.setVisibility(config.visible || true);
                service.setOpacity(config.opacity || 1.0);
                // TODO: set mapService visible layers 
                // config.visibleLayers ?: Array<any>; //WmsLayer(string), ArcGISDynamicMapServiceLayer(Number)
            }
            mapServices.addFromConfig = addFromConfig;
            function getMapServiceUrlId(url) {
                // there could be two different addresses for the same service 
                // eg. http://wms.com? and http://wms.com?Request=GetCapabilites
                return url.toLowerCase().split("?")[0] + "?";
            }
            function addMapServices(services) {
                // At this point we don't have map services loaded into the map, so we need local information about ingaged services
                var servicesUrls = new Array();
                // 1. First load map services saved by user
                if ((services) && (services.length > 0)) {
                    console.group("Adding map services from config....");
                    for (var ui = 0; ui < services.length; ui++) {
                        var config = services[ui];
                        var lr = new novotive.log.LogRecord(config.serviceType + ": " + config.url);
                        console.log(lr);
                        mapServices.addFromConfig(config);
                        servicesUrls.push(getMapServiceUrlId(config.url));
                    }
                    console.groupEnd();
                }
                // 2. Load services from url parameters, don't add layers added in step 1.
                var params = novotive.urlParameters();
                if (params.wms) {
                    var wmsUrlArr = params.wms.split(",");
                    for (var uwi = 0; uwi < wmsUrlArr.length; uwi++) {
                        var wmsUrl = wmsUrlArr[uwi];
                        var wmsUrlId = getMapServiceUrlId(wmsUrl);
                        var mapAdded = servicesUrls.indexOf(wmsUrlId) > -1;
                        if (!mapAdded) {
                            var lr = new novotive.log.LogRecord("Adding map service from url parameters: \r\n wms:" + wmsUrl);
                            console.info(lr);
                            mapServices.add(mapViewerApp.mapServices.types.wms, wmsUrl);
                            servicesUrls.push(wmsUrlId);
                        }
                    }
                }
            }
            mapServices.addMapServices = addMapServices;
        })(mapServices = mapViewerApp.mapServices || (mapViewerApp.mapServices = {}));
        // module mapService 
        // ----------------------------------------------------------------------------------------
        var geolocation;
        (function (geolocation) {
            var lastPosition = null;
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
                var lg = new novotive.log.LogRecord(locationErrorMessage(error));
                lg.addDescription(error.message);
                console.log(lg);
                mapViewerApp.ui.showLogMessage(lg, novotive.log.errorsLog); // always show error Message 
                lastPosition = null;
            }
            function logLocationError(error) {
                clearLocationMark();
                var errMsg = locationErrorMessage(error);
                console.warn(errMsg);
                lastPosition = null;
            }
            geolocation.logLocationError = logLocationError;
            function clearLocationMark() {
                if (mapViewerApp.isReady()) {
                    mapViewerApp.map.infoWindow.hide();
                    mapViewerApp.map.graphics.clear();
                }
            }
            function centerAtLocation(location) {
                if (mapViewerApp.isReady()) {
                    var pt = webMercatorUtils.geographicToWebMercator(new Point(location.coords.longitude, location.coords.latitude));
                    mapViewerApp.map.centerAt(pt);
                }
            }
            function updateLocationMark(location) {
                if (!mapViewerApp.isReady())
                    return;
                var symbol = mapViewerApp.res.gpsLocationMarker;
                if (location.coords.accuracy <= 100) {
                    symbol = mapViewerApp.res.gpsFixedLocationMarker;
                }
                var pt = webMercatorUtils.geographicToWebMercator(new Point(location.coords.longitude, location.coords.latitude));
                var timeStr = new Date((location.timestamp)).toLocaleString();
                var attributes = {
                    "lat": location.coords.latitude,
                    "lon": location.coords.longitude,
                    "accuracy": Math.round(location.coords.accuracy),
                    "time": timeStr
                };
                var infoTemplate = new InfoTemplate("<strong>Location</strong>", "&phi;: ${lat} <br/>&lambda;: ${lon} <br/>Accuracy: ${accuracy} <br/>Time: ${time}");
                var graphic = new Graphic(pt, symbol, attributes, infoTemplate);
                clearLocationMark(); // remove previous location mark
                mapViewerApp.map.graphics.add(graphic);
                lastPosition = location;
                //mapViewer.map.centerAt(pt);
            }
            geolocation.updateLocationMark = updateLocationMark;
            function showLocationMark(position) {
                updateLocationMark(position);
                centerAtLocation(position);
            }
            geolocation.showLocationMark = showLocationMark;
            function showLocation() {
                if (!mapViewerApp.isReady())
                    return;
                if (lastPosition) {
                    centerAtLocation(lastPosition);
                }
                else {
                    var lg = new novotive.log.LogRecord("Your location is unknown");
                    lg.addDescription("Your browser doesn't support geolocation");
                    console.error(lg);
                    mapViewerApp.ui.showLogMessage(lg, novotive.log.errorsLog); // always show error Message 
                }
            }
            geolocation.showLocation = showLocation;
        })(geolocation = mapViewerApp.geolocation || (mapViewerApp.geolocation = {}));
    })(mapViewerApp = exports.mapViewerApp || (exports.mapViewerApp = {}));
    // mapViewer
    ready(80, mapViewerApp.init);
    jQuery(document).on("pagehide", function (event) {
        //console.log("pagehide", event);
        var map = mapViewerApp.map;
        if (map && map.root) {
            var root = map.root;
            if (root.clientHeight < 5) {
                root.style.height = "100%";
            }
            if (root.clientWidth < 5) {
                root.style.width = "100%";
            }
        }
    });
});
//# sourceMappingURL=mapviewer-app.js.map