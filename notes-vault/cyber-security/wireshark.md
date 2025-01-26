---
title: Wireshark
tags:
  - security
  - tool
  - networking
date: 1969-12-31 18:00:00 -0600
updated: 2025-01-23 15:04:25 -0600
---

### Dump Cap

CLI utility to capture packets on a network

```bash
# List interfaces
dumpcap -D

# Capture Packets on a Interface
dumpcap -i <interface> -w <filename>
```

A ring buffer limits the amount of size that will be utilized by the capture  
Using `filesize` and `files` we can limit the capture to a fixed number of files with a fixed maximum size  
When additional space is required the initially created (1st file) is overwritten  

```bash
# Capture Packets using Ring Buffer
dumpcap -i <interface> -w <filename> -b filesize:<size-kb> -b files:<count>
```


### WireShark

**Capture Filter**: Only capture packets that match the filter (pre-filtering)  
**Display Filter**: Filter packets after its captured (post-filtering)

Capture and Display filters use different syntax

```bash
# Membership Operator
tcp.port in {80,443}

# Filter by Subnet
ip.addr == 10.10.20.0/24

# Filter out Packets
not (arp or ipv6)

# Exact string match
frame contains "google"
# Regex string match
fame matches "google"
```
