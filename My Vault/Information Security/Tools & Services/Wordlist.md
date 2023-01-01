Seclists/Discovery/Web-Content/common.txt : Useful for Web Directory Brute forcing
Rockyou.txt : Password Cracking

---

### Generate Wordlist

<u>Crunch</u>

````bash
crunch <min-len> <max-len> <character-set> -o <filename>

crunch 3 6 -o wordlist1.txt
crunch 3 5 abcdef12345678 -o wordlist2.txt
crunch 6 8 123abc$ -o wordlist3.txt -t a@@@@b
````

**<u>Flags</u>**:  
-o : Output File  
-t @@god@@@ : Pattern (@ : Lowercase | , : Uppercase | % : Numbers | ^ : Symbols)

<u>Mentalist</u>

The Mentalist uses Append, Perpend, Substitution, Case Transformations to generate various combinations for the base wordlist  
CUPP : Generate Base Paswords  
Mentalist : Password Mangler

---

**<u>References</u>**:

* [GitHub - danielmiessler/SecLists: SecLists is the security tester's companion. It's a collection of multiple types of lists used during security assessments, collected in one place. List types include usernames, passwords, URLs, sensitive data patterns, fuzzing payloads, web shells, and many more.](https://github.com/danielmiessler/SecLists)
* [GitHub - jeanphorn/wordlist: Collection of some common wordlists such as RDP password, user name list, ssh password wordlist for brute force. IP Cameras Default Passwords.](https://github.com/jeanphorn/wordlist)
* [GitHub - Mebus/cupp: Common User Passwords Profiler (CUPP)](https://github.com/Mebus/cupp)
* [GitHub - sc0tfree/mentalist: Mentalist is a graphical tool for custom wordlist generation. It utilizes common human paradigms for constructing passwords and can output the full wordlist as well as rules compatible with Hashcat and John the Ripper.](https://github.com/sc0tfree/mentalist)
