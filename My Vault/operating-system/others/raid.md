---
tags:
- os
- concept
title: RAID
---

Redundant Array of Independent Disks  
Data is copied or spread across multiple disks

---

### RAID 0 : Stripping

![RAID 0|300](images/raid-0.jpg)

Data is stripped across multiple disks  
Not Fault Tolerant (No Data Redundency)  
Advantage is speed

---

### RAID 1 : Mirroring

![RAID 1|400](images/raid-1.gif)

Fault Tolerant  
Data is copied onto a 2nd drive  
Cannot be used on more than 2 disks

---

### RAID 5 : Striping with Parity

![RAID 5|480](images/raid-5.jpg)

Requires 3 or more disk  
Commonly used Setup  
Data is stripped evenly across multiple disk along with parity  
Parity is used to rebuild disk in case of failure  
Can handle a single disk failure  
The equivalent of an entire disk is used to store parity

---

### RAID 6 : Stripping with Double Parity

![RAID 6|620](images/raid-6.png)

Requires 4 or more disks  
Data and parity is evenly spread across the disks  
Unlike RAID 5 the parity is spread twice on all disks  
Can handle 2 disks failure  
The equivalent of 2 entire disk is used to store parity  
RAID 6 writes data slower than RAID 5 become it has to write 2 parity bits

---

### RAID 10 : Mirroring & Stripping

![RAID 10|520](images/raid-10.png)

Requires even disks (min 4 disks)  
Set of 2 disks are mirrored using RAID 1  
And both sets are stripped using RAID 0  
Provides Speed of RAID 0 and Fault Tolerance of RAID 1  
Only 50% of the storage can be used to actually store data

---

[Operating System](../operating-system.md)