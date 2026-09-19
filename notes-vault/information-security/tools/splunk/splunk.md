---
title: Splunk
tags:
  - security
  - splunk
  - siem
date: 2024-01-28 14:15:56 -0600
updated: 2026-09-19 16:18:50 +0530
---

### Splunk Administration

- [[splunk-architecture|Splunk Architecture]]
- [[splunk-license-management|Splunk License Management]]
- [[splunk-configuration-files|Splunk Configuration Files]]

### Splunk User

- [[splunk-apps|Splunk Apps]]
- [[splunk-search|Splunk Search]]
	- [[splunk-commands|Splunk Commands]]
	- [[splunk-command-limits|Splunk Command Limits]]
	- [[splunk-subsearch|Splunk Subsearch]]
	- [[splunk-lookups|Splunk Lookups]]
- [[splunk-visualization|Splunk Visualization]]
- [[splunk-knowledge-objects|Knowledge Objects]]
	- [[splunk-data-model|Splunk Data Model]]
- [[splunk-rest-api|Splunk Rest API]]

---

### Reports & Alerts

Scheduled Report priority can only be set by the admin  
Scheduled Reports always Run as Owner

Alerts: Scheduled or Real-time  
Real-time alert queries are executed continuously in the background   

Actions can be triggered when a Scheduled Report or Alert is executed.  
Alert is the recommended option when results have to be sent over email.  

### Splunk CLI

All Splunk commands have to be executed from the `bin` directory.  

```bash
cd $SPLUNK_HOME/bin
```

```bash
# Start Splunk
splunk start

# Servername
splunk show servername
splunk set servername splunk-idx01

# License Management
splunk add licenses <path_to_license>/<license_name>.xml
splunk list licenses
```

On Windows systems firewall is required to access Web UI on a remote system.

```powershell
Get-NetTCPConnection -LocalPort 8000 -State Listen

New-NetFirewallRule `
    -DisplayName "Splunk Web 8000" `
    -Direction Inbound `
    -Protocol TCP `
    -LocalPort 8000 `
    -Action Allow
```

### Shortcuts

`Ctrl + \` & `Ctrl + Shift + F`: Format query  
`Shift + Enter`: Create newline  
`Ctrl + Shift + e`: Expand the search (Expands all alias/macros)  
