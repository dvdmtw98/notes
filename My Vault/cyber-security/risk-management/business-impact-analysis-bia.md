---
title: Business Impact Analysis (BIA)
tags:
  - security
  - governance
  - risk
  - management
---

Process that involves evaluating the potential effects of disruption to an organization's business functions and processes

#### Recovery Point Objective (RPO)
The acceptable amount of data that can not be recovered  
Point in time at which data must be restored to continue normal operation

#### Maximum Tolerable Downtime (MTD)
The time to rebuild the system and configure it for reinsertion into production  
Measures how long the system can be down    
MTD >= RTO + WRT

##### Recovery Time Objective (RTO)
The amount of time to restore the system (hardware)  
Target time in which a business must be restored to its normal operation to avoid negative consequences

##### Work Recovery Time (WRT)
How much time is required to configure a recovered system (software)  

#### Mean Time Between Failures (MTBF)
The average time between failures

#### Mean Time to Repair (MTTR)
The average time required to repair a failed component or system  
MTTR should be within the MTD range

#### Minimum Operating Requirement (MOR)
The minimum infrastructure required for our critical systems to function
