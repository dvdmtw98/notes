---
title: Bitcoin Digital Signature
tags:
  - blockchain
  - cryptography
date: 2024-10-09 11:48:24 -0500
updated: 2024-10-10 09:37:42 -0500
---

Signature is created using transaction commitment (hash) and senders private key  
$Sig = F_{sig}(F_{hash}(m), x)$  
$F_{sig}$ : Signing Algorithm

Schnorr and ECDSA both produce Sig that has two components  
These values are converted into a serialized byte stream  
ECDSA signatures are stored as DER (Distinguished Encoding Rules)  
To verify a signature we require the message (serialized), signature and public key  

### SIGHASH Types

The signature can commit to the entire transaction or only to some inputs/outputs  
This commitment is represented using the `SIGHASH` flag  

`ALL`: Sign all inputs and outputs  
`NONE`: Sign all inputs but none of the outputs  
`SINGLE`: Sign all inputs and only outputs that have the same index  

`ANYONECANPAY`: Can be combined with all the above and only signs one input

`ALL|ANYONECANPAY`: Sign one input and all outputs  
`NONE|ANYONECANPAY`: Sign one input and no outputs  
`SINGLE|ANYONECANPAY`: Sign one input and the output with same index

### Schnorr Signature

<u>Provable Security</u>  
Depends on the difficulty to some Discrete Logarithm Problems (DLP) and the ability of hash function to generate unpredictable values  

<u>Linearity</u>  
$F(x + y + z) = F(x) + F(y) + F(z)$ : Additivity   
$F(a \times x) = a \times F(x)$ : Homogeneity of degree 1  

<u>Batch Verification</u>  
Allows to verify multiple signatures at the same time quicker than performing the verification one at a time  

#### Key Generation

x: Private Key (Number chosen at random)  
G: Generator Point on the EC  
xG: Private Key (Calculated using EC multiplication)  

For Bitcoin the value of G is fixed  
Even though the value of G is known the value of Alice’s private key cannot be derived from the public key because of difficulty of DLP  
Alice cannot give x to Bob to verify that the Public key

#### Signature Generation

k: Random Number (Private Nonce)  
Multiply with G to produce kG (Public Nonce)  

Alice chooses message m (transaction data)  
e = Hash(kG || xG || m). This is the challenger scalar  
Alice calculates s = k + ex  
kG and s forms Alice’s signature  
These 2 components are shared with anyone who wants to verify the signature

#### Signature Verification

For verification full nodes can computer sG using s that is shared  
$sG == kG + Hash(kG\ ||\ xG\ ||\ m) \times xG$  
If the above is valid the full nodes can be sure Alice knows x  
The above expression is a scaled up version of Alice’s private key

#### Signature Serialization

kG is a point on the curve. Has co-ordinates (x, y)  
Only the x co-ordinate is required so only the value of x is stored  
Both values are 32 bytes long  
They are serialized as kG followed by s giving a 64 byte signature

#### Scriptless Multi-Sign

Alice and Bob decide to work together to sign a message  
Alice generates yG where y is her private key  
Bob generates zG where z is his private key  
xG = yG + zG (Aggregate public key)  

Alice choses a random private nonce a and Bob choses a random private nonce b  
They generated there random public nonce aG and bG  
kG = aG + bG (Aggregate public nonce)  

Challenge scalar: e = Hash(kG || xG || m)  
Alice generates the scalar q = a + ey and Bob generates the scalar r = b + ez  
The scalars are added together s = p + r  
The signature is (kG, s)  

$sG == kG + Hash(kG || xG || m) \times xG$ (Verification)
