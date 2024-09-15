---
title: Binary Search Tree
tags:
  - data-structure
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

All nodes to the left of root node must have value less than Root node  
All nodes to the right of root node must have value greater than Root node  
A node can only have up to 2 children  
BST maintains the order/ relation of the elements

### Uses

Implement Map and ADTs like AVL Trees, Splay Trees, Red Black Trees  
Binary Heaps  
Syntax Trees

### Time Complexity

| Operation | Average   | Worst |
| --------- | --------- | ----- |
| Lookup    | O(log(n)) | O(n)  |
| Insert    | O(log(n)) | O(n)  |
| Delete    | O(log(n)) | O(n)  |

O(n) : When the Tree in a Straight Line (Linked List)/ Unbalanced Tree  
To get the log(n) time complexity the tree needs to be balanced

### Tree Traversal

<u>Preorder</u>  
Root -> Left -> Right

<u>Inorder</u>  
Left -> Root -> Right  
If performed on BST gives values in increasing order

<u>Postorder</u>  
Left -> Right -> Root

<u>Level Order</u>  
Perform BFS. Visit Element add Children to Queue
