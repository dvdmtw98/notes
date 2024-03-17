---
tags:
  - os
  - linux
title: Linux Memory Management
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Single Address Space

Simple systems use this approach  
Memory is mapped to one part and Peripherals are mapped to another part  
The processes and OS all share the same memory space  
No memory protection in place

### Virtual Memory

Makes use of an address mapping  
Virtual Addresses are converted to Physical Addresses

* Virtual Address - Physical RAM
* Virtual Address - Hardware Devices
