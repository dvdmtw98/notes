---
title: Ethereum Contracts
tags:
  - blockchain
  - cryptography
  - programming
date: 2024-11-13 15:51:23 -0600
updated: 2024-11-16 13:11:33 -0600
---

### Smart Contracts

Solidity is the most common language that is used to write Smart Contracts  
Solidity code is converted into bytecode that can be executed by the EVM  
[GitHub - Faucet.sol](https://github.com/ethereumbook/ethereumbook/blob/develop/code/Solidity/Faucet.sol)

To register a contract a transaction with destination address of all zeros is used  
Contract creation transactions don’t need to have ether  
Gas fee equivalent to the size of the contract will be charged  

Contract accounts do not contain any private keys  
The contract creator does not get any special privilege over the contract  
Contracts only run when they are called using a transaction  
Contracts cannot be executed in parallel - Ethereum single-threaded machine  

Contracts are atomic. If any error occurs during the execution of the contract the state changes are rolled back  
Contracts can be deleted using the `SELFDESTRUCT` command  

### Ethereum ABI

An ABI (Application Binary Interface) is an interface between two program modules  
The two programs is often the OS and user program  
Defines how data structures and functions can be accessed in machine code  

Ethereum ABI to define the contract calls for EVM and read data from transaction  
Defines which functions can be called and what arguments it can accept  
A contracts ABI is defined as a JSON array  

### Solidity

Global Objects: `blocks`, `msg` and `tx`  
The `msg` object is responsible for contract execution  

The constructor function is run when the contract creation transaction is executed  
A contract can be deleted if it contains a destructor  

When a transaction completes execution it created an transaction log  
Events are used to represent the transaction logs in Solidity  
[GitHub - Faucet8.sol](https://github.com/ethereumbook/ethereumbook/blob/develop/code/Solidity/Faucet8.sol)  
