---
tags:
- security
- data
- availability
title: Data Redundancy
---

### [RAID](../../operating-system/others/raid.md)
Combine multiple physical storage devices into a recognized single logical storage device

#### Failure-resistant
Redundant storage to withstand hardware malfunctions without data loss  
e.g. RAID 1, RAID 10 (Mirroring)

#### Fault-tolerant
Uninterrupted operation during hardware failures  
e.g. RAID 1, 5, 6 and 10 (Mirroring or Stripping)

#### Disaster-tolerant
Protects data from catastrophic events  
e.g. RAID 1 and 10

---

### Redundancy Site Consideration

#### Hot Sites
A fully equipped backup facility ready to swiftly take over in case of a primary site failure  
Used for missing-critical functions

#### Warm Site
A partially equipped backup site that can become operational within days of a primary site disruption

#### Cold Site
A site with no immediate equipment or infrastructure but can be transformed into a functional backup facility

#### Mobile Site
A versatile site that utilizes independent and portable units like trailers or tents to deliver recovery capabilities  
Any be any of any type: Hot, Warm, Cold

#### Virtual Site
Utilizes cloud-based environments and offers highly flexible approach to redundancy
