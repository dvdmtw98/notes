---
tags:
  - redundancy
  - storage
title: RAID
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### RAID

**RAID**: Redundant Array of Independent Disks  
Combine multiple physical storage devices into a recognized single logical storage device
Data is copied or spread across multiple disks  

#### RAID 0: Stripping

![[raid-0.jpg|300]]

Data is stripped across multiple disks  
Not Fault Tolerant (No Data Redundancy)  
Advantage is speed

#### RAID 1: Mirroring

![[raid-1.gif|400]]

Fault Tolerant  
Data is copied onto a 2nd drive  
Cannot be used on more than 2 disks

#### RAID 5: Striping with Parity

![[raid-5.jpg|480]]

Requires 3 or more disk  
Commonly used Setup  
Data is stripped evenly across multiple disk along with parity  
Parity is used to rebuild disk in case of failure  
Can handle a single disk failure  
The equivalent of an entire disk is used to store parity

#### RAID 6: Stripping with Double Parity

![[raid-6.png|620]]

Requires 4 or more disks  
Data and parity is evenly spread across the disks  
Unlike RAID 5 the parity is spread twice on all disks  
Can handle 2 disks failure  
The equivalent of 2 entire disk is used to store parity  
RAID 6 writes data slower than RAID 5 become it has to write 2 parity bits

#### RAID 10: Mirroring & Stripping

![[raid-10.png|520]]

Requires even disks (min 4 disks)  
Set of 2 disks are mirrored using RAID 1  
And both sets are stripped using RAID 0  
Provides Speed of RAID 0 and Fault Tolerance of RAID 1  
Only 50% of the storage can be used to actually store data

---

### Tolerance Types

#### Failure-resistant
Redundant storage to withstand hardware malfunctions without data loss  
e.g. RAID 1, RAID 10 (Mirroring)

#### Fault-tolerant
Uninterrupted operation during hardware failures  
e.g. RAID 1, 5, 6 and 10 (Mirroring or Stripping)

#### Disaster-tolerant
Protects data from catastrophic events  
e.g. RAID 1 and 10
