+++
categories  = ["Post"]
tags        = ["2019", "CSS", "HTML"]
description = "CSS Grid rocks!"
title       = "CSS grid"
date        = "2019-05-10T13:38:12+02:00"
expirydate  = "2021-05-10T13:38:12+02:00"
draft       = false
series      = ["Tuning"]
+++
## CSS Grid

[CSS Grid][GR] ist seit Dezember 2017 ein neues Layoutelement. Die wichtigsten [Browser][BR] unterstützen Grid.
Der Edge Browser auf den abgekündigten Windows Phones ist nicht mehr dabei.

## Fallbacks

Mit der @supports-Direktive kann im CSS ein Fallsback umgesetzt werden.

<pre><code>
@supports (display:grid) {
  nav {
    grid-area: nn;
  }
}

@supports not (display:grid) {
  nav {
    columns: 4;
  }
}
</code></pre>

Der Navigationsbereich **nav** wird im Grid-Bereich **nn** eingebettet. 
Ohne Grid bleibt die Navigation in der Reihenfolge der HTML-Elemente, 
wird aber auf 4 Spalten aufgeteilt, so dass keine große vertikale Lücke entsteht.

Grid-CSS verlangt einen korrekten Umgang mit der **DIV** Auszeichnung im HTML Text.  
Dieser wird daduch lesbarer.

## Aufteilung in Spalten

Durch die Nutzung von **CSS columns** können längere Listen auf mehrere Spalten aufgeteilt werden.
Die (Link-Sammlung)[/links] wird entsprechend der Bildschirmbreite in 1 bis 5 Spalten aufgeteilt - nur mit CSS!

## Atomares CSS

Atomares CSS wird sehr zwiespältig diskutiert.
Der HTML-Text wird zu sehr mit CSS-Klassen gefüllt und damit unlesbarer.
Mit **Hugo** ist das kein Problem, da die Seiten als Markdown geschrieben werden und CSS nur in den Templates zu finden ist.

## Ausdrucken

Für das **@media print** können CSS Klassen geschrieben werden.
Diese wurden nun in eine getrennte Datei **print.css** ausgelagert.
Druch die Auszeichnung der Links mit **media=print** muss ein Browser diesen Teil nur laden,
wenn die Seite ausgedruckt wird.

## Ergebnis

- schlankere HTML-Seiten
- gefühlte schnellere Anzeige von Seiten
- stabileres Layout
- auf Grund der Fallback leicht größere CSS-Datei

Es ist erstaunlich, dass immer wieder etwas verbessert / verändert werden kann.

[GR]: https://www.w3.org/TR/css-grid-1/ "W3C Candidate Recommendation CSS Grid"
[BR]: https://www.w3schools.com/css/css_grid.asp "w3schools zu CSS Grid"
[TA]: https://tachyons.io/ "Tachions CSS"