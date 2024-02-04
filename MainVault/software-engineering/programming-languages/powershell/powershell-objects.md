---
title: PowerShell Objects
tags:
  - scripting
  - powershell
date: 2024-02-02 22:28:43 -0600
updated: 2024-02-03 12:17:20 -0600
---

The commands that can be executed from PS are <u>not all cmdlets</u>  
Some of the commands are executes that are present on the system  

The results from cmdlets is always going to be returned as **objects**  
PS objects like objects in other languages they have Properties and Methods
Commands that are not cmdlets will return its result as a string  

The **`Get-Member`** gives us details about an objects attributes

```powershell
Get-Service Spooler | Get-Member
```

![[ps-get-member-result.png|600]]

```powershell
Get-Process | Select-Object -Property Name,@{name="ProcId";Expression={$_.Id}}
```

**`$_`**: Current Object  
**`@{}`**: Create a Hash Table

In place of **`$_`** we can also use **`$PSItem`**

![[ps-cmdlet-property-type.png|500]]

**ByPropertyName**  
If the object that is received as input contains a property called "Id" it will automatically get mapped to the **`-Id`** property

**ByValue**  
If the object that is receives as input contains a property of type **`System.Diagnostics.Process[]`** it will automatically get mapped to the **`-InputObject`** property
