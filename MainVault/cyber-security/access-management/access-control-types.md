---
tags:
  - security
  - access
  - management
title: Access Control Types
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is assumed that the system has a data owner/data manager/system admin who configures the access controls  
The goal is to restrict access to users who have a need to access/modify the information  
Admins should use principle of **least privilege**

Object: Files, Directories, etc.  
Subject: Users

### Access Control Matrix

Utilizes a 2D matrix to maintain the access control detail for each object and subject  
Object subject pairs that do not have access control are represented as empty cell

**Advantage**  
An easy and straightforward way to implementing access control

**Disadvantage**  
Will result in a very big matrix in modern system which are going to impossible for system administrators to setup

### Access Control List

Compresses each column of the Access Control Matrix into a single list  
Object subject pairs that do not have blank access control are not included 

**Advantage**  
Smaller size compared to Access Control Matrix. The size of each ACL will be equal to the no. of non-empty cells in the Matrix  
The ACL can be stored along with the object as metadata

**Disadvantage**  
No easy method to enumerate all the access controls for a subject. Every ACL list will need to be searched for the entry of the subject
