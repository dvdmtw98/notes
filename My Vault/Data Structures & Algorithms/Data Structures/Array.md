---
title: Array
---

Stored as contagious chunks in memory  
Has the smallest footprint of all the Data Structures  
Array Lookup : `addr(a[i]) = addr(a[0]) + i*size(object)`

Arrays support Cache Locality which technically makes them faster than Linked List that is scattered all over memory

### Application

Temporary Object Storage  
Buffer  
Lookup Tables  
Return Multiple values from Function  
Dynamic Programming

### Time Complexity

|           | Static Array | Dynamic Array |
| --------- | ------------ | ------------- |
| Lookup    | O(1)         | O(1)          |
| Search    | O(n)         | O(n)          |
| Insertion | N/A          | O(n)          |
| Appending | N/A          | O(1)\*        |
| Deletion  | N/A          | O(n)          |

When dynamic array has to be grown in size to accommodate new elements append operation is O(n)