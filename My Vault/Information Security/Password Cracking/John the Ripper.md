---
title: John the Ripper
---

<u>List Supported Formats</u>

````bash
john --list=formats
````

<u>Cracking Zip/ Rar Files</u>

````bash
# Extract password hash
zip2john <filename> > output-file

# Uses John's default wordlist
john <hash-file> --format=zip
````

<u>Cracking using Custom Wordlist</u>

````bash
john <hash-file> --format=Raw-MD5 --wordlist <wordlist>
````

 > [!IMPORTANT]
 > * The hashes should be stored in a file for them to work with John
 > * The results of cracking are saved in `~/.john/` in a file with `.pot` extension