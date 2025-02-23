---
title: Copper Cable
tags:
  - networking
  - cable
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-30 22:19:36 -0600
---

### Coaxial Cable

Cable contains a central copper wire that caries all the data  
Braided metal shielding is used to prevent electromagnetic interference  

#### Cable Types

##### RG-6
Used for Cable TV, Satellite TV and Broadband internet  
Supports higher frequency transmission

##### RG-59
Used for CCTV, video projectors and other lower bandwidth analog devices  
It is older than RG 6 and was initially used for connecting TVs

#### Cable Connectors

##### F-Type Connector
Most modern coaxial cables use this connector which needs to be screwed on into the jack  
Found of Cable TV and Modems  

##### BNC Connector
BNC: Bayonet Neill–Concelman  
Was used extensively by old Networking equipment's  
These connectors needed to be pushed in and turned half way to lock

#### Twinaxial Cable

Twinaxial Cable is a newer version of coaxial cables which uses two inner conductors to carry the data instead of just one  
They are very short range but provides high speed connection between devices

---

### Serial Cable

Straight copper cables that are housed inside a single plastic jacket  
Normally terminated with a DB-9 or DB-25 connector  
They are also called as RS232 cables

---

### Twisted Pair Cable

The common cable that is used for network connections  
Four Twisted Pair (8 wires) with RJ-45 Connector  
Twisted to reduce interference (Crosswalk, EMI)  
Both types of Twisted Pair Cables can carry information for about 100 meters

CAT short for Category  
Higher number means more twists and supports faster speeds  
More twists also provides better protection from EMI  
e.g. CAT 3, CAT 5, CAT 5e, CAT 6, CAT 6a, CAT 7, CAT 8  
[[ethernet-standard|Ethernet Standard]]

#### Cable Types

##### UTP (Unshielded Twisted Pair)
Cheaper and is used for most LANs  
Unshielded cable leak signals that can be used to reconstruct the data

##### STP (Shielded Twisted Pair) 
Contains mental shielding to prevent EMI and crosstalk  
Costlier than UTP cables

#### Cable Connectors

RJ (Registered Jack) is the standard which specifies the standard that a device has to meet to connect to the phone or data network

##### RJ-45
Most commonly used connector for Ethernet based networks  
Traditionally out of the 8 wires only 4 was used  
Other 4 is reserved for future use (But can be used for features like PoE)  
For Gigabit and higher speed networks all 8 wires are used for transmitting data

##### RJ-11
Consists of 6 wires/ pins of when only 2 pins are used  
Normally used by landline phones  
Of the 2 wires one is reserved for the ring the other is used for the signal  
If we use DSL for broadband or have a VoIP system hooked up to an analog phone then we would most likely come across this connector

#### Cabling Standards
TIA/EIA-568A: Green Green Orange Blue Blue Orange Brown Brown (Striped Solid)  
TIA/EIA-568B: Orange Orange Green Blue Blue Green Brown Brown (Striped Solid)

##### Straight Through/ Patch Cable
Used for network wiring that is done inside the house  
Connects DTE device to DCE device   
Uses 568B standard on both the sides  

DTE (Data Terminal Equipment): Laptops, Servers, Routers (Endpoint Devices)  
DCE (Data Communication Equipment): Switch, Modem, Hub, Bridges

##### Crossover Cable
Different standards on both the ends  
Used to connect DTE to DTE or DCE to DCE

> [!IMPORTANT]
> - For CompTIA Network+ remember that for connecting a Switch to another Switch a Crossover Cable is required
> - In particle this is not always true has some switches support MDIX (Medium Dependent Interface Crossover) which allows to electronically simulate crossover cable using a straight through cable

#### Plenum Cable

A special coating used on STP and UTP cables which makes them fire-retardant and also reduces the fumes that are released if the cable catches fire  
Used for cabling in locations that we cannot see/ poses a safely hazard
