---
title: Bitcoin Bech32 Address
tags:
  - cryptography
  - blockchain
date: 2024-09-27 23:32:54 -0500
updated: 2024-09-27 23:33:38 -0500
---

### Beck32 Addresses

A new protocol called “Segregated Witnesses (SegWit)” was introduced in 2017  
This protocol handles the creation of new transactions  

Bitcoin calculates txids using the entire transaction (including signature)  
Changing the signature would also change the calculated txid    
This malleability of transactions could be used by attackers to double-spend coins
Segwit prevents txids from being changed without the consent of spender  

Segwit also brought about larger block sizes (can include more transactions)  
Nested SegWit allows older wallets to use SegWit by nesting SegWit scripts in a P2SH address

Base58check was not used to calculate address for multiple reasons:
- Mixed-case inconvenient to read aloud  
- Can detect errors but not its location
- Mixed-case required extra bits to be used in QR code

Bech32 addresses was selected as the new addressing scheme: 
- Only uses numbers and single case of letters (lowercase preferred)
- Bech32 based P2WPKH addresses is only slightly longer that P2PKH addresses
- Bech32 can detect and locate errors in the address (checksum)
- Bech32 encoded in uppercase used less space in QR codes (special encoding)
- Allows spender wallets to pay to output types that weren’t in use yet

### Bech32 Problems

The guarantee that invalid addresses would be detected only works if the length of the address entered by user matched the length of the original address  
If you add or remove any character the guarantee does not apply  
However it was unlikely that adding or removing characters would result in a valid checksum so this is not a major problem  

However Bach32 addresses that end in ‘p’ use ‘q’ in the 2nd last position  
‘q’ could need to be entered many times and it would usually not be caught by the checksum

This was not a problem in SegWit v0 as SegWit outputs were of fixed size  
22 byte SegWit output utilizes 42 character Bech32 addresses  
34 byte SegWit output utilizes 62 character Bech32 addresses  

The letter ‘q’ would have to be entered 20 times in the 2nd last position of the address for the checksum to fail  
In later revisions of SegWit support for arbitrary size output was added   

### Bech32m

To solve the checksum issue Bech32m was introduced  
A Bech32 and Bech32m address is the same except the last 6 (checksum)

Bech32m addresses start with Human Readable Part (HRP)  
For Bitcoin these are bc (Bitcoin Mainnet) & bt (Bitcoin Testnet)  
The HRP is followed by a seperator (the number 1)  

The bytes after the separator stored the Witness Version  
This section is a single byte. Can have use values from 0 to 16  
It encodes the version of SegWit being used - q (v0), p (v1, Taproot)  

The next 2 to 40 bytes stores the Witness Program  
The Witness Program is the address used for sending the coins  
v0: Program has to be 20 or 32 bytes  
v1: Program has to be 32 bytes  

The last six characters form the checksum  
Utilizes the BCH error correcting code

P2WPKH: Commitment calculated in the same way as P2PKH  
P2WSH: Commitment calculated using SHA256  
P2TR: Commitment is point on secp256k1 curve (Public key that commits to data)
