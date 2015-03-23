///<reference path="../languative/languative.ts"/>
///<reference path="../mapviewer/mapviewer.ts"/>
///<reference path="../typings/dojo/dojo.d.ts"/>
///<reference path="../esri/jsapi/typescript/arcgis-js-api.d.ts"/>


import on = require("dojo/on");
import dom = require("dojo/dom");
import domConstruct = require("dojo/dom-construct");
import ready = require("dojo/ready");
import lang = require("dojo/_base/lang");

import esri = require("esri");
import esri_config = require("esri/config");

import Map = require("esri/map");
import basemaps = require("esri/basemaps");
import Draw = require("esri/toolbars/draw");
import Graphic = require("esri/graphic");
import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");

import Layer = require("esri/layers/layer"); 
import DynamicMapServiceLayer = require("esri/layers/DynamicMapServiceLayer");
import WMSLayer = require("esri/layers/WMSLayer");
import WMTSLayer = require("esri/layers/WMTSLayer");
import FeatureLayer = require("esri/layers/FeatureLayer");
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");

import SpatialReference = require("esri/SpatialReference");
import Extent = require("esri/geometry/Extent");
import Point = require("esri/geometry/Point");
import webMercatorUtils = require("esri/geometry/webMercatorUtils");
import Locator = require("esri/tasks/locator");

import InfoTemplate = require ("esri/InfoTemplate");
import InfoWindow = require("esri/dijit/InfoWindow");
import InfoWindowLite = require("esri/dijit/InfoWindowLite");
import Popup = require("esri/dijit/Popup");
import PopupMobile = require("esri/dijit/PopupMobile");
import Scalebar = require("esri/dijit/Scalebar");




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




export module mapViewerApp {

    export var map: Map = null;
	
	    
    export var res = {
        emptyImageUrl: "http://js.arcgis.com/3.13/js/esri/images/pixel.png",
		gpsLocationMarker: new PictureMarkerSymbol("http://js.arcgis.com/3.13/esri/dijit/images/locate.png", 20, 20),
		gpsFixedLocationMarker: new PictureMarkerSymbol("http://js.arcgis.com/3.13/esri/dijit/images/sdk_gps_location.png", 28, 28),
		searchResultMarker: new PictureMarkerSymbol("http://js.arcgis.com/3.13/esri/dijit/Search/images/search-pointer.png", 36, 36) 
    }


	export module utils {
		/*
		 WmsService class forces projection compatibile with: 
		 Web Mercator / Spherical Mercator / Google Maps / Bing Maps / OSM / ArcGIS Online.
		 Valid EPSG values used by above services are: [3857, 3587, 3785, 102100, 102113, 900913]
		 Recomended is 3857 - http://wiki.openstreetmap.org/wiki/EPSG:3857
		*/
		export var mercatorEpsgList = [3857, 3587, 102100, 102113, 900913]; // , 3785 causes vertical movement on geoserver.org services
		export var defaultMercatorEpsg = 3857; // Recomended Web Mercator EPSG, http://wiki.openstreetmap.org/wiki/EPSG:3857

		export function globeExtent() {
			return new Extent({
				xmin: -20037508.34,
				ymin: -20037508.34,
				xmax: 20037508.34,
				ymax: 20037508.34,
				spatialReference: { wkid: 3857 } // equals to: 3857 3587* 3785 102100* 102113* 900913 
			});
		}


		function getMapServiceConfig(service: Layer) {
			var res = <mapViewer.IMapServiceConfig>{};
			var sInfo = utils.getMapServiceInfo(service);

			res.serviceType = sInfo.serviceType; 
			res.url = service.url;
			res.title = sInfo.title; 
			res.opacity = service.opacity;
			res.visible = service.visible;
			res.visibleLayers = getVisibleLayers(sInfo);

			return res;
		}

		export function getVisibleLayers(mapServiceInfo: mapViewer.IMapService): Array<any> {
			var layers = mapServiceInfo.subLayers;  
			var res = new Array<any>();

			if (!mapServiceInfo.subLayers)
				return res;

			for (var i = 0; i < mapServiceInfo.subLayers.length; i++) {
				var layer = mapServiceInfo.subLayers[i];
				if (layer.visible)
					res.push(layer.id);
			}
			return res;
		}

		function applyMapServiceConfig(service: Layer, config: mapViewer.IMapServiceConfig) {
			(<any>service).displayTitle = config.title;
			service.opacity = config.opacity || 1;
			service.visible = config.visible || true;
			//TODO: visibleLayers
		}

