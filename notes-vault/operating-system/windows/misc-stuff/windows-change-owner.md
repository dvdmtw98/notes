---
title: Windows Change Owner
tags:
  - windows
  - command
  - access
  - security
date: 2025-02-06 12:28:04 -0600
updated: 2025-02-06 13:14:42 -0600
---

### App (Package) Information

```powershell
Get-AppxPackage > AppDetails.txt
```

[Starting "Store App" from CMD](https://answers.microsoft.com/en-us/windows/forum/windows_10-windows_store/starting-windows-10-store-app-from-the-command/836354c5-b5af-4d6c-b414-80e40ed14675)

### Change Owner

This command can be used to access folders owned by `TrustedInstaller`  
To use the command the user has to have “Take Ownership” permission  

```powershell
# Change Owner to current user
takeown /f "C:\Program Files\WindowsApps" /r

# Change Owner to a different user
icacls "C:\Program Files\WindowsApps" /setowner "DOM\user" /t /l
```

To change ownership using GUI:
Right-click Folder → Properties → Security → Advanced  

Use the Change button beside the Owner  
Enter the name of the user and click on Check Name

![[windows-change-ownership.png|400]]

### View Permissions

`icacls`: Identity Control Access Control List(s)

```powershell
icacls "C:\Users"
```

| Code | Permission     |
| :--- | :------------- |
| `F`  | Full Control   |
| `M`  | Modify         |
| `RX` | Read & Execute |
| `R`  | Read           |
| `W`  | Write          |

By default the permissions are inherited by the children objects

| Code | Name                  | Description                     |
| :--- | :-------------------- | ------------------------------- |
| `I`  | Inheritance           | Permission received from parent |
| `OI` | Object Inheritance    | File will inherit permissions   |
| `CI` | Container Inheritance | Folder will inherit permissions |

```powershell
icacls C:\foo /grant "DOM\user:(OI)(CI)(F)"
icacls C:\foo /grant "DOM\user:(OI)(CI)(R,WO)"
```

`/remove` can be used to remove permission

[icacls \| Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls)