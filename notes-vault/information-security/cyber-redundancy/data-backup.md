---
title: Data Backup
tags:
  - security
  - data
  - redundancy
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-22 14:22:55 -0600
---

The process of creating duplicate copies of digital information to protect against data loss, corruption or unavailability

#### Location

##### Onsite Backup
##### Offsite Backup
Storage of duplicate copies of data at a geographically separate location from the primary data source to provide protection against physical disasters and to ensure data continuity

#### Frequency
Consult the [[business-impact-analysis-bia#Recovery Point Objective (RPO)|Recovery Point Objective (RPO)]] of the organization to confirm backup preserves necessary data amount  
Data Change Frequency also needs to be considered

---

#### [[encryption|Encryption]]

##### [[data-states-and-types#Data at Rest|Data at Rest]] Encryption
##### [[data-states-and-types#Data in Motion|Data in Motion]] Encryption

---

#### Snapshots
Point-in-time copies of the data that capture a consistent state that is essentially a frozen in time copy of the data

#### Recovery
Used to regain access to the data in the event of a data loss or system failure

#### Replication
Making real-time copies of the data

#### Journaling
Maintaining a meticulous record of every change made to an organizations data over time