        export function saveMapViewerConfig() {
			var mapCenterPt = mapViewerApp.map.extent.getCenter();
			var wgsCenterPt = <Point>webMercatorUtils.webMercatorToGeographic(mapCenterPt);
			var config = <mapViewer.IMapConfig>{};

			config.centerX = wgsCenterPt.x;
			config.centerY = wgsCenterPt.y;
			config.zoom = mapViewerApp.map.getZoom();
			config.basemap = mapViewerApp.map.getBasemap();

            config.mapServices = new Array<mapViewer.IMapServiceConfig>();
			var basemapIds = mapViewerApp.map.basemapLayerIds;

            for (var j = 0; j < mapViewerApp.map.layerIds.length; j++) {
				var mapService = mapViewerApp.map.getLayer(map.layerIds[j]);
				if (basemapIds.indexOf(mapService.id) < 0) {
					var mapConfig = getMapServiceConfig(mapService);
					config.mapServices.push(mapConfig);
				}
            }

			novotive.config.saveSetting("mapViewerConfig", config);
        }

        export function getMapViewerConfig(): mapViewer.IMapConfig {

			// Config set by EndUser, who is interacting with MapViewer in web browser
			var userConfig = <mapViewer.IMapConfig>(novotive.config.getSetting("mapViewerConfig") || {});

			// Config set in script by MapViewer customization author (developer)			
			var devConfig = mapViewer.mapConfig || <mapViewer.IMapConfig>{};

			var res = <mapViewer.IMapConfig>{};
			res.basemap = userConfig.basemap || devConfig.basemap || "topo";
			res.centerX = userConfig.centerX || devConfig.centerX || 19.0;
			res.centerY = userConfig.centerY || devConfig.centerY || 54.0;
			res.zoom = userConfig.zoom || devConfig.zoom || 6;
			if (res.zoom > 10)
				res.zoom = 10;
			if (res.zoom < 4)
				res.zoom = 4;

			res.mapServices = new Array<mapViewer.IMapServiceConfig>();
			if (userConfig.mapServices)
				res.mapServices = userConfig.mapServices;
			else if (devConfig.mapServices)
				res.mapServices = devConfig.mapServices;

			return res;
        }

		export function getMapOptions(config: mapViewer.IMapConfig) {
			var res = <esri.MapOptions>{
                basemap: config.basemap,
                zoom: config.zoom,
                minZoom: 3,
                autoResize: false, //jQueryMobile dialogs causing Width/Height=0
				fadeOnZoom: true,
				logo: true,
				showAttribution: false,
                center: [config.centerX, config.centerY],
                slider: false, // ZoomIn, ZoomOut buttons
				wrapAround180: true,
				showInfoWindowOnClick: true
                //infoWindow: new Popup(null, new HTMLDivElement()) // Define a popup 
            };
			return res;
		}

		export function addServiceLogInfo(logRec: novotive.log.LogRecord, service: Layer) {
			var sInfo = utils.getMapServiceInfo(service);
			logRec.addDescription("Map service type: " + sInfo.serviceType);
			logRec.addDescription("Map title: " + sInfo.title);
			logRec.addDescription("Map ID: " + sInfo.id);
			logRec.url = service.url;
			return logRec;
		}


