---
tags:
  - security
  - password
title: Hydra
date: 2024-01-28 14:15:56 -0600
updated: 2024-04-25 22:35:11 -0500
---

Used for performing online password cracking

````bash
# Bruteforce Service
hydra -l <username> -P <password-list> <ip-address> <service-name>

# Bruteforce Website
hydra -l <username> -P <password-list> -f -v <ip-address> -s <port> http-post-form "/login.php:pin=^PASS^:Access denied"
# Username: ^USER^

# Redirect when Match is Found
hydra -l <username> -P <password-list> -f -v <ip-address> -s <port> http-post-form "/login.php:pin=^PASS^:S=302"
````

**Flags**  
`-L` : List of Usernames  
`-p` : Single Password  
`-t <num>` : Number of tasks to run in parallel (Default : 16)  
`-f`: Stop when watch is found

[How to Brute Force Websites & Online Forms Using Hydra | Infinite Logins](https://infinitelogins.com/2020/02/22/how-to-brute-force-websites-using-hydra/)

> [!NOTE]
> - For SSH set no. of parallel tasks (-t) to 4
> - On Kali Linux wide compatibility mode has to be enabled for cracking of SSH passwords of old systems
