---
tags:
- security
- data
- cryptography
title: Hashing
---

### Hashing
One-way cryptographic function that takes an input and produces a unique message digest as its output  
Hash Digest are always of the same length

#### MD5
Creates a 128-bit hash value that is unique to the input file

#### SHA Family
Secure Hashing Algorithm  
Each version of SHA performs a different rounds of computations to create digest 

**SHA-1**: Creates a 160-bit hash digest  
**SHA-2**: Family of longer hash digests (SHA-224, SHA-256, SHA-348, SHA-512)  
**SHA-3**: Hash Digest that are between 224-bits and 512-bits  

#### RIPEMD
RACE Integrity Primitive Evaluation Message Digest  
Comes in 160-bit, 256-bit and 320-bit versions  
**RIPEMD-160**: Open-source. Was created as a competitor to SHA

#### HMAC
Hash-based Message Authentication Code  
Used to check the integrity of a message and provides some level of assurance that its authenticity is real  
When used its paired with other algorithms (HMAC-MD5, HMAC-SHA1, HMAC-SHA256) 

---

### Digital Signature
A hash of the message to be send that is signed using the senders private key

For creating Digital Signature's the following algorithms are used:  
Digital Security Algorithm (DSA)  
Rivest-Shamir-Adleman Cipher (RSA)  
Elliptic Curve Cryptography version of DSA or SHA

#### Digital Security Standard (DSS)
Created by the US Government  
Uses a 160-bit message digest created by DSA

---

### Hashing Attacks

#### Pass the Hash Attack
Allows attacker to authenticate to a remote server or service by using the underlying hash of a user's password instead of the associated plaintext password  

#### Birthday Attack
Attacker is able to send two different messages through a hash algorithm and it results in the same identical hash digest (Collision)  
Named after "Birthday Paradox"

---

### Increasing Hash Security

#### Key Stretching
Technique that is used to mitigate a weaker key by increasing the time needed to crack it  

#### Salting
Adding random data into plaintext before using a hashing function  
Helps protect against password cracking techniques  

#### Nonce
Stands for "Number used Once"  
Unique, random number that is added to password-based authentication process