		export function getMapServiceInfo(mapService: Layer): mapViewer.IMapService {
			var service: any = mapService;
			var res: mapViewer.IMapService = <any>mapService;
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

		export function getMapServiceType(service: Layer) {
			var res = (<any>service).declaredClass || "";
			return res.toLowerCase();
		}

		export function updateVisibleLayers(service: Layer) {
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
	}	
	// utils
	

    export function isReady(): boolean {
        if (!mapViewerApp.map)
            return false;
        if (!mapViewerApp.map.loaded)
            return false;
		if (!(map.root))
			return false;

		var mapRoot : any = map.root;

		if ( !(mapRoot.clientHeight) || !(mapRoot.clientWidth))
            return false;
        if ((mapRoot.clientHeight < 2) || (mapRoot.clientWidth < 2))
            return false;

        return true;
    }

	function initMapInfoWindow(map: Map) {
		var domNode = domConstruct.create("div", null, <any>map.root, "last");
		var iwlFix = <any>InfoWindowLite;
		var infoWindow = new iwlFix(null, domNode);// new InfoWindowLite();
		infoWindow.startup();
		(<any>map).setInfoWindow(infoWindow);
	}

	function initScalebar(map: Map) {
		var scalebarOpts = <esri.ScalebarOptions>{
		};
		var scalebar = new Scalebar({
			attachTo: "bottom-left",
			map: map,
			scalebarStyle: "ruler", //"ruler" or "line".

			// "dual" displays both miles and kilmometers, sets scalebarStyle: "line"
			// "english" is the default, which displays miles
			// "metric" for kilometers
			scalebarUnit: "dual"
        });
	}

	export function init() {

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

		ui.bindClick("toolbarPrintButton", () => {
			window.print();
		});
		ui.bindClick("menuPanelPrintButton",() => {
			window.print();
			ui.showMap();
		});
	}
	
	
    // ----------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------

    export module ui {
        export var lastLogMessage = "";
		export var logTooltipsDelay = 15; // seconds	

        export function showMap() {
            hideMenuPanel();
            jQuery.mobile.changePage("#map", { role: "page", changeHash: true, transition: "fade" });
            //map.reposition();
            //map.resize();
        }

        export function showDialog(id: string, dlgTransition: string = "fade") {
            jQuery.mobile.changePage("#" + id, { role: "dialog", changeHash: false, transition: dlgTransition });
        }

        export function hideMenuPanel() {
			var menuPanel : any = jQuery('#menuPanel');
            menuPanel.panel('close');
        }

        export function setInnerHtml(tagId: string, html: string) {
            var cssDisplay = "none";
            if (html && (html != ""))
                cssDisplay = "block";

            var tag = jQuery("#" + tagId);
            tag.html(html);
            tag.css("display", cssDisplay);
        }

		export function bindClick(id: string, clickFunc) {
			var elem = jQuery("#" + id);
			elem.bind("click", function (e) {
				e.stopImmediatePropagation();
				e.preventDefault();
				clickFunc();
				elem.removeClass("ui-btn-active");
				elem.removeClass("ui-focus");
			});
		}

        export function showLogMessage(rec: novotive.log.LogRecord, log: Array<novotive.log.LogRecord>) {

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
                    }).delay(logTooltipsDelay * 1000).fadeIn(function () { // wait XX seconds
                            if (lastLogMessage == rec.toString().toLowerCase()) // check if no other messages displayed
                                msgContainer.fadeOut();
                        });
                }
                ); // show new message   

        }
        
        export function zoomInOut(value: number) {
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

        function getLogSection(section: string, log: Array<novotive.log.LogRecord>, dataIcon: string= 'false') {
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

		export function showError(rec: novotive.log.LogRecord) {
			showLogDialog([rec], null, null);
		}

        export function showLogDialog(errors: Array<novotive.log.LogRecord>, warnings: Array<novotive.log.LogRecord>, infos: Array<novotive.log.LogRecord>) {
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

        export function showLog() {
            showLogDialog(novotive.log.errorsLog, novotive.log.warningsLog, novotive.log.infosLog);
        }

		// mapServices ----------------------------------------------------------------------------------

        var selectedMapServiceId: any = null;
		var scriptFunctionsRoot = "mapViewer.app.ui.";

		function getClickTag(func: any, ...args) {
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

        export function showMapServiceSettings(serviceId) {

            var mapService = mapServices.getById(serviceId || selectedMapServiceId)
			if (mapService)
			{
                selectedMapServiceId = mapService.id;
				var serviceInfo = utils.getMapServiceInfo(mapService);
			}
			else
			{
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
					mapLayers.append(
						'<input type="checkbox" name="' + serviceId + '" value="' + subLayer.id + '" id="' + chId + '" ' + checked + '>'
						+ '<label for="' + chId + '">' + subLayer.title + '</label>');

				}
			}
            mapLayers.controlgroup();
            mapLayers.trigger("create");
            mapLayers.controlgroup("refresh");

            mapViewerApp.ui.showDialog("mapServiceLayersDialog");
        }
        // showLayersDialog() 


        export function showMapServiceSettingsSave() {
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
        } // showLayersDialogSave()


        export function showLayerActions(serviceId: string) {
            var mapService = mapServices.getById(serviceId);
			if (mapService) {
				selectedMapServiceId = serviceId;
				jQuery("#mapServiceAction").popup("open", { positionTo: "#" + getMapServiceSidePanelId(mapService) + "_Config" });
			}
        } // showActions()


        export function deleteSelectedMapService() {
            jQuery("#mapServiceAction").popup("close");
            var mapService = mapServices.getById(selectedMapServiceId);
            mapViewerApp.map.removeLayer(mapService);
            removeMapServiceFromSidePanel(mapService);
			utils.saveMapViewerConfig();
        }
        // deleteService()

        function getMapServiceSidePanelId(mapService: Layer) {
            return "mapServiceSidePanelItem_" + mapService.id;
        }

        export function addMapServiceToSidePanel(mapService: Layer) {
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

        function removeMapServiceFromSidePanel(mapService: Layer) {
            var liId = getMapServiceSidePanelId(mapService);
            jQuery("#" + liId).remove();
            jQuery("#mapServicesList").listview("refresh");
        }
		
        export function showAddMapServiceProgress(url: string = null, serviceType: string = null, title: string = null) {
            if (!(url))
                url = jQuery("#mapServiceAddDialogUrl").val();
			if (!serviceType)
				serviceType = mapServices.types.wms;
			

            mapViewerApp.ui.showDialog("progressDialog", "slide"); 
			
			mapServices.add(serviceType, url, title,
				(err, mapService) => { //onServiceError
					showError(err);
				},
				(mapService) => { //onServiceAdded
					utils.saveMapViewerConfig();
					var ext = (<any>mapService).fullExtent;
					if (ext && ext.xmax && (ext.xmax != NaN)) {
						//mapViewerApp.map.centerAt(ext.getCenter());
						mapViewerApp.map.setExtent(ext); //<--Error prone
					}
					ui.showMap();
				}
			);
        }

		
    }
    // module ui

    // ----------------------------------------------------------------------------------------

    export module events {

        export function mapSizeChanged(eArgs: { extent: Extent; height: number; width: number; target: Map }) {
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
        
        export function mapLoaded() {
            
            initResizeEvents();

            // centerAt when map is loaded
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(mapViewerApp.geolocation.updateLocationMark, mapViewerApp.geolocation.logLocationError);
                // show user position at startup
                navigator.geolocation.getCurrentPosition(mapViewerApp.geolocation.showLocationMark, mapViewerApp.geolocation.logLocationError);
            }            
			            
            //map.disableMapNavigation();
        }

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
    }
    // module events

    // -----------------------------------------------------------------------------------------

    export module mapServices {


		export var types = {
			wms: "esri.layers.WMSLayer".toLowerCase()
		}    

        export function getByUrl(url: string): Layer {
            for (var j = 0; j < mapViewerApp.map.layerIds.length; j++) {
                var serviceId = map.layerIds[j];
                var mapService = mapViewerApp.map.getLayer(serviceId);
                if (url.indexOf(mapService.url) > -1)
                    return mapService;
            }
            return null;
        }

        export function getById(serviceId: string): Layer {
            return mapViewerApp.map.getLayer(serviceId);
        }

		export function castWms(service: Layer): WMSLayer { return utils.getMapServiceType(service) == types.wms ? <WMSLayer>service : null; }


		function initServiceLayers(service: Layer) {
			var layers = new Array<mapViewer.IMapServiceLayer>();

			var wms = castWms(service); 
			if (wms)
			{
				var visibleLayers = new Array<string>();
				for (var i = 0; i < wms.layerInfos.length; i++) {
					var wmsLayerInfo = wms.layerInfos[i];
					visibleLayers.push(wmsLayerInfo.name);

					var serviceLayer = <mapViewer.IMapServiceLayer>{};
					serviceLayer.id = wmsLayerInfo.name;
					serviceLayer.title = wmsLayerInfo.title;
					serviceLayer.description = wmsLayerInfo.description;
					serviceLayer.visible = true;
				}
				wms.setVisibleLayers(visibleLayers);
			}

			(<any>service).mapServiceLayers = layers;
		}



        export function add(mapServiceType: string, url: string, displayTitle?: string, onServiceError?: (err: novotive.log.LogRecord, service: Layer) => void, onServiceAdded?: (service: Layer) => void) {

			var mapService: Layer = null;
			if (mapServiceType.toLowerCase() == mapViewerApp.mapServices.types.wms) {
				mapService = new WMSLayer(url);
				// Do not init WMS service here. If service already exists it will be initialized twice
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

			(<any>mapService).displayTitle = displayTitle;
			addService(mapService, onServiceError, onServiceAdded);
			return mapService;
        }
        // add()

		function initNewService(service: Layer) {
			var wms = mapServices.castWms(service);
			if (wms && !wms.loaded) {
				wms.on("load",(eArgs) => {
					// By default all WMS layers are invisible
					var visibleLayers = [];
					for (var i = 0; i < wms.layerInfos.length; i++) {
						visibleLayers.push(wms.layerInfos[i].name);
					}
					wms.setVisibleLayers(visibleLayers);
				});
			}
		}

		export function addService(service: Layer, onServiceError?: (err: novotive.log.LogRecord, service: Layer) => void, onServiceAdded?: (service: Layer) => void) {

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
			
			var loadErrHandler = service.on("error",(eArgs) => {
				loadErrHandler.remove();
				var logRec = new novotive.log.LogRecord("Map service initialization errror.");
				utils.addServiceLogInfo(logRec, service);
				if (onServiceError)
					onServiceError(logRec, service);
				console.error(logRec);
			});
		
			service.on("load",(eArgs) => {
				var lr = new novotive.log.LogRecord("Map service added: " + utils.getMapServiceType(eArgs.layer) + "(" + eArgs.layer.url + ")");
				ui.addMapServiceToSidePanel(service);
				if (onServiceAdded)
					onServiceAdded(eArgs.layer);
				console.info(lr);

				loadErrHandler.remove();
				service.on("error",(eArgs) => {
					var logRec = new novotive.log.LogRecord("Map service errror");
					logRec.setMessage(eArgs.error.message);
					utils.addServiceLogInfo(logRec, service);
					console.error(logRec);
				});
			});
			
			
			mapViewerApp.map.addLayer(service);
		}

        export function addFromConfig(config: mapViewer.IMapServiceConfig) {
			var service = add(config.serviceType, config.url, config.title);
			if (service == null)
				return;
			service.setVisibility(config.visible || true);
			service.setOpacity(config.opacity || 1.0);
			// TODO: set mapService visible layers 
			// config.visibleLayers ?: Array<any>; //WmsLayer(string), ArcGISDynamicMapServiceLayer(Number)
        }
		

		function getMapServiceUrlId(url: string) {
			// there could be two different addresses for the same service 
			// eg. http://wms.com? and http://wms.com?Request=GetCapabilites
			return url.toLowerCase().split("?")[0] + "?";
		}

        export function addMapServices(services: Array<mapViewer.IMapServiceConfig>) {
			
			// At this point we don't have map services loaded into the map, so we need local information about ingaged services
			var servicesUrls = new Array<string>();

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


    }
    // module mapService 

    // ----------------------------------------------------------------------------------------

    export module geolocation {

        var lastPosition: Position = null;

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

        export function logLocationError(error) {
            clearLocationMark();
            var errMsg = locationErrorMessage(error);
            console.warn(errMsg);
            lastPosition = null;
        }

        function clearLocationMark() {
            if (mapViewerApp.isReady()) {
                mapViewerApp.map.infoWindow.hide();
                mapViewerApp.map.graphics.clear();
            }
        }

        function centerAtLocation(location: Position) {
            if (mapViewerApp.isReady()) {
                var pt = <Point>webMercatorUtils.geographicToWebMercator(new Point(location.coords.longitude, location.coords.latitude));
                mapViewerApp.map.centerAt(pt);
            }
        }


        export function updateLocationMark(location: Position) {
            if (!mapViewerApp.isReady())
                return;

			

			var symbol = res.gpsLocationMarker;
            if (location.coords.accuracy <= 100) {
                symbol = res.gpsFixedLocationMarker;
			}

            var pt = webMercatorUtils.geographicToWebMercator(new Point(location.coords.longitude, location.coords.latitude));
			var timeStr = new Date(<any>(location.timestamp)).toLocaleString();
            var attributes = {
                "lat": location.coords.latitude,
                "lon": location.coords.longitude,
                "accuracy": Math.round(location.coords.accuracy),
                "time": timeStr
            };
            var infoTemplate = new InfoTemplate("<strong>Location</strong>",
                "&phi;: ${lat} <br/>&lambda;: ${lon} <br/>Accuracy: ${accuracy} <br/>Time: ${time}");
            var graphic = new Graphic(pt, symbol, attributes, infoTemplate);

            clearLocationMark(); // remove previous location mark
            mapViewerApp.map.graphics.add(graphic);
            lastPosition = location;
            //mapViewer.map.centerAt(pt);
        }

        export function showLocationMark(position: Position) {
            updateLocationMark(position);
            centerAtLocation(position);
        }

        export function showLocation() {
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

    }
    // module geolocation

    // ---------------------------------------------------------------------------------------

}
// mapViewer

ready(80, mapViewerApp.init);

jQuery(document).on("pagehide", function (event) {
	//console.log("pagehide", event);

	var map = mapViewerApp.map;
	if (map && map.root) {
		var root : any= map.root;
		if (root.clientHeight < 5) {
			root.style.height = "100%";
		}
		if (root.clientWidth < 5) {
			root.style.width = "100%";
		}
	}
});
