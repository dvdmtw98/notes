---
title: Hydra
tags: [security, password]
---

Used for performing online password cracking

````bash
hydra -l <username> -P <password-list> <ip-address> <service-name>
````

**<u>Flags</u>**:  
-L : List of Usernames  
-p : Single Password  
`-t <num>` : Number of tasks to run in parallel (Default : 16)  

> [!NOTE]
> - For SSH set no. of parallel tasks (-t) to 4
> - On new versions of Kali wide compatibility mode needs to be enabled for online cracking of SSH passwords of old systems
