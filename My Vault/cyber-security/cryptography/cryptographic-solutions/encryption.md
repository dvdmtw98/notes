---
tags:
- security
- cryptography
- concept
title: Encryption
---

## Key-based Classification

### Symmetric Algorithm (Private Key)
Algorithm in which both sender and the receiver must know the same shared secret  
Same key is used to encrypt and decrypt data  
Non-reputation not guaranteed (Same key can be used by multiple users)  
100-1000x times faster than a similar size asymmetric encryption algorithm
Need a secure way to distribute the private key with other parties 

#### Data Encryption Standard (DES)
Algorithm which breaks the input into 64-bit blocks and uses 16 rounds of transposition and substitution to create ciphertext  
Has an effective key strength of only 56-bits (8-bits are used for parity)  

#### Triple DES (3DES)
Algorithm which uses three separate symmetric keys to encrypt, decrypt then encrypt the plaintext into ciphertext in order to increase the strength of DES  
Three separate keys are used by the algorithm  

Encrypt data using 1st key then decrypt data using 2nd key (This cases the data to become even more scrambled) then encrypt the result using the 3rd key  
We end up with a algorithm that has a key length of 112-bits

#### International Data Encryption Algorithm (IDEA)
Symmetric block cipher which uses 64-bit blocks to encrypt the data  
Has a key length of 128-bits

#### Advanced Encryption Standard (AES)
Symmetric block cipher that uses 128-bit, 192-bit, 256-bit blocks and a matching encryption key size to encrypt plaintext into ciphertext  
Used by US Government to protect sensitive but unclassified information

#### Blowfish
Symmetric block cipher that uses 64-bit blocks and a variable length (32-bit 448-bit) encryption key to encrypt plaintext into ciphertext

#### Twofish
Provides the ability to use 128-bit blocks in its encryption algorithm and uses 128-bit, 192-bit or 256-bit encryption keys

#### RC Cipher Suite
Six algorithms created by Ron Rivest under the name RC (Rivest Cipher)  
RC1 (Never Released), RC2 (Weak), RC3 (Cracked before release)  

**RC4**: Stream cipher. Uses a variable key size from 40-bits to 2048-bits used in SSL and WEP
**RC5**: Block cipher that uses key sizes up to 2048-bits  
**RC6**: Block cipher that was introduced as replacement for DES
### Asymmetric Algorithm (Public Key)
Uses two different keys (One for encryption and the other for decryption)  
e.g. Diffie-Hellman, RSA, Elliptic Curve Cryptography (ECC)  
Key distribution is not a problem  

**Confidentiality**  
Bob sends message to Alice  
Bob encrypts the message using the Alice's public key  
The message can only be decrypted using Alice's private key  
Once Bob encrypts the message using Alice's public key even he cannot decrypt it  

**Non-Repudiation**  
Bob encrypts the message using his private key  
Anyone in the world can decrypt the message since they have the public key  
In this approach there is no confidentiality  
It provides non-repudiation since no other person has Bob's private key    

Allows to achieve Confidentiality, Non-Repudiation, Integrity and Authentication  
For the message being sent an Hash Digest is generated (Integrity)  
The Hash Digest is encrypted using the senders private key (Non-Repudiation)  
The entire message is encrypted using the recipient's public key (Confidentiality)

#### Diffie-Hellman
Used to conduct key exchanges and secure key distribution over an unsecure network  
Commonly used in the setup of encrypted tunnels (e.g. VPN, SSH)  
Suspectable to Man-in-the-Middle (MitM) attacks

#### RSA (Rivest, Shamir and Adleman)
Relies on the mathematical difficulty of factoring large prime numbers  
Used for key exchange, digital signature and encryption  
Supports key sizes between 1024-bits and 4096-bits  
[RSA Algorithm](../algorithm/rsa-algorithm.md)

#### Elliptic Curve Cryptography (ECC)
Based on the algebraic structure of elliptical curves over finite fields to define its keys  
Heavily used in mobile devices (Low power devices)  
ECC with a 256-bit key is just as secure as RSA with a 2048-bit key

**Elliptic Curve Diffie-Hellman (ECDH)**  
ECC version of Diffie-Hellman key exchange  

**Elliptic Curve Diffie-Hellman Ephemeral (ECDHE)**  
Uses a different key for each portion of the key establishment process inside Diffie-Hellman key exchange

**Elliptic Curve Digital Signature Algorithm (ECDSA)**  
Used as a public key encryption algorithm by the US Government in their digital signature

### Hybrid Implementation
Utilizes asymmetric encryption to securely transfer a private key that can be used with symmetric encryption

---

## Cipher-based Classification

### Stream Cipher
Utilizes a keystream generator to encrypt data bit by bit using a mathematical XOR function to create the ciphertext  
Useful for encryption audio and video streams  
Tend to symmetric algorithms  
Most stream cipher tend to be implemented using hardware

### Block Cipher
Breaks the input into fixed-length blocks and perform the encryption on each block  
Easier to setup and implement. Less susceptible to security problems  
Can be easily implemented using software

---

## Public Key Infrastructure (PKI)
System the creates the asymmetrical key pairs that are used for encryption and decryption

### Certificate Authority
Issues digital certificates and keeps the level of trust between all of the certificate authorities around the world

### Key Escrow
Process where cryptographic keys are stored in a secure, third-party location