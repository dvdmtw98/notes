---
tags:
- security
- data
- redundancy
title: Data Backup
---

The process of creating duplicate copies of digital information to protect against data loss, corruption or unavailability

#### Location

##### Onsite Backup
##### Offsite Backup
Storage of duplicate copies of data at a geographically separate location from the primary data source to provide protection against physical disasters and to ensure data continuity

#### Frequency
Consult the [Recovery Point Objective (RPO)](risk-management/risk-identification.md#Recovery%20Point%20Objective%20(RPO)) of the organization to confirm backup preserves necessary data amount  
Data Change Frequency also needs to be considered

---

#### [Encryption](cryptography/cryptographic-solutions/encryption.md)

##### [Data at Rest](security-controls/data-protection/data-states-and-types.md#Data%20at%20Rest) Encryption
##### [Data in Transit](security-controls/data-protection/data-states-and-types.md#Data%20in%20Transit/%20Data%20in%20Motion) Encryption

---

#### Snapshots
Point-in-time copies of the data that capture a consistent state that is essentially a frozen in time copy of the data

#### Recovery
Used to regain access to the data in the event of a data loss or system failure

#### Replication
Making real-time copies of the data

#### Journaling
Maintaining a meticulous record of every change made to an organizations data over time

