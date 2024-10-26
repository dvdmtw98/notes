---
title: Ethereum Clients
tags:
  - blockchain
  - cryptography
date: 2024-10-24 15:57:18 -0500
updated: 2024-10-24 22:14:28 -0500
---

Remote nodes do not store a local copy of the blockchain  
They operate like wallets enabling creation and broadcast of transactions  
They are completely reliant on full nodes to provide them with information  

Light clients are similar to SPV clients in [[bitcoin|Bitcoin]]  
They verify the block headers and using Merkle proof to verify that the transaction is present in a block  

Fast sync skips full transaction validation until it synced to the tip of the blockchain  
