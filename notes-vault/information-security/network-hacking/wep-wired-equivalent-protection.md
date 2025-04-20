---
title: WEP (Wired Equivalent Protection)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Uses RC4 for Encryption. Old Algorithm

#### Working  
Each packet send over the air is encrypted using an Key Stream  
An Random IV is used to generate the key stream. The IV is 24 bits only  
IV(24 bit) + Password = Key Stream (Used to Encrypt Data)  
Along with each packet the IV is send in plain text to the router

#### Issues
IV is 24 bits only. The IV is sent in plain text  
On an busy network the IV will repeat after sometime due to its small size
