---
title: Windows File Permissions
tags:
  - windows
  - command
  - access
  - security
date: 2025-02-06 12:28:04 -0600
updated: 2025-04-01 18:44:15 -0500
---

### Package Information

```powershell
Get-AppxPackage > AppDetails.txt
```

[Starting "Store App" from CMD](https://answers.microsoft.com/en-us/windows/forum/windows_10-windows_store/starting-windows-10-store-app-from-the-command/836354c5-b5af-4d6c-b414-80e40ed14675)

### Change Owner

#### Using CLI

To use `takeown` the user has to have “Take Ownership” permission.  

```powershell
# Change Owner to current user
takeown /f "C:\Program Files\WindowsApps" /r

# Change Owner to a different user
icacls "C:\Program Files\WindowsApps" /setowner "DOM\user" /t /l
```

#### Using GUI

Right-click Folder → Properties → Security → Advanced  

Use the Change button beside the Owner  
Enter the name of the user and click on Check Name

![[windows-change-ownership.png|400]]

### Permissions

#### View Permissions

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

#### Change Permissions

```powershell
icacls C:\foo /grant "DOM\user:(OI)(CI)(F)"
icacls C:\foo /grant "DOM\user:(OI)(CI)(R,WO)"
```

`/remove` can be used to remove permission

[icacls \| Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/icacls)

### Attributes

#### View Attributes

```powershell
# List all objects (including Hidden)
Get-ChildItem "C:\path\to\folder" -Force

# Object Attributes
Get-Item "C:\path\to\file" | Format-List Attributes
(Get-Item "C:\path\to\file").Attributes
```

`-Hidden`: List hidden objects only

![[windows-attributes-2.png|600]]

![[windows-attributes-1.png|520]]

| Character | Meaning                                           |
| --------- | ------------------------------------------------- |
| `d`       | Directory                                         |
| `a`       | Archive (file is flagged for backup or archiving) |
| `r`       | Read-only (cannot be modified easily)             |
| `h`       | Hidden (not shown in Explorer by default)         |
| `s`       | System (used by the OS, often protected)          |

All normal files will have the `a` flag set. All objects have at least one attribute.  
The `s` flag will make a file protected, the file will be hidden in Explorer.  

#### Change Attributes

```powershell
# Add attributes
Set-ItemProperty -Path "C:\path\to\file" `
	-Name Attributes -Value "Hidden, ReadOnly"

# Reset attributes
Set-ItemProperty -Path "C:\path\to\file" -Name Attributes -Value Normal

# Remove Attributes
(Get-Item "C:\path\to\file").Attributes -= "Hidden, System"
```

| Attribute  | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `ReadOnly` | Prevents a file from being modified.                        |
| `Hidden`   | Hides the file from standard directory listings.            |
| `System`   | Marks the file as a system file, used by the OS.            |
| `Archive`  | Indicates the file has been modified since the last backup. |
| `Normal`   | Reset object attributes.                                    |

[FileAttributes Enum (System.IO) \| Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.io.fileattributes?view=net-9.0)

```powershell
# Works with CMD
attrib +h "C:\path\to\file.ico"
attrib -h -s "C:\path\to\file.ico"
```

[attrib \| Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attrib)
