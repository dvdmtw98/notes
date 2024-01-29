---
tags:
  - data-structure
title: Binary Heap
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 15:47:09 -0600
---

In Binary Heap each node can have at most only 2 child nodes  
Elements in Binary Heaps are added from left to right  
Heaps do not have concept of being Unbalanced (It is an Complete Tree)

Root Node >= Child Nodes (Max Heap)  
Root Node \<= Child Node (Min Heap)

### Uses

Dijkstra's Shortest Path Algorithm  
Find Next Best or Next Worst  
Huffman Coding  
BFS  
Prims Minimum Spanning Tree (MST)

### Time Complexity

| Operation | Worst     |
| --------- | --------- |
| Lookup    | O(n)      |
| Adding    | O(log(n)) |
| Remove    | O(log(n)) |

### Binary Heap Representation (Using Array)

Parent Node: `i`  
Left Child Node: `2i+1`  
Right Child Node: `2i+2`

### Heap Operations

#### Adding Elements
Add element at leaf position.  
Perform Bubbling Up i.e. Check if Element violates heap invariant if true swap with root until property satisfied

#### Pooling (Remove Root)
Swap Root with the last leaf node and delete last leaf node  
Perform Bubbling Down of Root Element until condition is not satisfied

#### Remove (Any Element)
Linear Search find element to remove and swap with last leaf element and remove last leaf node  
If Heap Invariant Satisfied from top perform Bubble Down else perform Bubble Up
