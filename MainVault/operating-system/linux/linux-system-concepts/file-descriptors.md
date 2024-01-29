---
tags:
  - os
  - linux
title: File Descriptors
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 21:58:42 -0600
---

File Descriptor is an index into the File Descriptor Table

#### Descriptor Table
Table that keeps track of all the files accessed used by the process  
Every process has its own descriptor table  
Descriptors point to an entry in the open file table

#### Open File Table
Global table in the kernel (Not mentioned per process)  
Whenever an file is opened an entry is added in this table

Contains current file position  
Count of processes pointing to the file  
Entry in open file table points to a entry in the v-node table

#### v-node Table
It is an global table  
Contains information about the file on the disk  
It stores file permissions, file size, file type information

It is an in-memory abstraction of i-node that is used to access files  
v-node table can sometimes even hold an reference to the i-node which ha the actual information about the file

An forked process will have new set of file descriptors (as its a new process)  
But these descriptors point to the same entry in the open file table as the parent
