+++
categories  = ["Photo"]
tags        = ["2018", "Foto", "HDRI"]
description = "Wie mache ich HDRI-Bilder?"
title       = "HDRI Fotos"
date        = "2018-08-24T22:07:49+02:00"
+++
Von der Taunuswanderung habe ich einige Bilder als [HDRI][] gekennzeichnet.
Wie mache ich diese HDRI-Bilder?
<!--more-->

### Aufnahme

Zu 99% benutze ich das [RAW][]-Format der Kamera, dieses enthält je Farbe 12bit Werte, d.h. gegenüber JPEG mit 8bit eine 16-fach bessere Farbauflösung.
Für HDRI mache ich 3 Aufnahmen mit einem Abstand von 2 EV ([Exposure Value][] / [Lichtwert][]), das erste Bild -2 EV, das zweite mit 0 EV und das dritte mit +2 EV. 

Die Kamera variiert die Belichtungszeit, indem sie diese von Bild zu Bild verdoppelt. Insgesamt vergrößere ich damit die Aufnahmenbereich um 4 EV.

### Entwicklung

Aus den RAW-Deieten entwickele ich mit [DxO PhotoLab][] normale JPEG-Bilder.  Besser wäre ein anderes Format mit besserer Farbauflösung, aber das HDRI Programm kann leider nur JPEG als Eingabe verwenden.

### HDRI 

Zur Berechnung verwende ich das kostenfreie [GeodesicHDR][] aus der Forschungsecke von Microsoft. Leider kann ich das Programm nur mit JPEG füttern, lieber würde ich TIFF mit 16 Bit Farbkanal verwenden.

Im Ergebnis werden dunkle (zugelaufene / abgesoffene) Bereiche aufgehellt und die hellen (ausgebrannte / ausgefressenen) Bereiche abgeschwächt, so dass mehr auf den Bildern zu sehen ist.

### Beispiele 

Blenheim Palace Eingangshalle

{{% imagelist dsc03298    %}} Aufnahme **-2 EV**, Belichtungszeit {{< frac 1 250 >}}<br/>Äußere Strukturen sind zu gut erkennen.{{% /imagelist %}}
{{% imagelist dsc03299    %}} Aufnahme  **0 EV**, Belichtungszeit {{% frac 125%}}<br/>Die Decke und die Erker auf der unteren linken Seite sid abgesoffen, durch die Fenster sind äußere Strukturen kaum zu erkennen.{{% /imagelist %}}
{{% imagelist dsc03300    %}} Aufnahme **+2 EV**, Belichtungszeit {{% frac 60%}}<br/>Äußere Strukturen sind zu fast unsichtbar, die Fenster verlieren an Struktur, der Innenraum ist sehr gut abgebildet.{{% /imagelist %}}
{{% imagelist dsc03299hdr %}} **HDRI** Ergebnis: Der Innenraum ist gut abgebildet, die Strukturen um die Fenster herum sind gut erkennbar, äußere Strukturen bleiben sichtbar. Ein HDR Foto hat mehr Textur als ein optimiertes.{{% /imagelist %}}
{{% imagelist dsc03299web %}} **RAW** Einzelaufnahme mit Nacharbeitung<br/>Den Innenraum ist gut sichtbar, die äußeren Strukturen noch erkennbar {{% /imagelist %}}


[HDRI]: https://de.wikipedia.org/wiki/HDRI-Erzeugung_aus_Belichtungsreihen "HDRI-Erzeugung aus Belichtungsreihen" 
[Exposure Value]: https://en.wikipedia.org/wiki/Exposure_value "Wiki Exposure value"
[Lichtwert]: https://de.wikipedia.org/wiki/Lichtwert "Wiki Lichtwert"
[DxO PhotoLab]:https://www.dxo.com/de/dxo-photolab/ "DxO PhotoLab Foto-Software"
[GeodesicHDR]: https://www.microsoft.com/en-us/download/details.aspx?id=52481 "Geodesic High-Dynamic-Range Photography Tool"
[RAW]: https://de.wikipedia.org/wiki/Rohdatenformat "Wiki Rohdatenformat"
