---
title: Ethernet Cable Categories
tags: [networking, cables, ethernet, concept]
---

### Coaxial Cable

| Category | Standard | Distance   |
|:-------- |:-------- |:---------- |
| ThinNet  | 10Base2  | 200 meters |
| ThickNet | 10Base5  | 500 meters |

### Twisted Pair Cable

It uses "xx Base T" naming convention  
xx: Speed of the cable  
Base: Baseband communication (Single Frequency)  
T: Twisted Pair

| Category | Common Name         | Standard   | Bandwidth          | Distance   |
|:-------- | ------------------- |:---------- |:------------------ | ---------- |
| CAT 3    | Ethernet            | 10Base-T   | 10 Mbps            | 100 meters |
| CAT 5    | Fast Ethernet       | 100Base-TX | 100 Mbps           | 100 meters |
| CAT 5e   | Gigabit Ethernet    | 1000Base-T | 1000 Mbps (1 Gbps) | 100 meters |
| CAT 6    | Gigabit Ethernet    | 1000Base-T | 1 Gbps             | 100 meters |
| CAT 6    | 10 Gigabit Ethernet | 10GBase-T  | 10 Gbps            | 55 meters  |
| CAT 6a   | 10 Gigabit Ethernet | 10GBase-T  | 10 Gbps            | 100 meters |
| CAT 7    | 10 Gigabit Ethernet | 10GBase-T  | 10 Gbps            | 100 meters |
| CAT 8    | 40 Gigabit Ethernet | 40GBase-T  | 40 Gbps            | 30 meters  |

Only CAT 5 cables use TX to represent Twisted Pair Cable  
CAT 7 was released before CAT 6a and it supported using RJ-45 or Tera Connector

### Fiber Optic Cable

| Standard    | Mode    | Bandwidth | Distance         |
|:----------- |:------- |:--------- |:---------------- |
| 100Base-FX  | MMF     | 100 Mbps  | 2 kms            |
| 100Base-SX  | MMF     | 100 Mbps  | 300 meters       |
| 1000Base-SX | MMF     | 1000 Mbps | 220-550 meters   |
| 1000Base-LX | SMF/MMF | 1000 Mbps | 5 kms/550 meters |
| 10GBase-SR  | MMF     | 10 Gbps   | 400 meters       |
| 10GBase-LR  | SMF     | 10 Gbps   | 10 kms           | 

100Base-FX uses wavelength in the range used by SMF which allows it to transfer data for such large distances  
100Base-SX uses a shorter wavelength and LED as its light source making it cheaper to manufacture  
1000Base-SX uses nanometer near infrared wavelengths  
1000Base-LX uses long range lasers as its light source  
SR stands for Short Reach  
LR stands for Long Reach  