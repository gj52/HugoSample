+++
tags        = ["2019", "QR Codes", "CSS"]
description = "Seiten mit QR Code drucken"
title       = "QR-Codes"
date        = "2019-05-07T13:31:20+02:00"
draft       = false
series      = []
+++
{{< div class="fr-l pl3-l pt3 dn db-l" >}}
![](images/qrcode.png "Sample QR Code")
{{< /div >}}

Auf ausgedruckten HTML-Seiten ist je nach Einstellung im Browser der URL enthalten oder auch nicht. Abhilfe schafft ein QR-Code im Ausdruck. Dieser wird über CSS **media=print** eingeblendet. 

~~Mit einem kleinem, alten aber feinem [Java-Script][JS] können [QR-Codes][QR] ausgedruckt werden, so dass der URL wieder schnell und fehlerfrei eingelesen werden kann.
Ein Danke an [Jerome Etienne][JE] für das Script.~~

{{< div class="dn-l" >}}
![](images/qrcode.png "Sample QR Code")
{{< /div >}}

---

Hugo Version 141.0 => switching to cloned internal images.QR function!

[QR]: https://de.wikipedia.org/wiki/QR-Code "QR-Code"
[JS]: https://github.com/jeromeetienne/jquery-qrcode  "Java Script"
[JE]: https://github.com/jeromeetienne "Jerome Etienne"