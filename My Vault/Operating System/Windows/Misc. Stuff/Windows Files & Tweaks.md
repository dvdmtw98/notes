### Important File Locations

**Host File**  
`C:\Windows\System32\drivers\etc\hosts` 

**SAM Database Location**  
`C:\Windows\System32\config\SAM`

---

### Start Menu Shortcut Location

`C:\ProgramData\Microsoft\Windows\Start Menu\Programs`

`C:\Users\David\AppData\Roaming\Microsoft\Windows\Start Menu\Programs`

---

### Windows Registry Tweaks

**Increase IRPStackSize**  
Could make Internet Faster       `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters`  
New → DWORD (32-bit) → IRPStackSize → Value : 32 (Decimal)

---

### Windows Services to Disable

1. Connected User Experiences and Telemetry
2. SysMain (Previous called PreFetch)

Task Scheduler -> Microsoft -> Windows -> App Experiences (Disable all 4 Tasks)  
Task Scheduler -> Microsoft -> Windows -> Customer Experience Improvement Program (Disable both the tasks)

---

### Startup Program Locations

1. **<u>User Startup Locations</u>**  
   shell:startup (Run Menu)  
   `Computer\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run`

2. **<u>All User Startup Location</u>**  
   shell:common startup (Run Menu)  
   `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`

---

### Enable S3 Sleep

Modern PCs use S0 sleep (Which sometimes drains battery when its in sleep mode)

```powershell
powercfg /a

reg add HKLM\System\CurrentControlSet\Control\Power /v PlatformAoAcOverride /t REG_DWORD /d 0 /f
```

The `powercfg` command should show that S3 sleep is supported on device
On some devices in the BIOS there will be option to enable this feature

---

[Windows Index](../Windows%20Index.md)
