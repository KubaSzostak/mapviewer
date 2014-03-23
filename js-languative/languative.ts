
// Module
module languative {

    var phraseIdAttr = "data-phrase-id";

    export var ignoreTags = {
        img: "<img />",
        br: "<br />",
        hr: "<hr />"
    };

    export var dictonaries: any = {
        html:  {
            _id: "html",
            _name: "HTML"
        },
        en: {
             _id: "en",
            _name: "English"
        },
        pl: {
            _id: "pl",
            _name: "Polski - Polish"
        }
    };

    export var selectedDictionary: any = null;

    export function getDictionary (langKey: string) {
        langKey = langKey.toLowerCase();
        if (langKey in languative.dictonaries)
            return languative.dictonaries[langKey];

        // Dictionary at key "pl-PL" not found, so keep looking for key "pl"
        var sep = langKey.indexOf("-");
        if (sep > 0)
            langKey = langKey.substring(0, sep);
        return languative.dictonaries[langKey];
    } // getDictionary

    export function getPhrase(phraseId: string) {
        var res = findPhrase(phraseId);
        if (res)
            return res;
        else
            return phraseId;
    }

    export function findPhrase(phraseId: string) {
        if ((phraseId == null) || (phraseId == ""))
            return null;

        if ((languative.selectedDictionary != null) && (phraseId in languative.selectedDictionary))
            return languative.selectedDictionary[phraseId];
        if (phraseId in languative.dictonaries.html)
            return languative.dictonaries.html[phraseId];

        return null;
    }

    export function getYesNo(value) {
        if (value === undefined)
            return getPhrase("undefined")
        else if (value)
            return getPhrase("yes");
        else
            return getPhrase("no");
    }

    //IE8 Tweak
    function getAttr(node, attr: string) {
        var result = (node.getAttribute && node.getAttribute(attr)) || null;
        if (!result && node.attributes) {
            for (var i = 0; i < node.attributes.length; i++) {
                var attrNode = node.attributes[i];
                if (attrNode.nodeName === attr) 
                    return attrNode.nodeValue;
            }
        }
        return result;
    }

    export function getDictionaryFromHtml () {

        function getNodeValue(node) {
            var res = null;
            if ("innerHTML" in node) {
                res = node["innerHTML"];
            }
            else {
                res = node.nodeValue;
            }
            if (res != null) {
                res = res.replace(/\s{2,}/g, ' ');
                res = res.replace(/^\s+|\s+$/g, ''); // res.trim(); - in IE8 string.trim() is missing.
                //http://stackoverflow.com/questions/2308134/trim-in-javascript-not-working-in-ie
            }
            return res;
        } // getNodeValue()

        function getTagPhrase(tag) {
            if (tag.childNodes.length > 1) {
                // Array of nodes:
                //  <p data-phrase-id="contact-info">
                //    <strong>Contact</strong>
                //    <br />
                //    e-mail: 
                //    <a href="mailto:kuba.szostak@gmail.com">kuba.sostak@gmail.com</a>
                //  <p>
                //  contact-info: [   
                //      Contact,
                //      <br />,
                //      e-mail:
                //      kuba.szostak@gmail.com
                //  ]

                var resPhrase = new Array();
                for (var ci = 0; ci < tag.childNodes.length; ci++) {
                    var chNode = tag.childNodes[ci];
                    var chName = chNode.nodeName.toLowerCase();
                    var chValue = null;

                    if (chName in languative.ignoreTags)
                        chValue = languative.ignoreTags[chName];
                    else
                        chValue = getNodeValue(chNode);

                    resPhrase.push(chValue);
                }
                return resPhrase;
            }
            else {
                // Simply text value:
                //  <p data-phrase-id="contact-info">
                //      e-mail: kuba.sostak@gmail.com
                //  <p>
                // contact-info: "e-mail: kuba.sostak@gmail.com"
                return getNodeValue(tag);
            }

        } // getTagPhrase()

        var tags = getHtmlTags();

        var resDict = new Object();
        for (var ti = 0; ti < tags.length; ti++) {
            var tag = tags[ti];
            var phraseId = getAttr(tag, phraseIdAttr);
            if ((phraseId != null)) {
                var phraseValue = getTagPhrase(tag);
                if ((phraseId in resDict) && (resDict[phraseId] != phraseValue)) {
                    console.warn("Different phrases with the same data-phrase-id='" + phraseId + "'\n"
                        + " 1: " + JSON.stringify(resDict[phraseId], null, "  ")
                        + "\n 2: " + JSON.stringify(phraseValue, null, "  "));
                }
                else {
                    resDict[phraseId] = phraseValue;
                }
            }
        }
        return resDict;
    } // getDictionaryFromHtml

    

