+++
tags        = ["2019", "HTML", "Links", "Apache"]
description = "Tuning mit Xenu"
title       = "X Tuning"
date        = "2019-05-14T12:23:44+02:00"
draft       = false
series      = ["Tuning"]
+++
## Link-Checker

Leider hat Hugo keinen Link-Checker.  Ein altes aber sehr gutes Tool ist [Xenu][].

Im internen Bereich gab es 2 falsch verlinkte Bilder - upps.

Permanente Weiterleitungen (Code 301) wurden in die Seiten übernommen,
so dass ohne einen zusätzlichen HTTP-Request zu den Zielseiten gewechselt werden kann.
<!--more-->

Alle internen Taxonomy-Links (tags, categories, series) werden über 301 weitergeleitet. Das könnte in Hugo besser gelöst werden!

Weiterleitungen von **HTTP** zu **HTTPS** sind damit auch erledigt.

## Statistik

|MIME type|count|% count|Σ size kB|% size|min size kB|max size kB|Ø size kB|Ø time
|---------|----:|------:|-----:|-----:|-------:|-------:|-----:|-----:|
|text/html|400|27.10%|2.574,16|0.61%|3,74|34,57|6,43|0,145|
|text/css|2|0.14%|2,72|0.00%|0,39|2,33|1,36|
|text/vcard|1|0.07%|0,67|0.00%|0,67|0,67|0,67|
|image/icon|1|0.07%|302,08|0.07%|302,08|302,08|302,08|
|image/jpeg|967|65.51%|413.302,98|97.19%|5,98|27.138,25|427,41|
|image/png|36|2.44%|6.488,69|1.53%|1,29|1.146,54|180,24|
|image/gif|9|0.61%|16,31|0.00%|0,88|3,60|1,81|
|application/xml|2|0.14%|92,31|0.02%|2,71|89,60|46,16|
|application/json|2|0.14%|90,75|0.02%|1,97|88,79|45,38|
|application/javascript|2|0.14%|19,29|0.00%|1,82|17,46|9,64|
|sonstige|54|3.66%|2.345,54|0.55%|0,06|2.068,16|43,44|
|**Total**|1.476|100.00%|425.235,50|100.00%||||

[Xenu]: http://home.snafu.de/tilman/xenulink.html "Find broken links on web sites"