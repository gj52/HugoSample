+++
categories  = ["Post"]
tags        = ["{{ now.Format "2006"}}"]
description = "{{ replace .TranslationBaseName "-" " " | title }}"
title       = "{{ replace .TranslationBaseName "-" " " | title }}"
date        = "{{ (.Date |time).Format "2006-01-02T15:04:05Z07:00" }}"
expirydate  = "{{ ((.Date | time ).AddDate 2 0 0).Format "2006-01-02T15:04:05Z07:00"}}"
draft       = false
series      = []
+++
## H2
**Insert Lead paragraph here.**

<!--more-->
