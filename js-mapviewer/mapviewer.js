if (!(dojo) || (!jQuery)) {
    window.location.replace("error-app.html");
    //return;
}

var mapViewer;
(function (mapViewer) {
    mapViewer.map = null;

    mapViewer.strings = {
        browserDoesNotSupportThis: "Your web browser does not support this feature"
    };

    mapViewer.res = {
        locationIconUrl: "",
        locationFixIconUrl: ""
    };

    function isReady() {
        if (!mapViewer.map)
            return false;
        if (!mapViewer.map.loaded)
            return false;
        if (!(mapViewer.map.root) || !(mapViewer.map.root.clientHeight) || !(mapViewer.map.root.clientWidth))
            return false;
        if ((mapViewer.map.root.clientHeight < 2) || (mapViewer.map.root.clientWidth < 2))
            return false;

        return true;
    }
    mapViewer.isReady = isReady;

    function globeExtent() {
        return new esri.geometry.Extent({
            xmin: -20037508.34,
            ymin: -20037508.34,
            xmax: 20037508.34,
            ymax: 20037508.34,
            spatialReference: { wkid: 3857 }
        });
    }
    mapViewer.globeExtent = globeExtent;

    function browserSupported() {
        return jQuery.support.ajax && jQuery.support.cors && (localStorage);
    }
    mapViewer.browserSupported = browserSupported;

    // ----------------------------------------------------------------------------------------
    (function (config) {
        config.logTooltipsDelay = 15;

        config.initConfig = {
            mapServices: new Array()
        };

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

        function saveUserMapServices() {
            var services = new Array();

            for (var j = 0; j < mapViewer.map.layerIds.length; j++) {
                var mapService = mapViewer.map.getLayer(mapViewer.map.layerIds[j]);
                if (mapService.getConfig)
                    services.push(mapService.getConfig());
            }

            saveSetting("mapViewer.config.mapServices", services);

            saveSetting("mapViewer.config.basemap", mapViewer.map.getBasemap());
            saveSetting("mapViewer.config.zoom", mapViewer.map.getZoom());
        }
        config.saveUserMapServices = saveUserMapServices;

        function getUserMapServices() {
            return getSetting("mapViewer.config.mapServices");
        }
        config.getUserMapServices = getUserMapServices;

        function getMapOptions() {
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
                slider: false,
                infoWindow: new esri.dijit.Popup(null, dojo.create("div"))
            };
        }
        config.getMapOptions = getMapOptions;
    })(mapViewer.config || (mapViewer.config = {}));
    var config = mapViewer.config;

    // module config
    // ----------------------------------------------------------------------------------------
    (function (ui) {
        ui.lastLogMessage = "";

        function showMap() {
            hideMenuPanel();
            jQuery.mobile.changePage("#map", { role: "page", changeHash: true, transition: "fade" });
            mapViewer.map.reposition();
            mapViewer.map.resize();
        }
        ui.showMap = showMap;

        function showDialog(id, dlgTransition) {
            if (typeof dlgTransition === "undefined") { dlgTransition = "fade"; }
            jQuery.mobile.changePage("#" + id, { role: "dialog", changeHash: false, transition: dlgTransition });
        }
        ui.showDialog = showDialog;

        function hideMenuPanel() {
            jQuery('#menuPanel').panel('close');
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

        function showLogMessage(rec) {
            jQuery("#mapErrorsCount").text(novotive.log.errorsLog.length);
            jQuery("#mapWarningsCount").text(novotive.log.warningsLog.length);

            if (novotive.log.errorsLog.length > 0)
                jQuery("#mapErrorsCountContainer").css("display", "inline");
            if (novotive.log.warningsLog.length > 0)
                jQuery("#mapWarningsCountContainer").css("display", "inline");

            var msgText = jQuery("#mapMessage");
            msgText.fadeOut(function () {
                msgText.html(rec.message);
            }).fadeIn(function () {
                var msgContainer = jQuery("#mapMessageContainer");
                msgContainer.fadeIn(function () {
                    ui.lastLogMessage = rec.toString().toLowerCase();
                }).delay(config.logTooltipsDelay * 1000).fadeIn(function () {
                    if (ui.lastLogMessage == rec.toString().toLowerCase())
                        msgContainer.fadeOut();
                });
            });
        }
        ui.showLogMessage = showLogMessage;

        function zoomInOut(value) {
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
        ui.zoomInOut = zoomInOut;

        function getLogSection(section, log, dataIcon) {
            if (typeof dataIcon === "undefined") { dataIcon = 'false'; }
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

        function showLogDialog(errors, warnings, infos) {
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
        ui.showLogDialog = showLogDialog;

        function showLog() {
            showLogDialog(novotive.log.errorsLog, novotive.log.warningsLog, novotive.log.infosLog);
        }
        ui.showLog = showLog;
    })(mapViewer.ui || (mapViewer.ui = {}));
    var ui = mapViewer.ui;

    // module ui
    // ----------------------------------------------------------------------------------------
    (function (events) {
        function init() {
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
        events.init = init;

        function loadMapServices() {
            var servicesUrls = new Array();

            // First load map services saved by user
            var userServices = mapViewer.config.getUserMapServices();
            if (userServices) {
                for (var ui = 0; ui < userServices.length; ui++) {
                    var config = userServices[ui];
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

            if (!(document.body.onresize)) {
                setInterval(displaySizeChanged, 2000);
            }

            // On showing dialogs scrool events hapend and size of page content can change.
            // After closing dialog #map page is showing again, so reset display sizes.
            jQuery(document).on("pageshow", "#map", displaySizeChanged);
        }

        function mapLoaded() {
            initResizeEvents();

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
    })(mapViewer.events || (mapViewer.events = {}));
    var events = mapViewer.events;

    // module events
    // -----------------------------------------------------------------------------------------
    (function (mapServices) {
        var selectedServiceId = null;

        function getByUrl(url) {
            for (var j = 0; j < mapViewer.map.layerIds.length; j++) {
                var serviceId = mapViewer.map.layerIds[j];
                var mapService = mapViewer.map.getLayer(serviceId);
                if (url.indexOf(mapService.url) > -1)
                    return mapService;
            }
            return null;
        }
        mapServices.getByUrl = getByUrl;

        function getById(serviceId) {
            var res = mapViewer.map.getLayer(serviceId);
            if (res)
                return res;
else
                return null;
        }

        function add(serviceType, serviceUrl, displayTitle) {
            addFromConfig({ serviceType: serviceType, url: serviceUrl, displayTitle: displayTitle });
        }
        mapServices.add = add;

        // add()
        function addFromConfig(config) {
            var mapSrv = getByUrl(config.url);
            if (mapSrv) {
                var lg = new novotive.log.LogRecord("Map service with this url is already added to map", config.url);
                console.info(lg.addToInfosLog());
                return;
            }

            function logErrToConsole(errLogRec) {
                console.error(errLogRec.addToErrorsLog());
            }

            if (config.serviceType == novotive.mapServiceTypes.wms) {
                getWmsService(config, addMapService, logErrToConsole);
            } else {
                var lg = new novotive.log.LogRecord("Map service type '" + config.serviceType + "' not supported", config.url);
                logErrToConsole(lg);
            }
        }
        mapServices.addFromConfig = addFromConfig;

        function getWmsService(config, onSuccess, onError) {
            var wmsService = new novotive.WmsService(config);
            var errHandle;

            if (wmsService.loaded)
                onSuccess(wmsService);
else if (wmsService.loadError) {
                onError(wmsService.loadError);
            } else {
                dojo.connect(wmsService, "onLoad", onSuccess);

                // fire getWmsService error handler  once - it could be an dialog
                var errHandle = dojo.connect(wmsService, "onError", function (error) {
                    var lg = getMapServiceLogRecord(wmsService, error);
                    onError(lg);
                    dojo.disconnect(errHandle);
                });
            }

            // always log errors to console
            dojo.connect(wmsService, "onLoad", function () {
                dojo.connect(wmsService, "onError", function (error) {
                    var lg = getMapServiceLogRecord(wmsService, error);
                    console.error(lg.addToErrorsLog());
                });
            });
        }
        mapServices.getWmsService = getWmsService;

        function showLayersDialog(serviceId) {
            if (serviceId)
                selectedServiceId = serviceId;

            var mapService = getById(selectedServiceId);

            if (mapService.displayTitle) {
                ui.setInnerHtml("MapServiceDialogDisplayTitle", mapService.displayTitle);
                ui.setInnerHtml("MapServiceDialogTitle", mapService.title);
            } else {
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
                mapLayers.append('<input type="checkbox" name="' + serviceId + '" value="' + subLayer.name + '" id="' + chId + '" ' + checked + '>' + '<label for="' + chId + '">' + subLayer.title + '</label>');
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
        mapServices.showLayersDialog = showLayersDialog;

        // showLayersDialog()
        function showLayersDialogSave() {
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
        }
        mapServices.showLayersDialogSave = showLayersDialogSave;

        function showActions(serviceId) {
            selectedServiceId = serviceId;
            var mapService = mapViewer.map.getLayer(serviceId);
            jQuery("#mapServiceAction").popup("open", { positionTo: "#" + getSidePanelId(mapService) + "_Config" });
        }
        mapServices.showActions = showActions;

        function deleteSelectedMapService() {
            jQuery("#mapServiceAction").popup("close");
            var mapService = mapViewer.map.getLayer(selectedServiceId);
            mapViewer.map.removeLayer(mapService);
            removeFromSidePanel(mapService);
            mapViewer.config.saveUserMapServices();
        }
        mapServices.deleteSelectedMapService = deleteSelectedMapService;

        // deleteService()
        function addMapService(mapService) {
            mapViewer.map.addLayer(mapService);
            addToSidePanel(mapService);
        }
        mapServices.addMapService = addMapService;

        function getSidePanelId(mapService) {
            return "mapServiceSidePanelItem_" + mapService.id;
        }

        function addToSidePanel(mapService) {
            var liBody = '';
            liBody += '<li id="' + getSidePanelId(mapService) + '"  >\n';
            liBody += '  <a onClick="mapViewer.mapServices.showLayersDialog(\'' + mapService.id + '\')">\n';
            liBody += '    <h4>' + (mapService.displayTitle || mapService.title) + '</h4>\n';
            liBody += '    <p>' + mapService.description + '</p>\n';
            liBody += '    <p style="color: gray;">' + mapService.url.toLowerCase().replace("http://", "") + '</p>\n';
            liBody += '    <a id="' + getSidePanelId(mapService) + "_Config" + '" data-icon="edit" data-theme="d" onClick="mapViewer.mapServices.showActions(\'' + mapService.id + '\')">Map service action</a>\n';
            liBody += '  </a>';
            liBody += '</li>\n\n';

            var mapList = jQuery("#mapServicesList");
            mapList.append(liBody);
            mapList.listview("refresh");
        }

        function removeFromSidePanel(mapService) {
            var liId = getSidePanelId(mapService);
            jQuery("#" + liId).remove();
            jQuery("#mapServicesList").listview("refresh");
        }

        function getMapServiceLogRecord(mapService, err) {
            var lg = new novotive.log.LogError(err);
            lg.addDescription("Map service: " + (mapService.displayTitle || mapService.title));
            if (!(lg.url))
                lg.url = mapService.url;
            return lg;
        }

        var addDialogMapServices = new Array();

        function addDialogGetMetadata(url, displayTitle) {
            if (typeof url === "undefined") { url = null; }
            if (typeof displayTitle === "undefined") { displayTitle = null; }
            addDialogMapServices = new Array();

            if (!(url))
                url = jQuery("#mapServiceAddDialogUrl").val();
            mapViewer.ui.showDialog("progressDialog", "slide");

            var config = { serviceType: novotive.mapServiceTypes.wms, url: url, displayTitle: displayTitle };

            getWmsService(config, function (mapService) {
                addDialogMapServices.push(mapService);
                mapViewer.ui.showDialog("mapServiceSelectDialog", "slidefade");
                jQuery("#mapServiceSelectDialogServiceTitle").val(mapService.displayTitle || mapService.title);
                jQuery("#mapServiceSelectDialogServiceUrl").text(mapService.url);
            }, function (errorStatus) {
                errorStatus.setMessage("Loading WMS capabilities failed");
                console.error(errorStatus.addToErrorsLog());
                mapViewer.ui.showLogDialog(new Array(errorStatus), null, null);
            });
        }
        mapServices.addDialogGetMetadata = addDialogGetMetadata;

        function addDialogAddMapService(index) {
            var mapService = addDialogMapServices[index];
            addMapService(mapService);
            mapViewer.ui.showMap();
            mapViewer.config.saveUserMapServices();
            if (mapService.fullExtent) {
                mapViewer.map.setExtent(mapService.fullExtent);
            }
        }
        mapServices.addDialogAddMapService = addDialogAddMapService;
    })(mapViewer.mapServices || (mapViewer.mapServices = {}));
    var mapServices = mapViewer.mapServices;

    // module mapService
    // ----------------------------------------------------------------------------------------
    (function (geolocation) {
        var lastPosition = null;

        function createLocationSymbol(url, xOffset, yOffset, size) {
            return new esri.symbol.PictureMarkerSymbol({
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
            mapViewer.ui.showLogMessage(lg);
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
            if (mapViewer.isReady()) {
                mapViewer.map.infoWindow.hide();
                mapViewer.map.graphics.clear();
            }
        }

        function centerAtLocation(location) {
            if (mapViewer.isReady()) {
                var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(location.coords.longitude, location.coords.latitude));
                mapViewer.map.centerAt(pt);
            }
        }

        function updateLocationMark(location) {
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
                "accuracy": Math.round(location.coords.accuracy),
                "time": new Date(location.timestamp).toLocaleTimeString()
            };
            var infoTemplate = new esri.InfoTemplate("Location", "&phi;: ${lat} <br/>&lambda;: ${lon} <br/>Accuracy: ${accuracy} <br/>Time: ${time}");
            var graphic = new esri.Graphic(pt, symbol, attributes, infoTemplate);

            clearLocationMark();
            mapViewer.map.graphics.add(graphic);
            lastPosition = location;
            //mapViewer.map.centerAt(pt);
            // Position the center of the map and set zoom level
        }
        geolocation.updateLocationMark = updateLocationMark;

        function showLocationMark(position) {
            updateLocationMark(position);
            centerAtLocation(position);
        }
        geolocation.showLocationMark = showLocationMark;

        function showLocation() {
            if (!mapViewer.isReady())
                return;

            if (lastPosition) {
                centerAtLocation(lastPosition);
            } else {
                var lg = new novotive.log.LogRecord("Your location is unknown", null, "Your browser doesn't support geolocation");
                console.error(lg.addToErrorsLog());
                mapViewer.ui.showLogMessage(lg);
            }
        }
        geolocation.showLocation = showLocation;
    })(mapViewer.geolocation || (mapViewer.geolocation = {}));
    var geolocation = mapViewer.geolocation;
})(mapViewer || (mapViewer = {}));

// mapViewer
dojo.ready(mapViewer.events.init);
