---
title: Bitcoin Legacy Address
tags:
  - cryptography
  - blockchain
date: 2024-09-27 23:31:02 -0500
updated: 2024-09-27 23:36:12 -0500
---

### Pay to Public Key Hash (P2PKH)

The early versions of Bitcoin allowed a sender to use the recipients IP Addresses instead of their Public Key to transfer funds  
Alice’s full node would connect directly to Bob’s full node and request his wallet for a public key. The wallet would generate a new public key for this transaction  

Alice’s wallet would create a transaction that has an output that pays to Bob’s key  
Bob can later spend the funds by creating a transaction that has input with his digital signature

```
# Output Script
<Bob's public key> OP_CHECKSIG

# Input Script
<Bob's signature>

# Processing Order
<Bob's signature> <Bob's public key> OP_CHECKSIG
```

To process the input and output scripts of a transaction that are placed on a stack  
The input is placed first followed by the output script  
`OP_CHECKSIG` function takes 2 inputs so it consumes the 2 values that are present below it on the stack  
The function checks if the public key and signature are related  
It also checks if the signature commits to the various fields in the transaction

This type of output is called “Pay to Public Key (P2PK)”  
This approach not widely used. New versions Bitcoin do not support this method  

#### Legacy Address Drawbacks

This legacy method had many downsides for one the receiver had to be online at the IP addresses entered by the sender in order for the public key to be fetched  
This also meant that the IP address had to be accessible from the internet this was not always possible  
The reason this approach was because was because the public keys is a very large number and it was not possible to share it easily

An alternative to sharing the public key is to share the commitment of a public key  
This is done using hash functions. The output is an commitment to the input value  
The output of SHA256 would produce a 256 bit (32 byte) result which is less than half the size of the Bitcoin public key  
This output is still quite long so its passed threw the RIPEMD160 hash function that produces an output that is 160 bit (20 byte) long  
This final result (hash) acts as the commitment for the input (public key)  

```
# Output Script
OP_DUP OP_HASH160 <Bob's commitment> OP_EQUAL OP_CHECKSIG

# Input Script
<Bob's signature> <Bob's public key>

# Processing Order
<sig> <pubkey> OP_DUP OP_HASH160 <commitment> OP_EQUALVERIFY OP_CHECKSIG
```

`OP_DUP` duplicates the value that is provided below it

```
<sig> <pubkey> <pubkey> OP_HASH160 <commitment> OP_EQUALVERIFY OP_CHECKSIG
```

`OP_HASH160` takes the previous value and calculates its hash (commitment)

```
<sig> <pubkey> <commitment> <commitment> OP_EQUALVERIFY OP_CHECKSIG
```

`OP_EQUALVERIFY` takes 2 inputs. It checks the the commitment provided and commitment calculated are the same.

```
<sig> <pubkey> OP_CHECKSIG
```

`OP_CHECKSIG` takes 2 inputs. It will check if the signature and public key are related

Using this approach Bob’s no longer has to share a very long string with Alice. But there is still a problem. Alice needs to ensure that she inputs the correct hash else the coins will be sent to an incorrect address.

#### Base58check Encoding

Base58 = Base64 without 0 (zero), O, l (lowercase L), I (Capital i) and “+” and “/”  
They were removed as they could be confused for other characters  
For extra security base58 encoding includes a 4 byte checksum with the data  
The checksum is derived from the hash of the data  
This prevents wallets from sending funds to nonexistent addresses

To convert a number to Base58 a prefix is added to the data (version byte)  
This values is double-SHA hashed. This produces a 32 byte result  
The 1st  bytes of of this result is used as the checksum. Added as footer  
This (prefix + data + checksum) is passed to the Base58 encoding function  

![[base58-encoding.png|500]]


In Bitcoin other information is also represented using Base58check  
For each of the data the data prefix changed  
Each data prefix causes the hash to be begin with the same value

![[base58check-prefix.png|500]]

### Pay to Script Hash (P2SH)

The output of an transaction can have constraints that have to be satisfied before the coins can be spent (e.g. require multiple signatures)  
In P2PK the only constraint required was the digital signature  
In P2SH various constraint like public key and time lock was supported  

For Alice to place the constraints she would first have to communicate with Bob to get the necessary data  
Providing this data directly is not feasible as data like public key are very long  

So similar to P2PK a commitment hash is created (redemption script)  
The hash is generated hashing using SHA256 followed by RIPEMD-160

Alice sends the coins to the redeem script provided by Bob  
When Bob wants to use the coins he needs to provided the redeem script (along with the data) that matches the input redeem script

This is also a legacy addressing approach and has been replaced by Bech32  
Legacy addresses were ditched as hash collisions were theoretical possible
