RSA stands for Rivest-Shamir-Adleman (Name of the Creators of the algorithm)

### Key Generation

(e, n) = Public Key  
(d, n) = Private Key

### Choose two prime numbers

p = 7  
q = 11

### Compute n

n = p \* q = 7 \* 11 = 77

### Compute ɸ(n)

[Eulers Totient Function](Math%20Concepts/Eulers%20Totient%20Function.md)

ɸ(n) = ɸ(p \* q) = ɸ(p) \* ɸ(q)  
= ( p -1 ) \* (q - 1) = (7 - 1) \* (11 - 1) = 60

### Choose e

e should lie between 1 <= e < ɸ(n) and be [co-prime](Math%20Concepts/Relatively%20Prime%20%28Co-prime%29%20Numbers.md) to ɸ(n)

e = 13  
(e, n) = Public Key = (13, 60)

### Determine d

e * d = 1 mod ɸ(n)  
e and ɸ(n) here are coprime (Found in above step)

Then we can say d is an multiplicative inverse of e.  
The above equation can also be represented as : d = $e^{-1} \mod \phi(n)$

d = ((ɸ(n) * i) + 1) / e

i is an integer from 1 ....  
We have to keep incrementing the value of i till we don't get an integer as result  
d = ((60 * 8) + 1) / 13 = 37

(d, n) = Private Key = (37, 60)

---

### Encryption and Decryption

[Modular Exponentiation](Math%20Concepts/Modular%20Exponentiation.md)

| Encryption                                                                           | Decryption                                                                                |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| (e, n) = (13, 143) = Public Key<br/>P = Plain Text                                    | (d, n) =  (37, 143) = Private Key<br/>C = Cipher Text                                      |
| C = $P^e$ mod n, P < n<br/>C = 1313 mod 143                                          | P = $C^d$ mod n<br/>P = 5237 mod 143                                                       |
| C = \[(13 mod 143)($13^4$ mod 143)($13^8$ mod 143)\] mod 143<br/>C = 52 (Cipher Text) | P = \[(52 mod 143 = 52)($52^4$ mod 143 = 26 )($52^{32}$ mod 143 = 91)\] mod 143<br/>P = 13 |

The Plain Text that is specified is the algorithm is the ASCII code of the character to be encoded
