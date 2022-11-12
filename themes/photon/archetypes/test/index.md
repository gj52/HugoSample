+++
date        = "{{ (.Date |time).Format "2006-01-02T15:04:05Z07:00" }}"
description = "{{ replace .TranslationBaseName "-" " " | title }}"
title       = "{{ replace .TranslationBaseName "-" " " | title }}"
draft       = false
+++
## H2