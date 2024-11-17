---
title: Ethereum Basics
tags:
  - cryptography
  - blockchain
date: 2024-10-23 17:49:19 -0500
updated: 2024-11-13 15:50:40 -0600
---

Ether represented as 1 ether, or 1 ETH, or Ξ1, or ♦1  
Smallest unit “wei”. $1\ ETH = 1 \times 10^{18}\ wei$   

Faucets are applications on test network that give free ether  
Ethereum was made to run smart contracts  
The cryptocurrency aspect is an secondary feature on Ethereum  
The EVM is a global singleton i.e. runs as a single instance everywhere  

#### Account Types

The type of account created by a wallet is called **Externally Owned Account (EOA)**  
EOA accounts have a private key associated with it  

**Contract accounts** are accounts that have Smart Contract code stored in them  
Contract accounts don't have a private key they are owned and controlled by the smart contract code  

Contracts have addresses, can send and receive ether like a EOA account  
When a transaction destination is a contract addresses it executes the contract  
The transactions data becomes the input for the contract  
Transactions can call specific functions in a contract (can pass parameters as well)  
Since contracts do not have a private key they cannot start a transaction  

#### Ethereum Clients

**Remote clients** do not store a local copy of the blockchain  
They operate like wallets allowing the creation and broadcast of transactions  
They are completely reliant on full nodes to provide them with information  

**Light clients** are similar to SPV clients in [[bitcoin|Bitcoin]]  
They verify the block headers and using Merkle proof to verify that the transaction is present in a block  

Fast sync skips full transaction validation until it synced to the tip of the blockchain  
