---
title: Folders as Virtual Drive
tags: [os, windows, command]
---

### subst Command

````batch
:: Mounts the Test folder as X Drive
subst X: D:UsersTest 

subst X: /D
````

 > [!NOTE]
 > * This command is not persistent i.e. on restart the virtual drive will be removed
 > * Another issue is that the drive name cannot be changed. It takes the parent drive name

**Solution 1**: Create a startup script

* Open run and type "shell:startup"
* Create and create a new bash script

**Solution 2**: Add program in Registry

* Navigate to -> "`Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\DOS Devices`"
* Create a new string value
* The Value will be the drive letter we require (e.g. X:)
* The Data needs to be the path in UNC Path format "`??D:UsersTest`"

---

### net use Command

````batch
:: Create persistent drive
net use X: /persistent:yes 

net use X: /delete
````

 > [!NOTE]
 > * This method mounts the folder as a network drive
 > * It allows us to create the drive name as well