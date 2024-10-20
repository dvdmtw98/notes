---
title: Bitcoin Test Blockchains
tags:
  - blockchain
  - cryptography
date: 2024-10-15 18:45:21 -0500
updated: 2024-10-15 18:46:13 -0500
---

### Testnet: Testing Playground
This network is similar to the main network and has all the same features  
The coins mined on this network is meant to be worthless  
All of [[bitcoin-core|Bitcoin Core]] functionality works on the testnet  

The min difficult on the testnet is half of the mainnet  
There is no incentive for miners to mine on the testnet  
So users take advantage of this to not include users block and disrupt the network  

### Signet: Proof of Authority Testnet
It is a test network where each block should contain proof that the block was created by a trusted authority  

On testnet anyone could mine on signet only authorized users can mine  
Users can create their own signet whenever they want
The script that determines the authorized users is called the challenge script  

### Regtest: Local Blockchain
Regtest stands for Regression Testing
It is an Bitcoin Core feature that allows us to create a local blockchain  
They are used to run closed local testing (no other users)  
