///<reference path="../esri/jsapi/typescript/arcgis-js-api.d.ts"/>
///<reference path="novotive.ts"/>


	import dojo_on = require("dojo/on");
	import dojo_dom = require("dojo/dom");
	import dojo__base_connect = require("dojo/_base/connect");

	import Map = require("esri/map");
	import Draw = require("esri/toolbars/draw");
	import Graphic = require("esri/graphic");
	import SimpleMarkerSymbol = require("esri/symbols/SimpleMarkerSymbol");
	import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");
	import Extent = require("esri/geometry/Extent");
	import Point = require("esri/geometry/Point");

	import Layer = require("esri/layers/layer");
	import DynamicMapServiceLayer = require("esri/layers/DynamicMapServiceLayer");
	import WmsLayer = require("esri/layers/WMSLayer");

	import Popup = require("esri/dijit/Popup");
	import PopupMobile = require("esri/dijit/PopupMobile");
	import Locator = require("esri/tasks/locator");
	import InfoTemplate = require("esri/InfoTemplate");
	import SpatialReference = require("esri/SpatialReference");
	import webMercatorUtils = require("esri/geometry/webMercatorUtils");


//TODO: run GetImage() after service is loaded and check if resource is interpreted as Image but transferred with MIME type application/vnd.ogc.se_xml




module mapServicesUtils {
    
	// Depreaced
	// It was used in previous version of MapViewer



	export function wmsExtent(thisNode: Node) {

		// bboxNode must be WGS-84 (EPSG:4326) coordinate system
		function attrToBbox(bboxNode: Element) {
			var minx = Number(bboxNode.getAttribute("minx"));
			var miny = Number(bboxNode.getAttribute("miny"));
			var maxx = Number(bboxNode.getAttribute("maxx"));
			var maxy = Number(bboxNode.getAttribute("maxy"));


			var spatialRef = new SpatialReference(4326);
			var extWgs = new Extent(minx, miny, maxx, maxy, spatialRef);
			return <Extent>webMercatorUtils.geographicToWebMercator(extWgs);
		}

		// *** Root layer (first <Layer /> node)
		// GeoServer on root layer has only <LatLonBoundingBox /> 
		// ArcGIS on root layer has EX_GeographicBoundingBox(?) and <BoundingBox CRS="EPSG:4326" />

		// *** Child layers
		// GeoServer on child layers has <LatLonBoundingBox /> and <BoundingBox SRS="EPSG:4326" />
		// ArcGIS on child layers has EX_GeographicBoundingBox(?) and <BoundingBox CRS="EPSG:4326" />

		var bboxNodes = novotive.dom.childNodes(thisNode, "LatLonBoundingBox");
		if (bboxNodes.length == 1) {
			return attrToBbox(<Element>bboxNodes[0]);
		}

		bboxNodes = novotive.dom.childNodes(thisNode, "BoundingBox");
		for (var i = 0; i < bboxNodes.length; i++) {
			//  SRS but ArcGIS uses CRS
			// CRS for WMS version 1.3.0; SRS for WMS versions 1.1.1 and below
			var bboxNode = <Element>bboxNodes[i];
			if (bboxNode.getAttribute("SRS") == "EPSG:4326")
				return attrToBbox(bboxNode);
			if (bboxNode.getAttribute("CRS") == "EPSG:4326")
				return attrToBbox(bboxNode);
		}

		return null;

		//return new esri.geometry.Extent(-180, -90, 180, 90, { wkid: 4326 });
		//return undefinied
	}

	export function wmsMercatorEpsg(thisNode: Node) {
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

	export function wmsStyle(thisNode: Node) {
		var firstStyle = null;
		var styleNodes = novotive.dom.childNodes(thisNode, "Style");

		if (styleNodes.length < 1)
			return "Default";

		// Do not look for 'Default' style. Use first style as default
		return novotive.dom.childValue(styleNodes[0], "Name");
	}
}





