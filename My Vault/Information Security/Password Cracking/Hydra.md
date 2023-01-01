Used for online cracking i.e. to try and guess the password for the service

````bash
hydra -l <username> -P <password-list> <ip-address> <service-name>
````

**<u>Flags</u>**:  
-L : List of Usernames  
-p : Single Password  
`-t <num>` : Number of tasks to run in parallel (Default : 16)  
-s : Service Port (If running on non-default port)

When username is known make use of "rockyou" wordlist for cracking password
