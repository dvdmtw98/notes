---
title: Ethereum Wallets
tags:
  - blockchain
  - cryptography
date: 2024-10-24 15:57:18 -0500
updated: 2024-11-05 23:56:16 -0600
---

Wallets in Ethereum can also interact with contracts like ERC20 tokens  
Wallets are containers to store and manage private keys 

#### Wallet Types

**Non-deterministic wallets** use keys that are in no way related to each other  
They are also called JBOK wallets (Just a Bunch of Keys)  

**Deterministic wallets** generate all the keys from a single seed value  
HD deterministic wallets represent the private keys in the form of a tree  
HD wallets also allow a user to generate public keys with creating its corresponding private keys. Allows the wallet to be used in a insecure environment

#### Keystore File

Ethereum clients use JSON file (keystore) to store the encrypted private key  
The private key is hashed multiple times using a KDF before its encrypted  
In Ethereum the private key is hashed 262,144 times before being saved  

#### Extended Keys

[[digital-wallets#BIP39|BIP39]]: Mnemonic Derivation & Seed Recovery

Keys can be extended by appending it with additional information like chain code  
By mixing the chain mode with the parent key, child keys can be derived  
Private keys start with “xprv” and public keys start with “xpub”  
Each parent can have 4 million children keys  

#### Hardened Keys

Breaks the relation between the parent public key and child chain code  
The parent private key is used to derive the change code instead of the public key  
For safety the 1st level children should be generated using hardened parents  
Multiple child keys can be derived from a parent for this an index number is used  

[[digital-wallets#Hardened Child Key Derivation|Hardened Child Key Derivation]]
