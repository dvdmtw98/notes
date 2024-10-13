---
title: Bitcoin Transaction Fees
tags:
  - blockchain
  - cryptography
date: 2024-10-10 09:46:54 -0500
updated: 2024-10-10 11:01:46 -0500
---

Fee Rate = Transaction Size / Weight  
Lower Fees = Longer time for transaction to be confirmed  
To low a fee rate might cause a transaction to never be confirmed  

Due to furcation in the demand of Bitcoin the fee rate required to get a block accepted might change  
The process of increasing the fee once the transaction is created is called fee bumping  

### Replace by Fee (RBF) Fee Bumping

A confliction transaction that has an higher fee is created  
Conflict occurs when multiple transactions try to spend the same UTXOs  

To prevent users from creating unlimited conflicting transactions that use up the bandwidth of the network each conflicting transaction has to have a higher transaction fee than the previous one  

**Opt-in RBF**  
Creator of unconfirmed transaction can signal to miners and full nodes that they want to allow transaction replacement  
Enabled on Bitcoin Core by default  

**Full RBF**  
Any unconfirmed transaction can be replaced with a transaction with higher fees  

### Child Pays for Parent (CPFP) Fee Bumping

Anyone receiving an unconfirmed transaction can incentivize a miner to confirm the transaction by spending the output  
The transaction to be confirmed is the parent and the transaction spending the output of the parent is the child  

A miner can create a package of transactions (parent & child) to see if it would be profitable to mine them together in the same block  
Transition package can be created across generations (parent, child & grandchild)  
This is called ancestor fee rate mining  

### Package Relay

Early versions of Bitcoin did not place any limit on the unconfirmed transactions that could be saved in their mempool for relaying later  
This was later changed to allow a max storage of one days worth of transactions or packages that have the highest fee rates  

This creates a dependency problem as a parent that does not have a high enough fee rate would need to be kept in memory to see if there will be a child transaction that bumps the fees  
To solve this issue Package  Replay were implements which allows nodes to replay all the transactions in a package as a single unit  

**Transaction Pinning**  
Because of the DDoS prevention rule of RBF and CPFP the spender is not able to bump the fees on their transaction  

**Fee Snipping**  
Miner reorganizes the transaction in the candidate block with transactions in the mempool that have a higher fee  
