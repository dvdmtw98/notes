---
title: xrandr Command
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:56:49 -0600
---

````shell
# View all available options for all monitors
xrandr -q 

# List all monitors
xrandr --listmonitors 

# Change Resolution of Monitor
xrandr --output <monitor-name> --mode <resolution>

# Disable a Monitor
xrandr --output <monitor-name> --off 
````

**Flags**  
`--rate refresh-rate`: Specify Refresh Rate for Monitor  
`--brightness 0.25`: Change Brightness of Display (Range : 0 to 1)  
`--primary`: Specify Primary Monitor  
`--left-of <monitor-name>`: Specify Position of Secondary Monitor wrt Main Monitor  
`--right-of <monitor-name>`: Specify Position of Secondary Monitor wrt Main Monitor
