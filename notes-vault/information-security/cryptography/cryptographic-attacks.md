---
title: Cryptographic Attacks
tags:
  - security
  - cryptography
  - attack
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Downgrade Attacks
Aims to force a system into using a weaker or older cryptographic protocol  
e.g. POODLE attack (targeted SSL v3)

### Collision Attacks
Aims to find two inputs that produce the same hash output  
e.g. Birthday Attack

### Quantum Computing
A computer that uses quantum mechanics to generate and manipulate quantum bits (qubits) in order to access enormous processing power  
It is designed to be used in very specific use cases such as complex math calculations

#### Quantum Communication
A communication network that relies on qubits made of photons (light) to send multiple combinations of ones and zeros simultaneously which results in tamper resistant and extremely fast communications

#### Qubit
A quantum bit composed of electrons or photons that can represent numerous combinations of ones and zeroes at the same time through superposition

#### Post-quantum Cryptography
A algorithm that can be implemented using today's classical computers but is also impervious to attacks from future quantum computers  
**1st Method:** Increase key size  
**2nd Method**: Newer algorithms (lattice-based & super singular isogeny key)

##### Current recommendation  
**General Encryption**: CRYSTALS-Kyber algorithm  
**Digital Signature**: CRYSTALS-Dilithium, FALCON, SPHINCS+
