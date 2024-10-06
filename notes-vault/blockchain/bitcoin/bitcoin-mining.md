---
title: Bitcoin Mining
tags:
  - blockchain
  - cryptography
date: 2024-09-14 12:52:02 -0500
updated: 2024-09-14 17:59:43 -0500
---

Transactions do not become part of the blockchain until its added into a block by a process called Mining and that block is validated by full nodes  

Bitcoins counterfeit protection is based on computation  
Transactions are grouped together into blocks  
Blocks have a very small header which has to be formed in a very specific way  
This required a lot of computation to get right but very little computation to verify  

Mining leads to the creation of new bitcoins (like a central bank)  

The first block in the blockchain is called the “genesis” block  

#### Decentralized Lottery

Mining is like a decentralized lottery  
Each miner can create their own ticket by creating a candidate block  
The block includes transactions they want to mine along with some additional fields 

The candidate block is provided as the input to a hash function  
If the hash output matches an template that is determined by the Bitcoin protocol the miner wins the lottery  
The block along with its transactions will be accepted as valid by the system  
If the output does not match the template the miner makes small changes to their candidate block and tries again  
It takes the miner billions of tries to find hash that matches the required template  

Once the hash is found its trivial to verify the hash using the hash function  
The data required to generate the proof (block) is called proof-of-work (PoW)

#### Candidate Blocks

Transactions are prioritized to be added to a block based on transaction fee and some other factors  
Miner start mining a new candidate block as soon as they receive the previous valid block on the network  
The new candidate blocks created will has a commitment (reference) to the previous block in the chain  

Each miner includes a special transaction in their candidate block  
This transaction includes the bitcoin address of the miner (used to send reward) 
New bitcoin plus sum of all the transaction fee in the block is sent to the address  
The miner only receives the reward if their candidate block become a valid block 

Miners who participate in a mining pool have their nodes setup to create candidate blocks that assign the reward to a pool of addresses

New transactions on the network are added to a pool of unverified transactions  
Once its verified by a full node it can be included a candidate block  

#### Alterative Chains

When there are multiple alternative chains to choose from the full nodes select the chain that has the most total PoW (best blockchain)  
For the entire network to accept an alternative chain an additional new block will have to be mined on top of the alternative chain (i.e. make it the longest chain)

To create an alternate chain the miners would have to mine two blocks instead of creating the usual single block  
This is much less profitable and require significantly more computation than creating a new single block  

When a block with an transaction is added to the blockchain it acts as a single confirmation for all the transactions in the block  
When a new block is mined and is added to the top of the previous block it gives the transactions in the previous block two confirmations  
Now if an attacker wants to change a transaction in the 1st block they would need to create an alternative chain with three blocks  

As more blocks are added it becomes significantly difficult to change transactions in old blocks  
Any block that has six or more confirmations are considered very hard to change  

#### Verification

Once a block in embedded in the blockchain a full node can independently verify that its valid and spendable  
Lightweight clients can perform partial verification by confirming that the transaction is in the blockchain and has several blocks are mined after it