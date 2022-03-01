+++
tags        = ["2021", "CSS"]
description = "Light meets Dark with prefers-color-scheme"
title       = "Light and Dark"
date        = "2021-06-22T13:46:20+02:00"
series      = ["Tuning"]
+++
## prefers-color-scheme

Die Anpassung des Farbschemas einer Webseite  an Tag/Light und Nacht/Dark ist eine nützliche Sache. Hier mein erster Versuch.
Die besten Anregungen habe ich bei [web.dev][hd] gefunden. Die notwendigen Styles lassen sich mit Hugo selbst erzeugen, eine gute [Anleitung] hilft.

### CSS

- main.css enthält alle Styles der Web-Seiten
- dark.css enthält alle Werte für den Dark-Mode
- light.css enthält alle Wete für den Light-Mode

in **main.css** wird das Schema aktiviert

```CSS 
:root {
	color-scheme: light dark;
}
```

Alle Schema-Definitionen werden nach **light.css** und **dark.css** verschoben und entsprechend angepasst. Hilftreich ist dabei die Verwendung von Variablen innerhalb von CSS.

### Generierung mit Hugo


````BASH 
hugo gen chromastyles --style=vs  > light.css
hugo gen chromastyles --style=vim > dark.css
````

### Meta
Im **header** der HTML-Seiten werden die neuen Dateien eingefügt, hier vereinfacht:

```HTML
<link rel=stylesheet href=/dark.css  media="(prefers-color-scheme: dark)">
<link rel=stylesheet href=/light.css media="(prefers-color-scheme: light)">
<link rel=stylesheet href=/main.css>
```
### weitere Anpassungen

Alle Styles in **main.css** waren noch nicht vorbereitet und mussten angepasst werden.

Alle Bilder werden im **dark**-Mode etwas grauer dargestellt, um den Blendeffekt zu reduzieren.

### Edge

Im Edge/Dev Browser lässt sich das Farb-Schema über die [Settings][ed] aktivieren und auswählen (*edge://settings/appearance* in Adressfeld kopieren). 

### Windows 11

Edge kann den Farb-Mode aus den Benutzer-Einstellungen übernehmen.  

![](images/settings.png "Einstellungen / Personalisierung / Farben")

[hd]: https://web.dev/prefers-color-scheme/ "Hello darkness, my old friend"
[ed]: https://beebom.com/customize-microsoft-edge-color-theme-picker/ "Color Theme Picker"
[Anleitung]: https://www.bitsplease.xyz/posts/syntax-highlighting-on-hugo/ "Syntax Highlighting on Hugo"