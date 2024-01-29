---
tags:
  - networking
  - cable
title: Fiber Optic Cable
date: 2024-01-28 14:15:56 -0600
---

Uses LED or laser to transmit data in the form of light through a thin glass fiber  
Mainly used for [[wide-area-network-wan|Wide Area Network (WAN)]]  
High Bandwidth and Long Distances, Immune to EMI, Doesn't Emanate Signals

#### Cable Types

**Single-Mode Fiber (SMF)**  
Has a small core size (8.3-10µ)  
Can only transmit single signal at a time  
Can be used for very longer distances (40 kms)  
More expense compared to MMF  
SMFs generally have yellow colored sheath

**Multi Mode Fiber (MMF)**  
Has larger core size (50-100µ)  
Can carry multiple signals at a time  
Used for short distances (Up to 2 kms)  
MMFs generally have a aquamarine blue/ orange sheath

#### Cable Connectors

SC (Subscriber Connector)  
ST (Straight Tip) Connector  
LC (Lucent Connector)  
MTRJ (Mechanical Transfer Registered Jack) Connector

For SC, ST and LC separate lines are required for sending and receiving connection  
ST connector is connected like BNC (Stick and Twist)  
LC is generally found as a pair (Sender and Receiver joined together)

**Angle Physical Contact (APC) Connector**  
The cable is connected with the connector at a 8 degree incline  
This provides better signal with less noise  
Used for by SC Connectors
Green connector denotes APC

**Ultra Physical Contact (UPC) Connector**  
The light will be reflected straight back to the source  
Causes a bit of signal loss  
MTRJ mostly uses UPC  
Blue connector denotes UPC

#### Wavelength Division Multiplexing (WDM)

Allows to transmit multiple optical signals over a single cable by multiplexing the signals to wavelengths of the source laser  
Using WDM we can send and receive data over the same fiber cable  

**Coarse WDM (CWDM)**  
Supports up to 18 channels  
Each wavelength is separated by 20 nm  
Supports up to 10 Gbps (Ethernet) and up to 16 Gbps (Fiber)  
Used for short distances (up to 70 kms)  
For distances over 40 kms only 8 of the 18 channels can be used

**Dense WDM (DWDM)**  
Supports up to 80 channels  
Each wavelength is separated by 0.8nm  
Supports up to 8 Tbps (100 Gbps/channel)  
Used by infrastructure that forms the internet backbone  
It is also used by ISP running [[synchronous-optical-network-sonet|Synchronous Optical Network (SONET)]] systems
