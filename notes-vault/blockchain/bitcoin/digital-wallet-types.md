---
title: Digital Wallets
tags:
  - blockchain
  - cryptography
date: 2024-09-12 11:50:11 -0500
updated: 2024-10-12 16:16:08 -0500
---

A digital wallet is the most common gateway for accessing the blockchain system  

#### Wallets (Platform)
- Desktop: Feature rich, offers control and anonymity
- Mobile: Most popular, simple and easy to use
- Web: Wallet on server owned by 3rd party, easy to use
- Hardware Signing Key

#### Wallets (Anonymity)
- Full node: Validates history of entire blockchain, uses significant resources
- [[bitcoin-lightweight-clients|Lightweight Client]]: Connects to full node for info, stores wallet locally
- API clients: Connects to network using API, wallet local or managed by 3rd party

Full nodes are also called peers. Lightweight and API wallets are clients  
Clients depend on one or more peer for receiving valid data  

#### Wallets (Control)
- Custodial: Keys managed by user
- Noncustodial: Wallet and funds managed by 3rd party

Noncustodial wallets provide Recovery Codes. They are also called Seeds  
It is an input that is used to generate the wallet keys  
Using recovery code to recover account does not restore transaction metadata
Some wallets provide an additional backup feature that backs up the metadata  

Many bitcoin transactions are made using off-chain technologies  
Transactions made using this technology are not stored on the blockchain (privacy)
