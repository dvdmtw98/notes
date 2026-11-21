---
title: Authentication Factors
tags:
  - security
  - protect
  - access
date: 2024-01-28 14:15:56 -0600
updated: 2026-11-16 23:24:35 +0530
---

### Authentication Factors

#### Knowledge-based Factor
Also known as <u>Type 1</u> or "<u>Something you Know</u>" factor  
Least Security, Cheapest Solution  
Can get compromised through Phishing, credential stuffing, password spraying, data breaches, and brute force attacks.  
e.g. Password, PIN  

#### Possession-based Factor
Also known as <u>Type 2</u> or "<u>Something you Have</u>" factor  
e.g. Smart Card, Hardware Token (Key Fob), Software Token (OTP)  

#### Inheritance-based Factor
Also known as <u>Type 3</u> or "<u>Something you Are</u>" factor  
High security, High Cost, Error Prone.  
Once compromised it cannot be replaced.  
Lower CER (Crossover Error Rate) means more accurate biometrics.  

e.g. Biometrics (Fingerprints, Facial, Iris Scan), Behavioral (Typing Style, Walking Style, Signature, Voice Recognition)

#### Location-based Factor
Also known as <u>Type 4</u> or "<u>Somewhere you Are</u>" factor  
e.g. IP Address Verification, GPS Tracking

#### Behavior-based Factor
Also known as <u>Type 5</u> or "<u>Something you Do</u>" factor  
e.g. Keystroke Pattern, Mouse Movement

### Authentication Types

#### Multi-Factor Authentication
A security system that requires more than one method of authentication from <u>independent categories of credentials</u> to certify the user's identity.  
e.g. Authenticator (TOTP/ HOTP), YubiKeys, Push Notifications, SMS.  

#### Passwordless Authentication
Eliminates the password entirely and uses stronger a factors in its place.  

**FIDO2**  
Uses public-key cryptography where the private key never leaves the users device.  
Passkeys allow users to create and access online accounts without needing to input a password.  

#### Certificate-based Authentication
Uses digital certificates, which are cryptographic documents that bind a public key to an identity, to prove who you are.  
Used in government/ military setting, for machine-to-machine authentication and Mutual TLS. 

[[federation-sso-protocols|Federation (SSO) Protocols]]
