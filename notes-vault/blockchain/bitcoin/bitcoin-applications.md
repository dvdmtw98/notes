---
title: Bitcoin Applications
tags:
  - blockchain
  - cryptography
date: 2024-10-17 20:39:35 -0500
updated: 2024-10-20 12:51:06 -0500
---

### Colored Coins
Use of bitcoin to record the creation, ownership and transfer of extrinsic assets  
Extrinsic assets are assets that are stored outside the Bitcoin blockchain  
They are normal bitcoins with attributes that represent the asset    

Intangible Assets: stock certificate, license, IP, etc.  
Digital Assets: Land titles, automobiles, etc.

#### Single-Use Seals
Seals that make tampering with items evident  
In Bitcoin this is achieved by tying the colored coins to UTXOs  
If the UTXO is spend it has to define how the colored coin is used  

#### Pay to Contract (P2C)
A P2C contract can be arbitrarily long and detailed  
Only the public key with the commitment to the contract is published  
When a colored coin is spend in the output a commitment hash will be included which will define the terms the new owner must fulfil to spend the coins  
The actual contract cannot be validated by the Blockchain  

#### Client-side Validation
To transfer the colored coins the owner needs to share their public key, information about the contract and details of the UTXO used by the coins  
The new owner can use these information along with their validation software to check information about the asset that they are receiving  

### Payment & State Channels
Payment channels are a trustless mechanism for exchanging Bitcoins outside of the Bitcoin blockchain  
These transactions are held off-chain and not settled immediately  
Since they are settled in batches they have lower latency and higher throughput  

State channels are virtual constructs exchanged outside the blockchain  
There is no channel similar to TCP stream just a set of data packets  
They are are series of transactions  
They form a redeemable obligation even though  the other side of the channel cannot be trusted  

A state channel is created when using a transaction a shared state is locked on the blockchain (between the parties involved). This forms the funding transaction  
This has to be transmitted to the network and mined to establish the channel  
This locked state is the initial balance of the channel  

The 2 parties then exchange signed transactions, called commitment transactions  
These transactions alter the initial state of the channel  
These are valid transactions that could be submitted for settlement but are held off-chain till state closure  
The settlement transaction represents the final state of the channel and is settled on the blockchain  

In total only 2 transactions need to be submitted to the blockchain for commitment  
None of the intermediate transactions are seen by anyone  
The amount present in the funding transaction sets the channels capacity  

Timelocks are used to prevent parties from settling a transaction that is more favorable to them  
A refund transaction is created before the funding transaction to ensure that the funds can be refunded if the receiver were to vanish  
A revocation transaction is also created which allows the wronged party to receive all the funds from the party that disconnects maliciously  
