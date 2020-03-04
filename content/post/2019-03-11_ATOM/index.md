+++
tags        = ["2019", "ATOM"]
description = "atomare Anpassungen mit xml:lang und xml:base"
title       = "XML Attribute"
date        = "2019-03-11T12:33:25+01:00"
draft       = false
series      = []
+++
Der ATOM-Feed basiert auf XML - zwei Änderungen sind sinnvoll.

<pre>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="de-de"  xml:base="https://localhost">
</pre>

- xml:lang gibt jetzt Auskunft über die im Feed verwendete Sprache
- xml:base erlaubt jetzt im Feed reltative URL zu verwendet.  Der Feed wird damit kleiner.

Es ist ersstaunlich, dass immer Verbesserungen möglich sind.


 