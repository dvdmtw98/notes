---
tags:
  - security
  - cryptography
title: RSA Algorithm
date: 2024-01-28 14:15:56 -0600
updated: 2024-10-05 12:45:16 -0500
---

RSA stands for Rivest-Shamir-Adleman (Name of the Creators of the algorithm)

#### Key Generation
(e, n) = Public Key  
(d, n) = Private Key

e: RSA Exponent  
n: RSA Modulus

#### Choose two prime numbers
p = 7  
q = 11

#### Compute n
$n = p \times q = 7 \times 11 = 77$

#### Compute ɸ(n)
[[eulers-totient-function|Eulers Totient Function]]

$\phi(n) = \phi(p \times q) = \phi(p) \times \phi(q)$  
$= (p - 1) \times (q - 1) = (7 - 1) \times (11 - 1) = 60$

#### Choose e
e should lie between $1 \leq e < \phi(n)$ and be [[relatively-prime-numbers|co-prime]] to $\phi(n)$

e = 13  
(e, n) = Public Key = (13, 60)

#### Determine d
$e \times d = 1 \mod \phi(n)$  
e and ɸ(n) here are coprime (Found in above step)

Then we can say d is an multiplicative inverse of e.  
The above equation can also be represented as : $d = e^{-1} \mod \phi(n)$

Calculating $e^{-1}$ without the knowledge of d (Private Key) is quite challenging   
Hence without knowing the private key it is practically impossible to decrypt the message 

$$d = \frac{((\phi(n) \times i) + 1)}{e}$$

We have to keep incrementing the value of i until we get an integer as the result  

$$d = \frac{((60 \times 8) + 1)}{13} = 37$$

(d, n) = Private Key = (37, 60)

#### Encryption and Decryption
[[modular-exponentiation|Modular Exponentiation]]

| Encryption                                                                            | Decryption                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| (e, n) = (13, 143) = Public Key<br>P = 13 = Plain Text                                    | (d, n) =  (37, 143) = Private Key<br>C = 52 = Cipher Text                                      |
| C = $P^{e} \mod n$, P < n<br>C = $13^{13} \mod 143$                                           | P = $C^d \mod n$<br>P = $52^{37} mod 143$                                                       |
| $C = [(13 \mod 143) \times (13^4 \mod 143) \times (13^8 \mod 143)] \mod 143$<br>C = 52 (Cipher Text) | $P = [(52 \mod 143) \times (52^4 \mod 143) \times (52^{32} \mod 143)] \mod 143$<br>P = 13 |

The Plain Text that is specified is the algorithm is the ASCII code of the character to be encoded
