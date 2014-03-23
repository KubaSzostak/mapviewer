///<reference path="../js-languative/languative.ts"/>
///<reference path="../js-novotive/novotive.ts
///<reference path="metaviewer.ts"/>
novotive.homeUrl = "index.html";

if (novotive.isUmgdyHost()) {
    novotive.homeUrl = "http://gis.umgdy.gov.pl/";

    languative.modifyDictionary("html", {
        homePageTitle: "gis.umgdy.gov.pl"
    });

    languative.modifyDictionary("pl", {
        pageTitle: "Metadane"
    });
}

if (novotive.isDeveloperHost()) {
    metaViewer.config.cswServiceUrl = "http://gptogc.esri.com/geoportal/csw";
}
