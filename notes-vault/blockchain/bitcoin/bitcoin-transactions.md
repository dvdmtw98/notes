---
title: Bitcoin Transactions
tags:
  - blockchain
  - cryptography
date: 2024-09-12 12:37:04 -0500
updated: 2024-09-14 12:50:41 -0500
---

A transaction tells that network that the owner of certain bitcoins authorized the transfer of value to another owner  
The new owner can subsequently transfer the bitcoins over to another owner  
This creates the chain of ownership

### Bitcoin Transactions

#### Transaction Inputs & Outputs

Transaction has one or more inputs (fund spenders) and outputs (fund receivers)  
The inputs and outputs do not usually add up to the same value  
Outputs add up to slightly less than the inputs (because of transaction fee)  
Transaction fee is collected by miner that adds the transaction to the blockchain  

The inputs to the transaction also contain proof of ownership (digital signature)  
This signature can be independently validated by anyone  

![[bitcoin-transaction.png|500]]

In Bitcoin lingo “spending” is signing a transaction that transfers value from a previous transaction over to a new owner identified by a bitcoin address

#### Transaction Chains

Then Alice makes a payment to Bob a new transaction that be created  
The podcast from Bob’s store costs 75,000 sats (0.00075 BTC)   
0.001 BTC = 100,000 satoshis (sats)  

The new transactions input will contain a transaction identifier (txid) and a index  
Txid is 32-bit value that uniquely identifies the previous transaction    
Index identifies the output to be referenced from the transaction  
In other words transactions do not explicitly store the value of the inputs  
Software have to use the txid and index to find the output being used as input  

The output of the transaction to Bob will contain 2 values, the bitcoins spent on purchasing the podcast and the bitcoins that were returned to Alice as change  
In this transaction 5,000 sats is assumed to be the transaction fee  

![[bitcoin-transaction-chain.png|580]]

The data format to represent transactions is called “Serialized Bitcoin transactions”  
During transactions fractional BTC values are converted to its equivalent in sats  

#### Making Change

Bitcoins transactions can have outputs that payback the sender of the bitcoins  
The concept of change works exactly like in traditional currency  

In the bitcoin protocol there is no difference between change and payment output   
The change address does not even have to be same as the input address (privacy)  
Using this approach prevents 3rd party from identifying the change and payment  

Transactions without a change output are called changeless transactions  
These transactions will only have one output  

#### Coin Selection

Different wallets use different approaches for choosing inputs (coin selection)  
The wallet applications may aggregate many small inputs or use one greater or equal to payment and transaction fee  

The wallet applications contain all the logic necessary to create a transaction  
If the wallet knows the inputs it contains the transaction can be created offline  

#### Common Transaction Forms

**Simple Transaction**: 1 input and 2 outputs (Payment and Change)  
**Consolidation Transaction**: Multiple inputs to a single output (Aggregation)  
**Batch Transaction**: Input pays out to multiple recipients (Payroll)

[[bitcoin-transaction-flows|Bitcoin Transaction Flows]]

### Constructing a Transaction

#### Getting the Right Inputs

Full node wallets keep track of all confirmed transactions “unspent transaction outputs” (UTXOs) on the network (resource intensive)  
Lightweight wallets only keep track of the users UTXOs  

If single UTXO is not sufficient for purchase several small UTXOs are combined  

#### Creating the Outputs

Output of the transaction is locked and can only be claimed by presenting the digital signature for the address of the recipient (Bob)  
Since only Bob has the keys to create the signature only he can spend the amount

#### Adding Transaction to Blockchain

Transactions contain all the information required for it to be processed  
It can be transmitted to the Bitcoin network anytime at anyplace  

Peers (Full nodes) have the software and data necessary to verify the correctness of a new transaction  
Any node that receives a transaction that it has never seem before will propagate it to all other nodes (gossiping)  

The recipient (Bob) will see the incoming payment in a few seconds in his wallet  
The wallet can identify its a payment for Bob because the transaction output can only be redeemed using Bobs keys  
The wallet app (client) can verify that the transaction has been well formed    
If Bob runs a full node wallet it can also verify that Alice has only used valid UTXOs  