    export function changeLanguage (langKey) {

        function setTagPhrase(tag, phrase) {
            if (tag.childNodes.length > 1) {
                for (var ci = 0; ci < tag.childNodes.length; ci++) {
                    var chNode = tag.childNodes[ci];
                    var nName = chNode.nodeName.toLowerCase();
                    if (!(nName in languative.ignoreTags)) {
                        if ("innerHTML" in chNode) {
                            chNode["innerHTML"] = " " + phrase[ci] + " ";
                        } else {
                            chNode.nodeValue = " " + phrase[ci] + " ";
                        }
                    }
                }
            } else {
                tag.innerHTML = " " + phrase + " ";
            }
        } // setTagPhrase()

        //return;
        var langDict = languative.getDictionary(langKey);
        if (langDict == null) {
            console.warn("Cannot identify dictionary by key '" + langKey + "'. Default dictionary (" + languative.dictonaries.html._id + ": " + languative.dictonaries.html._name + ") used instead.");
            langDict = languative.dictonaries.html;
        }
        languative.selectedDictionary = langDict;


        var tags = getHtmlTags();
        for (var ti = 0; ti < tags.length; ti++) {
            var tag = tags[ti];
            var phraseId = getAttr(tag, phraseIdAttr);
            if ((phraseId != null)) {
                var phraseValue = languative.getPhrase(phraseId);
                if (phraseValue) {
                    setTagPhrase(tag, phraseValue);
                }
                else {
                    console.warn("Phrase not definied in dictionary: data-phrase-id='" + phraseId + "'");
                }
            }
        }

        if (langDict["Title"] != null) {
            document.title = langDict["Title"];
        }
        //document.getElementById("langDictionaryContent").innerText = "Languative.defaultDictionary: \n" + JSON.stringify(Languative.defaultDictionary, null, "  ");
    } // changeLanguage()

    
    function getHtmlTags()  {
        var res = new Array<HTMLElement>();
        var docTags = document.body.getElementsByTagName("*");
        
        for (var i = 0; i < docTags.length; i++) {
            var docTag = docTags[i];
            var phraseId = getAttr(docTag, phraseIdAttr);
            if (phraseId)
                res.push(<HTMLElement> docTag);
        }
        return res;
    }

    var initialized = false;

    export function init () {
        if (!initialized) {
            initialized = true;
            var htmlDict = languative.getDictionaryFromHtml();

            for (var dictKey in htmlDict) {
                // Do not replace html dictionary values definied by developer in javascript code thru Languative.modifyDictionary().
                if (!(dictKey in languative.dictonaries.html)) {
                    languative.dictonaries.html[dictKey] = htmlDict[dictKey];
                }
            }
            var nav: any = window.navigator;
            languative.changeLanguage(nav.userLanguage || nav.language);
        }
    }


    export function modifyDictionary (langKey, dictModifications) {
        var langDict = languative.getDictionary(langKey);
        if (langDict == null) {
            languative.dictonaries[langKey.toLowerCase()] = dictModifications;
        } else {
            for (var dictKey in dictModifications) {
                langDict[dictKey] = dictModifications[dictKey];
            }
        }
    } // modifyDictionary()

}


//Languative.modifyDictionary("pl", {});
//Languative.modifyDictionary("en", {});


if (document.addEventListener)
    document.addEventListener('DOMContentLoaded', languative.init)

// Adding document.onLoad event is not easy for cross-browser compability, so use window.onLoad event
// for sure that initialization occurs.
// http://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery

if (window.addEventListener) {//W3C
    window.addEventListener('load', languative.init, false);
}
else { //IE
    window.attachEvent('onload', languative.init);
}