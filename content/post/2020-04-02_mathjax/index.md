+++
categories  = ["Post"]
tags        = ["2020", "Java", "MathJax", "TeX", "Video"]
description = "MathJax zur schönen Darstellung von Formeln"
title       = "MathJax"
date        = "2020-04-02T13:07:14+02:00"
series      = ["Tricks"]
+++
## Java

Eigentlich mag ich kein Java auf den Webseiten. Wofür wird es hier verwendet?

<!--more-->

{{<tex>}}

* [Fancybox][] - für die einfache Bildergalerie
* [OpenSeaDragon][] - für die Panoramen
* [MathJax][] - für Tex-Ausdrücke im Text
* [QR][] - für QR-Codes in Ausdrucken
* [jQuery][] - jQuery is a fast, small, and feature-rich JavaScript library

Ohne Java ist eine Basis-Funktion gesichert - nur nicht bei Panoramen.

Für alle Komponenten ist der Quelltext im Internet verfügbar und einsehbar.

## MathJax

Hier ein kleiner Versuch mit den Maxwell-Gleichungen - sieht doch gut aus

|Name|Formel|
|----|:----:|
|Gaußsches Gesetz|${\vec {\nabla }}\cdot {\vec {E}}={\frac {\rho }{\varepsilon _{0}}}$|
|Gaußsches Gesetz für Magnetfelder|${\vec {\nabla }}\cdot {\vec {B}}=0$|
|Faraday's Induktionsgesetz|${\vec {\nabla }}\times {\vec {E}}=-{\frac {\partial {\vec {B}}}{\partial t}}$|
|Ampère's Durchflutungsgesetz|${\vec {\nabla }}\times {\vec {B}}=\mu _{0}{\vec {j}}+\mu _{0}\varepsilon _{0}{\frac {\partial {\vec {E}}}{\partial t}}$|

Wobei auch $\mu _{0}\varepsilon _{0}={\frac {1}{c^{2}}}$ gesetzt wird.

eine Matrix

$ \begin{vmatrix}a & b \\\\ c & d \end{vmatrix}$ 


---

Eine gute Einführung gibt es von **Prof. Dr. Edmund Weitz** der **Hochschule für Angewandte Wissenschaften Hamburg**
{{< tube 7ovgNXRiJ6g "Prof. Dr. Edmund Weitz"  >}}

[Fancybox]:  https://github.com/fancyapps/fancybox "fancyBox"
[OpenSeaDragon]: https://openseadragon.github.io/ "OpenSeaDragon"
[MathJax]: https://www.mathjax.org/ "MathJax"
[QR]: http://www.d-project.com/ "QR"
[jQuery]: https://jquery.com/ "jQuery is a fast, small, and feature-rich JavaScript library"