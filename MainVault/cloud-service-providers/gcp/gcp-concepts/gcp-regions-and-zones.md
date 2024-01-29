---
tags:
  - gcp
  - cloud
title: GCP Regions & Zones
date: 2024-01-28 14:15:56 -0600
---

### Regions
Regions are independent geographical locations that consists of zones  
GCP has 25+ regions

### Points of Presence (PoP)
Intermediate location between GCP regions and end users  
These locations can be a third party data center or collection of hardware

**Edge PoP**  
A location where the user can quickly enter (ingress) the GCP network for faster access to resources

**CDN PoP**  
A location to serve (egress) cached websites, files, assets so they load very fast for end user

**Cloud Media Edge**  
A location specialized for the delivery of media like video content

### Zone
It is a physical location made up of one or more datacenter  
A region will generally have 3 Zones  
Datacenters in zones are isolated from each other  
We can deploy a service in multiple zones to achieve higher fault tolerance

**Zonal Resource**  
A service that belongs to a single zone

**Regional Resource**  
Resource that resides in multiple zones in a single region

**Multi-regional Resource**  
Resource resides across zones present in multiple regions

**Global Resource**  
Resource resides globally and resources and zones are abstracted away

**Internal Services**  
Foundational services that are used by many other services  
We cannot interact with these resources directly
