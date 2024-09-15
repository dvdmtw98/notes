---
title: Union Find
tags:
  - algorithm
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 15:46:32 -0600
---

### Uses

* Kruskal's Minimum Spanning Tree Algorithm
* Grid Percolation
* Network Connection
* Least Common Ancestor in Trees
* Image Processing

### Time Complexity

| Operation          |      |
| ------------------ | ---- |
| Construction       | O(n) |
| Union              | ∝(n) |
| Find               | ∝(n) |
| Get Component Size | ∝(n) |
| Check If Connected | ∝(n) |
| Count Components   | O(1) |

∝(n): Almost Constant Time (Need to use Path Compression)  
Path Compression: Make the Elements point to the Root Node of the Group

### Programs

#### Kruskal's Minimum Spanning Tree

* Sort Edges Ascending Edge Weight
* Walk through Sorted Edges look at the two Nodes the edge belongs to, if already unified don't include edge, otherwise include it and unify nodes
* Terminates when every Edge is processed or all vertices have been unified

### Operations

Randomly Assign mapping to each Object. Store Objects in an Array using the mapping

#### Union
Find Root Node of both Elements if they are different make one of the Root Node the parent of the other

#### Find
Find Root of the Component by following Parent Nodes until self-loop is not reached
   