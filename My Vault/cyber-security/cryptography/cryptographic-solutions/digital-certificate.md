---
tags:
- security
- cryptography
title: Digital Certificate
---

Digitally signed electronic document that binds a public key with a user's identity

#### Wildcard Certificate
Allows all the subdomains to use the same public key certificate  
Easier to manage and maintain

##### Subject Alternative Name (SAN)
Field in the certificate that specifies additional domains and IP addresses are going to be supported  
Useful when one certificate has to be applied to two different domains

#### Single-Sided Certificate
Only requires the server to be validated

#### Dual-Sided Certificate
Requires both the server and the user to be validated

#### Self-Signed Certificate
Digital certificate that is signed by the same entity whose identity it certifies

#### Third-Party Certificate
Digital certificate issued and signed by a trusted certificate authority (CA)

##### Root of Trust
Each certificate is validated using the concept of chain of trust that moves from the bottom all the way to the top of the chain
e.g. Verisign, Amazon, Google, Cloudflare

##### Certificate Authority
Trusted third part who is going to issue these digital certificates

##### Registration Authority
Requests identifying information from the user and forwards that certificate request up to the certificate authority to create the digital certificate

##### Certificate Signing Request (CSR)
A block of encoded text that contains information about the entity requesting the certificate  
The private key that is used to encrypt the CSR never leaves the requesters system  
CSR includes Organization Name, Domain Name, Locality, Country

##### Certificate Revocation List (CRL)
Servers as an online list of digital certificates that the certificate authority has already revoked

##### Online Service Status Protocol (OCSP)
Allows to determine the revocation status of any digital certificate using its serial number  
More efficient lookup that CRL but does not use encryption

##### OCSP Stapling
Allows the certificate holder to get the OCSP record from the server at regular intervals
Allows to make the request during TLS handshake

##### Public Key Pinning
Allows an HTTPS website to resist impersonation attacks from users who are trying to present fraudulent certificates

##### Key Escrow Agent
Holds a secure copy of the user's private key

##### Key Recovery Agent
Specialized type of software that allows the restoration of a lost or corrupted key
