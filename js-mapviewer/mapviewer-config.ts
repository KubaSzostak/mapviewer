
///<reference path="../js-novotive/novotive.ts"/>
///<reference path="../js-languative/languative.ts"/>
///<reference path="../js-mapviewer/mapviewer.ts"/>


novotive.homeUrl = "../";

if (novotive.isUmgdyHost()) {
    
    novotive.homeUrl = "http://gis.umgdy.gov.pl";


    mapViewer.config.initConfig.mapServices.push({
        serviceType: "WMS",
        displayTitle: "Urząd Morski w Gdyni",
        url: "http://gis.umgdy.gov.pl/geoserver/wms"
    });

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
    mapViewer.config.initConfig.mapServices.push({
        serviceType: "WMS",
        displayTitle: "GDOŚ",
        url: "http://wms.gdos.gov.pl/geoserver/wms?SERVICE=WMS&request=GetCapabilities"
    });
}
// mapViewerTestingMashine