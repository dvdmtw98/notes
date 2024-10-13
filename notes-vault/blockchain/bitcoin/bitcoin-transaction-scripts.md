---
title: Bitcoin Transaction Scripts
tags:
  - blockchain
  - cryptography
date: 2024-10-08 09:28:13 -0500
updated: 2024-10-09 10:35:42 -0500
---

**Authorization**: Decide who has permission to spend coins  
**Authentication**: Distinguishing authorizes from other users

### Transaction Scripts

The Bitcoin script language is <u>not Turing complete</u>  
This is done to prevent logic bombs that could cause DDoS attacks  
Transaction scrips are <u>stateless</u>  
Each script contains all the information required to process the transaction  

Output script mentions conditions that have to be meet in future to spend the coins  
Input scripts provides the information that is required to spend the coins  

The language uses a <u>stack</u> to process the data in the scripts  
To spend coins input & output script are placed together &  processed (legacy)    
In the new version of Bitcoin the scripts are processed separately  
The input script is processed first and if there are no operands left the stack is copied and the output script is processed. 

The processing is done on a copy of the scripts (Original scrips are not changed)  
A transaction is valid if the top of the stack contains a true value (1)  

`VERIFY` opcodes returning false cause script processing to terminate immediately  

#### Multi-signature Scripts

Multi-signature scripts set a condition such that k public keys are recorded in the script and at least t signatures have to be provided to spend the funds (t-to-k)  

Output: `2 <Public Key A> <Public Key B> <Public Key C> 3 OP_CHECKMULTISIG`  
Input: `<Signature B> <Signature C>`  

Standard (Bare) Multi-signature scripts are limited 3 public keys in the output  
This does not apply to P2SH (15 signs limit), P2WSH and P2TR scripts  
P2WSH & P2TR are limited to 20 signatures for a single `OP_CHECKMULTISIG`

A flaw in the multi-sign operator causes it to pop `t+k+3` values instead of `t+k+2`  
To solve this issue an dummy operator (`OP_0`) is based before the signatures  

### P2SH

P2SH was introduced to make multi-sign & other complex scripts simpler to encode  
Multi-sign contains many signs which are very long it increases the transaction size  
Would result in a higher transaction fee that would have to be paid by sender  
The output script would also have to be  saved in the UTXOs database till its spend  

To solve these issues the hash of the complex script is used in the output script  
To spend the coins the script and inputs required by the script has to be provided  
This script hash is called redeem script

Output: `OP_HASH160 <Hash of redeem script> OP_EQUAL`  
Input: `<Sig1> <Sig2> <redeem script>`

With shifts the burden in fees and complexity from sender to the receiver (spender)  
Useful in business settings were approval from multiple departments are required for spending funds

P2SH can be used as an address as well. The address is base58check encoded  
P2SH addresses use the version prefix 3 in base58 that comes 5  
When a wallet sees a address that starts with 5 it knows its a special address  
Wallets don't have to be changed to make payments to P2SH addresses  

An P2SH cannot be include inside another P2SH  
Since the hash is only checked when its going to be spent, if a transaction is created with a invalid hash then the funds become unspendable    

### OP_RETURN

It is used to created outputs that are unspendable  
OP_RETURNs are stored on the blockchain but not in the UTXOs database  
Transactions that use OP_RETURN generally have amount set to 0  
This operator is used by some to perform digital notarization    

### Timelocks

#### Lock time

A <u>lock time</u> prevents a transaction from from being spent till a date in the future  
The lock is placed on the transaction not on the coins  
This is an absolute transaction level time lock

The spender (Alice) could create another transaction and spend the same coins that were promised in the time locked transaction  
There is no way to guarantee that Bob would receive the funds  

#### OP_CLTV

It is a absolute per output lock    
Prevents UTXOs from being spend till the time mentioned in the script has passed
The time lock mentioned in the output script is checked against the current state of the blockchain

Output: `<Bob's pubKey> OP_CHECKSIGVERIFY <now + 3 months> OP_CLTV`  

#### OP_CSV

It is a relative per output lock  
Locks UTXOs from use till the lock time mentioned in the output has been reached  
The lock time is calculated from the movement the transaction is added to a block

The time lock value is in the output script is compared with the time lock value that is provided in the sequence field of the input in the new transaction

### Control Flow

Bitcoin conditional statements can be nested indefinitely  
In the Bitcoin scripting language the condition is placed before `OP_IF`  
`OP_IF` acts like a guard clause similar to `VERIFY` opcodes  
The condition for `OP_IF` is provided when the coins are spent (input)  

```
Output:
OP_IF
	<Alice's Pubkey>
OP_ELSE
	<Bob's Pubkey>
OP_ENDIF
OP_CHECKSIG

Input:
<Alice's Sig> OP_TRUE
```

`OP_TRUE` causes the 1st path to be executed  

### P2WPKH

Output: `0 <WitProg Hash>`  
Input: `OP_DUP OP_HASH160 <WitProg Hash> OP_EQUALVERIFY OP_CHECKSIG`  

In P2WPKH the output (Witness Program) contains the hash of the public key  
The Witness Program is 20 bytes. In SegWit the input script field is empty   

The signature (witness) will be included in the Witness Structure (SegWit Input)  
The public key hash included in the input has be a compressed key  

To old Bitcoin clients a SegWit transaction look like it can be spent by anyone  
This is because the input script is empty. No context of the Witness Structure  

### P2WSH

Output: `0 <WitScript Hash>`  
Input: `<SigA> <SigB> 2 <PubA> <PubB> <PubC> <PubD> <PubE> 5 OP_CHECKMULTISIG`

In P2WSH the output (Witness Program) contains the hash of the redeem script  
The Witness Program is 32 bytes  

The signatures & redeem script will be in the Witness Structure (SegWit Input)  
The difference is length is used by nodes to differentiate between the two types

P2WPKH and P2WSH can both be embedded within a P2SH  
Used in situations were the the sender (Alice) does not support SegWit but the recipient (Bob) supports SegWit  

### Merklized Alternative Script Trees

MAST allows the inclusion of multiple execution paths in a output script (similar to `OP_IF`) while only revealing the script that is executed  
Reduces the space that is required to store the transaction and improves privacy  
Each alternate script is represented as root nodes in a binary tree and are pairwise hashed will the Merkle root is generated  

The Merkle root is included in the transactions output  
To spend the transaction the user needs to provide hashes that show the path from the executed script to the Merkle root  

### Pay to Contract (P2C)

Bob wants to buy item from Alice and wants to be able to prove later that he paid  
Alice and Bob agree on the name of the item  
They hash and name and interpret the hash as numbers  

Bob adds this number to Alice’s public key and pays to it  
This process is called key tweaking and the number is knows as tweak  
Alice can spend the funds by tweaking the private key with the same number  
If a dispute were to arise Bob can reveal the tweak and public key that was used  