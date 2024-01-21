---
tags:
- networking
- wireless
- security
title: Wireless Encryption Standards
---

#### Wireless Equivalent Privacy (WEP)
Outdated wireless security standard  
Was meant to match wired LAN security for wireless devices  

WEP uses a fixed encryption key for all devices on the same network  
Encryption Key: 64-bit (40-bit key + 24-bit IV) or 128-bit (104-bit key + 24-bit IV)

Used RC4 cipher for generating Initialization Vector (IV)  
IV is sent in clear text over the air    
Susceptible to passive network eavesdropping and replay attacks

#### Wi-Fi Protected Access (WPA)
Was used as an temporary solution will a replacement for WEP was created  

Used RC4 cipher but the Initialization Vector (IV) was encrypted  
Used TKIP (Temporal Key Integrity Protocol) to dynamically change the encryption key
Insufficient data integrity checks in TKIP made it susceptible to attacks

#### WAP2 (Wi-Fi Protected Access 2)
Also called as IEEE 802.11i  

Used AES (Advanced Encryption Standard) in place of RC4  
Used CCMP in place of TKIP for encryption  
Utilized Message Integrity Code (MIC) for integrity checking   
Vulnerable to KRACK attack. Most vendors released patches to fix the issue

**CCMP**: Counter Mode with Cipher Block Chaining Message Authentication Code Protocol  
**KRACK**: Key Reinstallation Attack

#### Wi-Fi Protected Access 3 (WPA3)
Uses AES for Encryption  
Uses SAE to security handle the initial key exchange to address KRACK vulnerability  

SAE established protocols to guard against offline dictionary attacks  
OWE encrypts data even when no password is configured to connect to the WAP  
OWE improves user privacy by guarding against eavesdropping attacks  

The old AES algorithm was replaced by AES GCMP  
Support 128-bit key for personal networks and 192-bit key for enterprise networks  
Management Protection Frames are used to protect against key recovery attacks

**SAE**: Simultaneous Authentication of Equals  
**OWE**: Enhanced Open/Opportunistic Wireless Encryption  
**GCMP**: Galois Counter Mode Protocol








