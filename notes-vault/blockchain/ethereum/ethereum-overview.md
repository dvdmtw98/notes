---
title: Ethereum Overview
tags:
  - blockchain
  - cryptography
date: 2024-10-23 16:21:44 -0500
updated: 2024-11-05 22:31:06 -0600
---

Ethereum is a general purpose blockchain  
Blockchains can be taught of as distributed state machine  
Along with currency ownership keeps track of general purpose data storage  
Ethereum can store code and data and the blockchain keeps track of how his data changes over time  
The state changes are governed by the rules of consensus and is distributed  

Ethereum runs on port 30303 and uses the DevP2P protocol  
The state transitions are processed by the Ethereum Virtual Machine (EVM)  
The transactions and system state is stored locally in Merkle Patricia Tree  
Ethereum PoW algorithm is called Ethash  

#### ETH and Gas Fees

Halting Problem: The path of a program cannot be determined without running it  
Ethereum is Turing complete i.e. can run emulate other Turing Machines  
Can create Smart Contracts that never terminate (infinite loop)  

Ethereum uses a metering mechanism called gas  
Gas determines the amount of computational work that has to be performed by a smart contract/ transaction  
When creating the contract we specify the max gas that can be used  
Gas is purchased using Ether (ETH) the currency used on Ethereum  

#### Decentralized App (DApp)

DApp is an web application that uses the blockchain as its underlying infrastructure  
Consists of smart contracts and web frontend interface  
Can also contain P2P storage and P2P message protocols  

#### Smart Contracts
Self-executing contracts where the terms of agreement are written directly as code  
Can automatically perform actions when certain conditions are met  
Once a smart contract is deployed, it cannot be altered  
This makes the agreement tamper-proof and trustworthy  

#### Development Culture

Ethereum uses the “move fast and break things” philosophy  
Because of this approach Ethereum evolves at a very fast rate  
Backwards compatibility is not always preserved and could break out apps  

Ethereum does not have a reference implement but has a reference specification  
All Ethereum clients have to follow the specification  
