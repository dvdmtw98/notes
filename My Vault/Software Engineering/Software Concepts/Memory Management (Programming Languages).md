---
title: Rust Ownership Model
---

### Garbage Collection

**Advantages**  
Error Free (GC takes care of memory management)  
Faster write times (Developer does not have to worry about memory)

**Disadvantages**  
No control over memory  
Slower and unpredictable runtime behavior (GC can occur at any point of time)  
Larger program size (GC needs to be included with code)

High Level Languages: Python, C#, Java, JavaScript

### Manual Memory Management

**Advantages**  
Granular control over memory  
Faster runtime (Can perform optimizations based on use case)  
Smaller program size

**Disadvantages**  
Error prone (Developer can introduce memory leaks and other security issues)  
Slower write times

Low Level Languages: C, C++

### Ownership Model

**Advantages**  
Control over memory  
_Mostly_ error free (Rust allows to disable memory checks)  
Faster runtime  
Smaller program size  

**Disadvantages**  
Slower write time. Steep learning curve

Low Level Language: Rust

---

[Demystifying memory management in modern programming languages - DEV Community](https://dev.to/deepu105/demystifying-memory-management-in-modern-programming-languages-ddd)