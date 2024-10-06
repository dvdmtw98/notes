---
title: Bitcoin Core
tags:
  - blockchain
  - cryptography
date: 2024-09-16 11:09:49 -0500
updated: 2024-09-17 13:44:06 -0500
---

The original implement by Satoshi Nakamoto is referred to as “Bitcoin”  
This original version over time was heavily modified and become “Bitcoin Core”  
Bitcoin Core is now considered as the reference implement of Bitcoin

![[bitcoin-core-architecture.png|450]]

The early parts of the system was described in the Bitcoin whitepaper  
The parts since 2011 have been documents in Bitcoin Improvement Proposals (BIPs) 

Source Code: [GitHub - Bitcoin Core](https://github.com/bitcoin/bitcoin)  
Project Website: [Bitcoin Core :: Bitcoin](https://bitcoincore.org/)

Bitcoin Core by default keeps track of all transactions that have ever occurred since 2009. This requires hundreds of GBs of storage.

Arguments for running a Bitcoin node:
- Don’t have to rely on 3rd party to validate transactions that are received
- Don’t have to disclose to 3rd which transactions belong to our wallet
- Require access to Bitcoin API and Bitcoin network to develop software
- Want to support the Bitcoin network

By default Bitcoin Core builds a database that only contains the transactions related to the users wallet. To be able to access all transactions Bitcoin Core has to be configured to build the complete transaction index

Bitcoin Core implements JSON-RPC based API

| Command                                        | Description                     |
| :--------------------------------------------- | :------------------------------ |
| `bitcoin-cli getblockchaininfo`                | Blockchain Information          |
| `bitcoin-cli getnetworkinfo`                   | P2P Network Information         |
| `bitcoin-cli getrawtransaction <txid>`         | Transaction (Serialized) in Hex |
| `bitcoin-cli decoderawtransaction <serail-tx>` | Transaction in JSON             |
| `bitcoin-cli getblockhash <height>`            | Block Hash                      |
| `bitcoin-cli getblock <hash>`                  | Block Information               |
