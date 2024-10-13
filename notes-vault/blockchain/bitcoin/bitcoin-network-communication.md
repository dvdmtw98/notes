---
title: Bitcoin Network Communication
tags:
  - cryptography
  - blockchain
date: 2024-10-10 11:57:01 -0500
updated: 2024-10-12 16:20:07 -0500
---

Bitcoin communication over the network happens in clear test  
Bitcoin Core provides a feature where Tor can be used to communicate with the nodes in the network  

### Compact Block Relay

When a miner mines a block it needs to broadcast the mined block to all the other nodes on the network  
This process is slow and if at the same time another block mines a different block then there is a conflict for which should be the new block that is added to the blockchain  

Full nodes store unconfirmed transactions in their mempool  
The mempool might already contain some of the transactions that were confirmed in the latest block  
In Compact Block Replay transfers a block that uses a 6 byte identifier to denote the confirmed transactions  

The node that receives the replay can use the identifier to find the corresponding transaction from its pool. If the pool does not contain the any of the transaction it can request it from one of its peers  
In a similar manner if a peer believes that there there are transactions that will not be present in the mempool of other peers it can be included in the block replay  
In Bitcoin Core the coinbase transaction is always included in the block replay  

![[bitcoin-block-replay.png|540]]

**Low-bandwidth Mode**  
Only send the 32-byte hash of the block header  
If the node requires the block it will request for a compact block  
Default replay mode in Bitcoin Core  

**High-bandwidth Mode**  
A peer will send a compact block even before it has verified all the transactions  
The sender peer only checks if the PoW mentioned in the header is correct  

### Network Discovery

To find new peers a DNS seed (Servers with IP Addresses) is used  
Some DNS seeds provide a static list of peers that are considered stable  
Some DNS seeds are using a custom version of BIND and returns a random subset of node addresses  

The peer needs to be connected to at least one node from where it can be introduced to other nodes on the network  
Once connected the `addr` message is used to broadcast to the other nodes the existence of the new node  
The new node maintains a list of nodes to which it connected  
If the node is restarted it will try to connect back to the same set of nodes  

If a node only has the genesis block or one of its peers will send it a message that contains the header of the next 2000 blocks  
Once it has the headers it will ask its peer nodes for the block information which it needs to verify before its own blockchain is built from scratch  
If any of the peer nodes take a very long time to send the block, the new node will terminate its connection with the peer and look for a different peer that can provide the information  
