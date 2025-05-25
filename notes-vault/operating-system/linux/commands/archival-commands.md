---
title: Archival Commands
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-02-21 15:53:02 -0600
---

### Archive Files

````shell
tar -cvf archive_name.tar input-file # Archive Files
tar -xvf archive_name.tar # Extract Files
tar -tvf archive_name.tar # List Content of Archive
````

### Compress/ Decompress Files

````shell
gzip filename # Compress File

gzip -d file_name.gz # Decompress File
gunzip file-name.gz
````

Zip files can decompressed using the `unzip` command  

> [!NOTE]
> For using "bzip2" replace gzip with bzip2 and change extension to .bz2 in the above commands

### Archive and Compress Files

````shell
tar -zcvf archive_name.tar.gz input-file # Compress Archive
tar -zxvf archive_name.tar.gz # Uncompressing Archive
tar -ztvf archive_name.tar # List Content
````

gzip cannot compress directories  
Archives are used to convert directories into an single file  
Gzip internally uses the LZ777 and Huffman Coding (Deflate) to compress files
