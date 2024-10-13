---
title: Bitcoin Lightweight Clients
tags:
  - blockchain
  - cryptography
date: 2024-10-12 16:14:03 -0500
updated: 2024-10-12 16:14:56 -0500
---

Utilize Simplified Payment Verification (SPV) to operate without validating the full blockchain  
They only download the block headers (no transactions)  

Lightweight clients verify transactions by referencing there depth in the blockchain  
If a block that contains a transaction has multiple blocks on top of it can an verify by proxy that the transaction is valid  
They verify the PoW of each block not the transactions present in them  
The lightweight clients use a Merkle path proof to verify that a transaction does exist in a block  
Cannot check if a transaction is being double-spend as does not have the full view of the blockchain  

Just by looking at the block header a lightweight client cannot tell which UTXOs belong to its wallet  
Bitcoin wallets utilizes Bloom Filters to allow them to request a subset of transactions without reveling directly which transactions they are interested in 

Lightweight clients are offer less privacy then full nodes

### Bloom Filter

[[bloom-filter|Bloom Filter]] is an probabilistic search filter  
It provides a way to provide a search pattern without compromising privacy  
Used by lightweight clients to request information from peers  

Using bloom filters lightweight clients can decide to either to make a search the favors accuracy or one that favors privacy  
The bloom filter can with probabilistically say if a patten was included and can with certainty say if a pattern was not included  

The `filterload` message is used by lightweight clients to request a filtered list of transactions from an full node  
The peer node can use the transaction ids, data in script outputs, script inputs and signatures against the filter  
The peer node will send the block headers of the blocks that contain transactions that match the filter. The Merkle path to the transaction is also shared  
Peer will also send a message that contains the transactions that match the filter  

Using the information that is sent by the peer the lightweight node updates its UTXO balance  
The bloom filter is also modified to search in the future for UTXOs that were found  

It was later realized that is method is not very private and using certain filters that peer nodes could be forced to perform a lot of work  

### Compact Block Filters

Instead of the lightweight clients creating the filter the full nodes create the filters  
The compact block filter is a filter that is created by hashing the addresses that are present in a block  
Filters are created for each blockchain that is confirmed into the blockchain  
This filter is sent to the lightweight client which can check if it contains any of its addresses  
If the filter contains its address it can download the required block from the node  
From the node the lightweight client can then use the transactions that it requires  

#### Golomb-Rice Coded Sets (GCS)

GCS is an optimization that is used for sharing the filters  
We arrange the list of numbers that need to be shared in ascending order  
The 1st number is transmitted as is, the remainder of the numbers is transmitted as a difference from the previous term  
This allows to transmit the same information while using less bandwidth  
GCS filters have 100% true positive rate  

#### Data in Compact Block Filter

Lightweight client needs to identify the outputs that are sent to it and it also needs to identify outputs that have been spend by it  
The GCS filter that is sent to the lightweight clients contain information about all the output scripts and additionally contains information output outputs scripts that are referenced by the outpoint of an input (spent output)  
Lossy encoding using SigHash is used to convert the output script into a 64-bit commitment hash

#### Using Compact Block Filter

The 64-bit commitment hash is calculated for all the outputs in a transaction  
The duplicate values are removed and the values are arranged in ascending order  
Then using GCS they are represented as difference (Delta) values  
This filter is shared with the lightweight nodes  

Lightweight client can then create commitment hash the outputs it is monitoring   Then check if the compact block filter contains transactions that matches its commitment hash  
