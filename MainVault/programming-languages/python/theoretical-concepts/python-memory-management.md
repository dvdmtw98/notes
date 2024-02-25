---
tags:
  - programming
  - python
  - software
title: Python Memory Management
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Reference Counting

Internally every object in Python holds three things : Its type, value and reference count  
The reference count is this table is incremented by 1 for each new reference of the object  
If the value of reference becomes zero the object is considered as a dead object and is removed by the garbage collector

### Garbage Collection

There are two main types of garbage collection:
* Reference Counting
* Tracing (Mask and Sweep)

Python uses reference counting for garbage collection along with generational garbage collection algorithm  
Weak Reference are not tracked by the garbage collector  
Reference counting garbage collection is not thread safe and cannot detect cyclic references hence generation algorithm is also required  
GIL exists in Python to prevent multiple threads from trying to change the reference count of objects at the same time

Java garbage collector is uses Mark and Sweep algorithm, where the objects that cannot be reached are marked as dead (reference count is 0) and are removed from memory when a certain threshold is reached

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/F6u5rhUQ6dU?si=OQNpfwwe4qYGCE0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CLW5Lyc1FN8?si=1YL6sqHaMdiDY5Lr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
