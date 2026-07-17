+++
categories  = ["Post"]
tags        = ["2026","Hugo"]
description = "extended table renderer"
title       = "Table Hook Renderer"
date        = "2026-07-17T14:10:28+01:00"
#expirydate  = "2028-07-17T14:10:28+01:00"
#draft       = false
series      = ["Hugo", "Tricks"]

[params]
latex       = false
+++
## new table renderer 

|Header1|Header2|Heade3|Header4|
|-------|-------|------|-------|
|Text|<|Text|Text|
|^|^|Text|Text|
|Text|Text|Text|<|
|Text|<|Text|<|

	| Header1 | Header2 | Headewr3 | Header4 |
	|---------|---------|----------|---------|
	| Text    |    <    |  Text    |  Text   |
	|  ^      |    ^    |  Text    |  Text   |
	| Text    | Text    |  Text    |  <      |
	| Text    |    <    |  Text    |  <      |

Thanks to:  
[Quelle](https://discourse.gohugo.io/t/how-to-merge-cells-in-table-render-hooks/51953/2)  
[GitHub](https://github.com/overlookart/overlookart.github.io/blob/main/themes/overlookart/layouts/_default/_markup/render-table.html)