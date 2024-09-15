---
title: Binary Tree
tags:
  - data-structure
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 15:47:40 -0600
---

### Uses

DOM (Document Object Model)  
Social Media Comments  
AST (Abstract Syntax Tree)

### Properties

Each Node can have only 0,1 or 2 Nodes only  
Each Child can only have one parent  
Tree DS does not have any loops

**<u>Perfect Binary Tree</u>**  
On each level the no. of nodes double  
Nodes on last level = Nodes on other level + 1  
No. of Nodes on a level = $2^h - 1$, where h is level  
Half of the nodes of the Perfect Binary Tree are always at the last level

### Types

#### Perfect Binary Tree
All the terminal nodes have 2 children and all leaf nodes are at the same level

````bash
           18
       /       \  
     15         30  
    /  \        /  \
  40    50    100   40
````

#### Full Binary Tree
Every node has 0 or 2 children

````bash
         18
       /    \   
     15      20    
    /  \       
   40   50   
  /  \
 30  50
````

#### Complete Binary Tree
All levels are completely filled except possibly the last level and the last level has all keys as left as possible

````bash
            18
       /         \  
     15           30  
    /  \         /  \
  40    50     100   40
 /  \   /
8   7  9 
````
