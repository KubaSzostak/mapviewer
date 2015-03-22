Languative
==========

Multi language javascript plug-in


Basic info
----------


Languative will look for all tags in Your html page that have atribute 'data-phrase-id'. 

```html
<p><strong data-phrase-id="welcomeMessage">Welcome on languative demo page</strong></p>
```

If it find that tag it do two things:

Save innerText to "html" dictionary: 
```javascript
languative.dictonaries.html["welcomeMessage"] = "Welcome on languative demo page";
```

And then it will change this tag 'innerText' to valude defined in active dictionary.

```html
<p><strong data-phrase-id="welcomeMessage">Witaj na stronie testowej Languative</strong></p>
```

Modifing dictionary
-------------------

Languative loads at startup defaults dictionary from html code. This dictionary is  called "html". 
If Languative cannot recognize active languagi it will use this default "html" dictinary. 
So  You dont have to modify default dictionary (for example example "en"). Default dictionary
(named "html") is loaded directly from html code. If languative cannot find 'data-phrase-id' 
for selected language "html" language will be used.

You can add as many languages as You wish:
```javascript
languative.modifyDictionary("pl", {
  welcomeMessage: "Witaj na stronie testowej Languative",
  selectLanguage: "Możesz wybrać język przez kliknięcie linków poniżej",
  english: "Angielski (English)",
  polish: "Polski",
  german: "Niemiecki"
});
        
languative.modifyDictionary("de", {
  welcomeMessage: "Willkommen auf languative Demo-Seite",
  selectLanguage: "Sie können Sprache, indem Sie auf Links unten verändern"
});
```
As You see there is no need to define all dictionary phrases.

You can also change default "html" dictionary loaded from page code:
```javascript
languative.modifyDictionary("html", {
  githubLink: "Fork me on GitHub"
});

```

You can load all html page phrases to JavaScript object;
```javascript
document.getElementById("htmlDictionary").innerText = JSON.stringify(languative.dictonaries.html, null, "  ");
```

Modifing page language
----------------------

Modifing page language is as simple as this piece of code:
```html
<a href="#" onclick="languative.changeLanguage('pl');" data-phrase-id="polish">Polish</a></li>
```






