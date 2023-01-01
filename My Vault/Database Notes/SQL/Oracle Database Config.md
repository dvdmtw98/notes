### Oracle Database 11g

Go to services.msc and set the below services to manual and then from CMD/ PowerShell run the following commands

````batch
net start OracleServiceORACLE
net start OracleOraDb11g_home1TNSListener
net start OracleDBConsoleOracle
net start OracleMTSRecoveryService
````

<https://localhost:1158/em> (Enterprise Manager)  
D:\Oracle\David\product\11.2.0\dbhome_1 (Oracle Home)  
D:\Oracle\David\product\11.2.0\dbhome_1/deinstall/deinstall (Uninstall Oracle)

---
