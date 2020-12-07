+++
tags        = ["2020", "RSS", "ATOM", "JSON"]
description = "Feeds - RSS, ATOM und JSON"
title       = "Füttere mich"
date        = "2020-12-07T13:01:40+01:00"
draft       = false
+++
## Feeds ..

News-Feeds sind eine Technoligie zur einfachen und strukturierten Veröffentlichung von Änderungen auf Websites in standardisierten Formaten. 
[Wikipedia](https://de.wikipedia.org/wiki/Web-Feed).

<!--more-->

### Rich Site Summary (RSS)

RSS 0.90 wurde von Netscape erstmals am 15. März 1999 vorgestellt. 

Durch das [RSS Advisory Board][RSSB] wurde **RSS 2** standardisiert und ist seit 2009 stabil.
[RSS Spezifikation][RSS]

Aktuell ist Version 2.0.11 vom 30.3.2009

### ATOM

Das Syndikationsformat (ASF) ist die am häufigsten anzutreffende Umsetzung der Atom-Standards. 
Atom entstand aus dem Bedürfnis heraus, die Vorteile der unterschiedlichen RSS-Formate in einem neuen Format zusammenzufassen und um neue Elemente zu ergänzen.
[Wikipedia][ATOM].

Im Jahr 2003 begann eine Bewegung, eine bessere Alternative für RSS zu finden.  
Das Atom Syndication Format wurde als Standard IETF [RFC 4287][] im Dezember 2005 veröffentlicht und ist seitdem stabil.

### JSON

[JSON Feed][JSONFEED] ist ein pragmatisches Syndikation Format, wie RSS und Atom, aber mit einer großen Differenz: es ist JSON statt XML.
Aktuell ist Version 1.1. vom 7.8.2020

Für die meisten (Java-) Entwickler ist JSON viel einfacher zu lesen und schreiben als XML. 
Entwickler könnten einen XML Parser verwenden, aber für das Entschlüsseln von JSON-Feeds ist meist nur eine Zeile Code notwendig.

## RSS vs ATOM vs JSON

- Alle RSS und ATOM Dateien müssen konform zur XML 1.0 Spezifikation sein.
- Für RSS und ATOM können XML Stylesheet definiert werden, das geht bei JSON nicht.

- Größenvergleich
	- RSS  52KB
	- Atom 40KB
	- JSON 24KB

## meine Feeds

[RSS](/feeds/feed.rss.xml) 

[ATOM](/feeds/feed.atom.xml)

[JSON](/feeds/feed.json)



[RSS]:  https://www.rssboard.org/rss-specification "RSS Format"
[RSSB]: https://www.rssboard.org/ "RSS Advirory Board"

[ATOM]: https://en.wikipedia.org/wiki/Atom_(Web_standard) "ATOM Format"
[RFC 4287]: https://tools.ietf.org/html/rfc4287 "The Atom Syndication Format"

[JSONFEED]: https://jsonfeed.org/version/1.1 "JSON Feed Home"

