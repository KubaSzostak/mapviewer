//<reference path="../js-languative/languative.ts"/>
//<reference path="../js-novotive/novotive.ts"/>





module mapViewer {


	export interface IMapServiceLayer {
		id: any;
		title: string;
		description?: string;
		visible: boolean;
		subLayers: IMapServiceLayer[];
	}

	export interface IMapService extends IMapServiceLayer {
		serviceType: string;
		url: string;
	}

	export interface IMapServiceConfig {
		serviceType: string;
		url: string;
		title?: string;
		visibleLayers?: Array<any>; //WmsLayer(string), ArcGISDynamicMapServiceLayer(Number) 
		opacity?: number;
		visible?: boolean;
	}

	export interface IMapConfig {
		zoom: number;
		centerX: number;
		centerY: number;
		basemap: string;
		mapServices: Array<IMapServiceConfig>;
	}

	export var mapConfig: IMapConfig = {
		zoom: 6,
		centerX: 19.0,
		centerY: 54,
		basemap: "topo",
		mapServices: new Array<IMapServiceConfig>()
	};

	export var app: any;
}


novotive.homeUrl = "../";


if (novotive.isUmgdyHost()) {
    
    novotive.homeUrl = "http://gis.umgdy.gov.pl";

    //mapViewer.config.initConfig.mapServices.push({
    //    serviceType: "WMS",
    //    displayTitle: "Urząd Morski w Gdyni",
    //    url: "http://gis.umgdy.gov.pl/geoserver/wms"
    //});

    languative.modifyDictionary("html", {
        Title: "Maps",
        homePageTitle: "gis.umgdy.gov.pl"
    });

    languative.modifyDictionary("pl", {
        Title: "Mapy",
        AboutContactMail: [
            "Możesz się ze mną skontaktować również za pośrednictwem poczty elektronicznej:",
            "<br />",
            "jakub.szostak(₪)umgdy.gov.pl",
            ""
        ]
    });
}
// umgdy.gov.pl


if (novotive.isDeveloperHost()) {
    //mapViewer.config.initConfig.mapServices.push({
    //    serviceType: "WMS",
    //    displayTitle: "GDOŚ",
    //    url: "http://wms.gdos.gov.pl/geoserver/wms?SERVICE=WMS&request=GetCapabilities"
    //});
}

