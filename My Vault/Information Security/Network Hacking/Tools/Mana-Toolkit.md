---
title: Mana-Toolkit
---

Mana-Toolkit is used to create an Fake Access Point. If the target connected to our access point then we automatically become the MITM  
[GitHub - sensepost/berate_ap: Script for orchestrating mana rogue WiFi Access Points.](https://github.com/sensepost/berate_ap) (Alternative)

#### Fake Access Point Requirement

Any interface with access to internet  
An wireless adapter that supports Access Point (AP) mode

#### Mana-Toolkit Scripts

start-noupstream.sh : Start Fake AP with no internet  
start-nat-simple.sh : Starts Fake AP with internet access (Recommended)  
start-nat-full.sh : Start Fake AP with internet, sniff packets and bypass HTTPS

#### Mana Configuration

1. /etc/mana-toolkit/hostpd-mana.conf  
   interface : Fake AP Interface  
   ssid : Fake AP Name

2. /usr/share/mana-toolkit/run-mana/start-nat-simple.sh  
   upstream : Interface with Internet Access  
   phy : Fake AP Interface

If we test the connection from the Host machine which is a VM the connection will not work