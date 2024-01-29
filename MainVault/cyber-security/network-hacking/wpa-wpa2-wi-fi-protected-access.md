---
title: WPA - WPA2 (Wi-Fi Protected Access)
date: 2024-01-28 14:15:56 -0600
---

Each packet is encrypted using an unique temporary key  
WPA uses TKIP for encryption and WPA2 uses CCMP for encryption

#### WPS Enabled

* WPS: Wi-Fi Protected Access
* Uses 8 digit pin. Can be easily guessed. Allow client to connect without using Password.
* Only works if PBA (Push Button Auth) is not enabled on device. If PBA is enabled then we can only connect to network once the button is pushed

#### WPS Disabled

* Only way to crack WPA without WPS is by capturing the handshake packet (Send when new device connects to AP)
* The Handshake does not have any useful information but it contains that can be used to verify password
* MIC (Message Integrity Code) present in the handshake packet is used to verify Password
* MIC is calculated by using all the data present in handshake. We have to use "Brute Force" approach to try and crack the Password
* Aircrack-ng converts passwords into MIC and compares then with the MIC in Handshake MIC to guess Passwords
