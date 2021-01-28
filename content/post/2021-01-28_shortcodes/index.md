+++
tags        = ["2021", "readcode", "progress", "meter"]
description = "Progress and Meters with shortcodes"
title       = "Progress and Meters"
date        = "2021-01-25T09:20:32+01:00"
draft       = false
+++
## Progress Bar

finished {{< progress 30 >}} 

## Meters

active 10 {{< meter value=10 low=25 opt=50 high=75 >}}

active 50 {{< meter value=50 low=25 opt=50 high=75 >}}

active 90 {{< meter value=90 low=25 opt=50 high=75 >}}

### how to write in markdown
{{< readcode >}}

## readcode shortcodes

Without parameter it will insert the markdown file itself

### insert home page markdown
{{< readcode "_index.md" >}}

### Test to insert itself 
{{< readcode >}}

