---
title: Ethereum Basics
tags:
  - cryptography
  - blockchain
date: 2024-10-23 17:49:19 -0500
updated: 2024-10-24 15:57:07 -0500
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

#### Contracts

Solidity is the most common language that is used to write Smart Contracts  
Solidity code is converted into bytecode that can be executed by the EVM  
[GitHub - Faucet.sol](https://github.com/ethereumbook/ethereumbook/blob/develop/code/Solidity/Faucet.sol)

To register a contract on the blockchain a special transaction that has a destination address of all zeros  
Contract creation transactions don’t need to have ether  
Gas fee equivalent to the size of the contract will be charged  



