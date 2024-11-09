---
title: Ethereum Tranasactions
tags:
  - blockchain
  - cryptography
date: 2024-11-06 10:07:59 -0600
updated: 2024-11-06 18:51:53 -0600
---

Transactions is the only things that causes state change on the blockchain  
They are also responsible for the execution of contracts on the network  

Transactions are transmitted over the network in a serialized format (fixed)  
The structure used by the client to represent the transaction can be different  
Transaction is serialized using Recursive Length Prefix (RLP) encoding scheme  

#### Nonce

Nonce is an attribute of the sender address and it not store anywhere  
It is calculated by counting the number of confirmed transactions from a address  
Nonce helps to establish the order of transactions and also prevents replay attacks  

Ethereum uses a Account-based protocol in place of the Unspent Transaction Output (UTXO) protocol used in Bitcoin  
Nonce can be also imagined as the count of confirmed transactions  

Ethereum processes transactions in the order of the Nonce  
If a we have a transaction with Nonce 0 and Nonce 2 until a transaction with Nonce 1 is received the transaction with Nonce 2 cannot be processed  
If two transactions with same Nonce is created only one of them will be confirmed  
It is not possible to recall transactions in Ethereum  

#### Transaction Gas

Gas is not the same as Ether  
It is a separate virtual currency with its own exchange rate  
Gas is used to control the amount of resources a transaction can utilize  
Gas is used for computation, memory and storage  

`gasPrice`: Price originator is willing to pay to receive gas  
Higher gas price can lead to the transaction getting confirmed quicker  

`gasLimit`: Units of gas the originator is willing to purchase to complete the transaction. For EOA to EOA transactions it is fixed at 21,000 gas units  

The gas price for contracts can only be estimated as the code path executed by the transaction on each evocation could be different  
The gas price is paid after the transaction has been executed by the EVM  

#### Transaction Recipient

Contains a 20-byte Ethereum address. Can be EOA or contract account  
The recipient address is not validated by Ethereum  
Transactions do not include a `from` field as it can be derived from the signature

#### Transaction Value and Data

A transaction with only **value** is a **payment**  
A transaction with only **data** is a **invocation**  
A transaction with **both** is a **payment and invocation**  
With **neither** is **waste** of gas (does not do anything)  

A transaction with value when sent to a EOA account causes a state change  
A transaction made to contract will execute the function mentioned in data if no data then fallback function is called and if its payable it will be executed   
If no fallback then the balance of the contract will be increased

A transaction with data when sent to an EOA account is mostly ignored  
When sent to a contract it will cause a function to be evoked  

The data value consists of the function selector (first 4-bytes of the Keccak-256 hash of the function prototype) and function arguments (encoded using the rules of ABI specification)  
Function prototype is function name with the parameter datatypes  

Contract creation transactions are sent to a special address (zero address)  
This address can never spend ether or create transactions  
A transaction is sent to zero address with value but no data the ether gets burned  

#### Digital Signature

Signatures authorize the spending of ether, providers non-reputation and guarantees that the transaction cannot be modified  
A signature consists of 2 parts - algorithm for creating signature using private key and algorithm that allows anyone to verify signature using public key  

The RLP encoded representation of the transaction is hashed using Keccak-256 which is used an input to the signing function  
The private key of the user is used as the 2nd parameter to the function  
An ephemeral private key is used for creating the signature  
The signature consists of two components (r, s)  

In practice an additional parameter v is also included. This parameter include the chain Id and recovery identifier  
This parameter was added in EIP-155 to prevent replay attacks using transaction created on a different network  

Process of generating public key from the signature is called public key recovery  
For a given (r, s) pair there are two possible signatures (positive & negative)  
If v is even then R is the signature if its off then R’ is the signature  

#### Transaction Propagation

A **flooding protocol** is used for propagation the transactions  
The originating node receives the transactions and propagates it to its immediate neighbors  
Each node mentions connections to around 13 neighbors  
Originating node of the transaction cannot be found unless a majority of the network is controlled by the attacker  

#### Multi-Signature Transactions

Ethereum **does not have multi-sign transactions** similar to the ones in Bitcoin  
But an Wallet contract can be created that can enforce spending rules on the funds  
Funds can be sent to the contract and then can only be spend based on the rules defined in the contract  
