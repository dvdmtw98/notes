---
tags:
  - security
  - password
title: Hashcat
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Used for performing offline password cracking

````bash
hashcat -a <attack-mode> -m <hash-type> \
	-o <output-file> <hashes-file> <wordlist>
````

**Flags**  
`-r`: Specify combinator rules file (Rule File : /usr/share/hashcat/rules)  
`--force`: Ignore warnings

Default attack mode : 0  
When output is not specified the results are saved in a` .pot` file

[example\_hashes \[hashcat wiki\]](https://hashcat.net/wiki/doku.php?id=example_hashes)

For cracking passwords of rar/ zip files the hash has to be extracted from the file  
[[john-the-ripper|John the Ripper]] utilities (zip2john/ rar2john) can extract these hashes  
When using John tools the output file needs to be modified to only contain the hash type and the actual hash
