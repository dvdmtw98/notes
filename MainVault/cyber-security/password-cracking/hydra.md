---
tags:
  - security
  - password
title: Hydra
date: 2024-01-28 14:15:56 -0600
---

Used for performing online password cracking

````bash
# Bruteforce Service
hydra -l <username> -P <password-list> <ip-address> <service-name>

# Bruteforce Website
hydra -l <username> -P <password-list> -f -v <ip-address> http-post-form "/login.php:pin=^PASS^:Access denied" -s <port>
````

**Flags**  
`-L` : List of Usernames  
`-p` : Single Password  
`-t <num>` : Number of tasks to run in parallel (Default : 16)  

[How to Brute Force Websites & Online Forms Using Hydra | Infinite Logins](https://infinitelogins.com/2020/02/22/how-to-brute-force-websites-using-hydra/)

> [!NOTE]
> - For SSH set no. of parallel tasks (-t) to 4
> - On Kali Linux wide compatibility mode has to be enabled for cracking of SSH passwords of old systems
