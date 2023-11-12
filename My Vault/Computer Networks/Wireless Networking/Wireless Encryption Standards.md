---
tags: [networking, wireless, security]
---

1. **<u>WEP (Wireless Equivalent Privacy)</u>**  
   Used 24bit RC4 Cipher. Initialization Vector (IV) which is sent in clear text  
   Susceptible to passive network eavesdropping and replay attacks

2. **<u>WPA (Wi-Fi Protected Access)</u>**  
   Was used as an temporary solution to fix WEP  
   Uses RC4 cipher. The Initialization Vector (IV) is an encrypted hash  
   Uses TKIP (Temporal Key Integrity Protocol) to dynamically change the encryption key

3. **<u>WPA2 (Wi-Fi Protected Access 2)</u>**  
   Also called as IEEE 802.11i  
   Uses AES (Advanced Encryption Standard) in place of RC4  
   CCMP (Counter Mode with Cipher Block Chaining Message Authentication Code Protocol) in place of TKIP  
   Vulnerable to KRACK (Key Reinstallation Attack) but most vendors released patches to fix the issue

4. **<u>WPA3 (Wi-Fi Protected Access 3)</u>**  
   Makes use of SAE (Simultaneous Authentication of Equals) to security handle the initial key exchange to address KRACK vulnerability  
   It was found to be still vulnerable to KRACK. Patches where released to address the issue
