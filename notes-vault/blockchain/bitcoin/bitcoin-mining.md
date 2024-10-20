---
title: Bitcoin Mining
tags:
  - blockchain
  - cryptography
date: 2024-09-14 12:52:02 -0500
updated: 2024-10-17 13:37:58 -0500
---

### Currency Creation

A new block is mined approx. every 10 minutes  
Every 210,000 blocks or approx. 4 years the currency issuance rate is halved  
When 6.720,000 blocks are mined (approx. year 2137) the currency issuance rate will becomes 1 satoshi  
In approx. year 2140 almost 21 million bitcoins would have been issued  
After which point no new bitcoins will be created  
Because Bitcoins are limited there are resist from inflation (deflationary)  

### Decentralized Consensus

Bitcoin uses an emergent consensus model i.e. there is no election or fixed moment at which consensus is reached  
The consensus is reached by the interplay of four processes:
- Independent verification of each transaction  
- Independent aggregation of transactions into block by mining & PoW algorithm
- Independent verification of the new block
- Independent selection of chain with the most cumulative computational effort 

### Transaction Verification

When nodes received a transaction they verify it before broadcasting it to its peers  
A long list of conditions need to be satisfied for a transaction to be valid:
- correct syntax and structure
- inputs & outputs not empty
- weight lower than block size
- output within the allowed range
- correct lock times values and range
- multi-sign signatures within supported limit
- output being spend exits in mempool or blockchain
- if input references a coinbase it should have maturity of at least 100
- input value is greater than output

### Mining Block

The candidate block is hashed  
If the hash is below the target that is set by Bitcoin the miner block is accepted  
If the output is not below the target the miner increments the nonce in the candidate block and tries again  
If the nonce runs out the miners can either make changes in the coinbase transaction or make changes in the version field of the the block header to create new hash values  e

If we know the current target we can estimate how much work is need to find a nonce that causes the hash to be below the target    
Once the correct hash is found its trivial to verify the hash using the hash function  
The input required to generate the proof is called proof-of-work (PoW)  

The target is stored in a coefficient/exponent format  
The 1st two hex digits represent the exponent and the next 6 represent the coefficient  
$target = coefficient \times 2^{8 \times (exponent - 3)}$  

The PoW difficult is adjusted dynamically to ensure that a new block is mined every 10 minutes  
Every 2016 every node independently recalculates the new difficulty  
$New\ Target = Old\ Target * (\frac{20,160\ minutes}{Actual\ Time\ of\ Last\ 2015\ Blocks})$

### Mean Time Past (MTP)

Bitcoin is a decentralized system and every node on the network can have a different perspective of time  
Every 10 minutes the network comes to a consensus on the past state of the blockchain  
A miner could provide false timestamp values in the block header to manipulate the difficulty of mining  

To present such manipulation 2 consensus rules are used:
- Blocks further in the future by 2 hours are will not be accepted
- Blocks with time less than or equal to the median time of the last 11 block will not be accepted (MTP)

MTP is also used as the consensus time for all timelock related calculations  
MTP is generally a hour behind wall clock time  
User should take this into considering with using CLTV and CSV timelocks

### Alterative Chains

When there are multiple alternative chains to choose from the full nodes select the chain that has the most total PoW (best blockchain)  
For the entire network to accept an alternative chain an additional new block will have to be mined on top of the alternative chain (i.e. make it the longest chain)  
Sibling nodes are created when multiple blocks are mined at the same time  
Naturally occuring forks in the chain are always resolved in 1-2 blocks  

To create an alternate chain the miners would have to mine two blocks instead of creating the usual single block  
This is much less profitable and require significantly more computation than creating a new single block  

When a block with an transaction is added to the blockchain it acts as a single confirmation for all the transactions in the block  
When a new block is mined and is added to the top of the previous block it gives the transactions in the previous block two confirmations  
Now if an attacker wants to change a transaction in the 1st block they would need to create an alternative chain with three blocks  


### Hashrate Attacks

A miner or group of miners can achieve a significant share of the mining power they can attack the consensus mechanism  
Hashrate attacks have the most effect on future consensus  

As more blocks are added it becomes significantly difficult to change transactions in old blocks  
Any block that has six or more confirmations are considered very hard to change  

With more than 50% of the mining power deliberate forks can be created, coins can be double spent and DDoS attacks can be launched  
An attacker can only double spend their own transactions  

### Changing Consensus Rules

#### Hard Forks
An hard fork can use the blockchain to diverge into two chains  
The two forks can evolve independently  
An client that does not update will not be able to contribute to the new fork  
Hard forks generally occur when an software fork results in the implementation of a new consensus protocol  
Hard forks are forward-incompatible (cant be used by old nodes)  

#### Soft Forks
A forward-compatible change to the consensus rules  
Allows the old clients to work under the new rules without any issues  
Soft fork updates can only be used to constrain consensus rules not expand them  
Blocks created under new rule must be valid under old as well bit not vice versa  

Soft forks increase technical debit, validation relaxation (for clients not using new rules) and irreversible upgrades  
95% of the network has to agree for a soft fork to be activated  