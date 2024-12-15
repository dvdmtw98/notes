---
title: Transaction Structure
tags:
  - cryptography
  - blockchain
date: 2024-09-28 22:27:02 -0500
updated: 2024-12-08 15:59:12 -0600
---

A transaction is a request to the full nodes to change the coin ownership information  
This is similar to how we change the ownership of a property

![[bitcoin-transaction-structure.png|540]]

[Transaction - Bitcoin Wiki](https://en.bitcoin.it/wiki/Transaction)  
[Transaction \| How Bitcoin Transactions Work](https://learnmeabitcoin.com/technical/transaction/)

### Version

The 1st 4 bytes of the serialized transaction represent the version  
All transaction in Bitcoin must follow the rules of v1  
v2 transactions have to follow the additional rules that were added

### Extended Marker & Flag

The extended marker and flag field was added as part of SegWit  
The marker is set to 0 and flag must to set to nonzero value  
In the current protocol flag must be set to 1  

Transactions that do not need the Witness structure should not have these fields  
Marker would have been interpreted as the number of inputs in legacy serialization

### Inputs

![[bitcoin-transaction-input-structure.png|540]]

All inputs have a count, outpoint field, length-prefixed input script and a sequence  

#### Count

The transaction list starts with a integer that represent the number of inputs  
The min value is 1. No max value but limited by transaction size  
Encoded in compactSize unsigned integer  

#### Outpoint Field

Transactions are used to transfer the ownership of coins  
To transfer coins Alice needs to mention were she received the coins  
This info is present in the output of the transaction that give Alice the coins  
This information is encoded in the outpoint field  
A transaction can have multiple outputs. Index used to denote output  
Txid is 32 bytes long and index is 4 bytes long (unsigned integer) starting at 0  

On finding the previous transaction the full node does the following:
- Get the amount of bitcoins present in the transaction
- Get the conditions required to unlock the funds
- Get the height of the block that confirmed it and the median time past (MTP)
- Ensure that the transaction has not been spend

[[bitcoin-core|Bitcoin Core]] maintains a database that has all the UTXOs and essential metadata  
Even a new block arrives the information is the database is updated

#### Input Scripts

Input script is an remnant from the legacy transactions  
The SegWit transactions do not utilize this field  
The length-prefixed for the input script is set to 0  
Uses compactSize unsigned integer  

#### Sequence

The final 4 bytes of the input field is the sequence number  
Originally it was used to create different versions of the same transaction  
The new version would replace the old version as candidate for confirmation  
Final version of the transaction would have the sequence set to the highest value  
This was referred to as the “payment channel”  
The original implementation was disabled because of possibility of abuse

After the original usage of sequence was disabled a solution to solve the problem to resolving conflicting transactions was proposed  
When transactions that utilized the same input was present the transaction with the higher transaction fee was selected  
This was called “replace by fee” or RBF  
Users objects to this approach and the sequence based solution was re-introduced  

When SegWit was introduced sequence was used to represent timelocks  
Sequence number $\lt 2^{31}$ was used for this purpose  
Once the previous transaction (input) has aged by the timelock amount only then could the transaction be included in the blockchain  
The sequence value could be represented in blocks or seconds  
A flag was used to make the distinction between the units  

### Outputs

![[bitcoin-transaction-output-structure.png|540]]

#### Count

The count fields shows the outputs present in the transaction  
Uses compactSize integers

#### Amount

The amount field is 8-bytes long  
Represent the amount of sats that need to be transferred  

Outputs that have a value of 0 are valid and can be spend like any transaction  
To use the output in a transaction there would be an transaction fee  
If the output is less than the transaction fee there is no sense in spending it  
Such outputs are called uneconomical outputs  
Economical outputs take up unnecessary space in the UTXO database  

Bitcoin discourages such transactions by enforces a policy that affects the relay and mining of such transactions  
The policies that discourage uneconomical transactions are called “dust policies”  

Output scripts starting with `OP_RETURN` (data carrier outputs) can have value of 0
It causes the scripts to fail no matter what comes after it

#### Output Scripts

After the amount there is the length of the output script followed by the script  
The script contains the conditions that need to be fulfilled to spend the bitcoins  
An output script can have a size of 0  and can be consumed by `OP_TRUE`  
Such transactions can be consumed by anyone and are called “anyone can spends”  

### Witness Structure

In court a witness is someone who testifies to have seen something  
Witnesses contain data for solving math problems for spending bitcoins  
Witness could be anything from signature to public keys  
In the original transactions the witnesses were placed in the input script  

#### Circular Dependency  

In the previous transaction structure the hash the the transaction included the signatures provided by the users  
The issue with this approach was until the previous transaction was signed the hash could not be generated which would need to be referenced in the next transaction

#### Third Party Transaction Malleability

There could be multiple solutions to the same transaction  
An 3rd party could provide values that satisfies the witness program causing the transaction to be sent even though it was not initiated by the sender and receiver of the found  

#### Second Party Transaction Malleability

When creating signature a random number needs to be included  
The transaction id generated will if multiple copies of the transaction are created with valid signatures but using a different random number  
Because of this one of the parties in the transaction could change the transaction but modifying their signature  

#### Segregated Witness

SegWit is the process of segregating the witness data from the rest of the transaction for calculating its Txid  
The original transaction structure included the witness data in the input field  
This was the reason for circular dependencies, 2nd and 3rd party transaction malleability  

Implementing changes in Bitcoins consensus protocol that is backwards compatible with full nodes that do not upgrade to the new version is called “Soft Forking”  
Full nodes must not accept transactions that the nodes not implementing SegWit transaction consider as invalid  

#### Witness Structure

![[bitcoin-transaction-witness-structure.png|540]]

The Witness Structure as a Witness stack for each input field  
Each witness stack starts with the count of the elements items they contain  
Each item is prefixed by compact integer representing its size  
Legacy transactions don't have witness so they stack is entirely 0

### Lock Time

One of the early Bitcoin soft forks added the rule that after block 31,000 a block would only be added into the blockchain it it met the following conditions:
- Lock time set to 0 to be included in any block
- Addition into any block can be restricted by setting the value $\lt 500,000,000$. If the value was set to 1234 it would only be included in block $\ge 1234$
- A transaction would be restricted by setting it lock time to $\gt 500,000,000$. The field in this case would be parsed as epoch time. The transaction would be only included if its $MTP \gt lock\ time$  

### Coinbase Transactions

First transaction in a block is special  
Old document calls them generation transactions  
Created by the miner that mined the block  
Miners receive transaction fee on this address and until block 6,720,000 they also receive new bitcoins (block subsidy)  
The total amount that can be claimed is called “Block Reward”  

Coinbase transactions can only include 1 input  
The output must have a NULL Txid and have index set to max value  
The field present in place of the input field is called coinbase  
In SegWit all the transaction included in a block must also include an output that commits to the coinbase transaaction  

A transaction cannot spend coinbase transaction until it receives 100 confirmations  
This rule is called maturity rules and any transaction that does not meet the requirement is considered immature  

### Weights & Vbytes

There is a limit on the amount of transactions that can be included in a block  
The unit of measurement used in Bitcoin is weight and vbytes  
4 units of weight = 1 vbyte  

Blocks are limited to 4 million in weight  
The header takes up 240 in weight  
The transaction count field can be 4 to 12 weight  
The remaining space can be used to store transactions  

To calculate the weight of a field its size is bytes is multiplied by a factor  
The weight of the transaction is the weight of all the fields  
