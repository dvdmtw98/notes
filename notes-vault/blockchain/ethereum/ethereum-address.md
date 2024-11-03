---
title: Ethereum Address
tags:
  - blockchain
  - cryptography
date: 2024-10-27 21:54:20 -0500
updated: 2024-10-27 23:32:19 -0500
---

Ethereum uses Elliptical Curve Cryptography  

### Private Key
A number chosen at random acts as the private key  
This key is used to create signatures and prove ownership of funds  
Ethereum uses the OSes random number generator to generate entropy  

Usually a a very large number is generated and passed to a 256-bit hash function  
If the result is within the acceptable range it can be used as private key  

### Public Key
The public key is a point on the elliptical curve (has a x and y co-ordinate)  
$K = k * G$  
k = Private Key, G = Generator Point, K = Public Key  
Elliptical curve arithmetic does not have division, this operation cannot be reversed 

Ethereum uses secp256k1 the same elliptical curve used by Bitcoin  
[[bitcoin-address#Elliptical Curve Cryptography (ECC)|Elliptical Curve Cryptography (ECC)]]  

Ethereum only uses uncompressed public keys (prefixed with 04)  
Public Key = 04 + x-coordinate (32 bytes) + y-coordinate (32 bytes)  

### Ethereum Address
They are derived from the public key using Keccak-256 hash function  
The last 20 bytes of the output becomes the address  
The addresses will generally be prefixed with 0x (hex)  

#### Inter Exchange Client Address Protocol (ICAP)
Is an encoding scheme that is compatible with IBAN (used by banks)  
IBAN is 34 alphanumeric characters (country code, checksum & bank identifier)  
ICAP uses (XE, 2 character checksum & 3 possible variables of account identifier)  
This format is only supported by a few wallets  

**Direct**  
Uses base-36, 30 alphanumeric characters  
Represent 155 least significant bits of the Ethereum address  
Only works for addresses that start with 0s as (Ethereum address is 160 bits) 
The result is 33 characters long  

**Basic**  
Similar to Direct encoding but is 31 characters long  
Not compatible with IBAN validation  
The result is 35 characters long  

**Indirect**  
Uses identifier that resolves to Ethereum address through a name registry provider  
16 characters long. Consists of asset identifier, name server and 9 character name  
The result is 20 characters long  

#### Hex Encoding with Checksum (EIP-55)
In this encoding some of the characters in the hex address are represent in capital  
The capital characters act as checksum for the address  

The hash of the hex address is calculated  
Capitalize the letter if the hex digit in the hash is greater than 8  
To verify the hash of the lowercase of the address is calculated and checked  
