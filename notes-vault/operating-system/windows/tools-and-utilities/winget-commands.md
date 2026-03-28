---
title: Winget Commands
tags:
  - os
  - windows
  - tool
date: 2024-01-28 14:15:56 -0600
updated: 2026-03-22 20:38:18 +0530
---

### Install Packages
It is recommended to install/remove packages using its ID.  

```bash
# Search Package
winget search <Search-Term>

# Install Package
winget install <Package-Name>
winget install --id <Package-ID>

# Remove Package
winget uninstall --id <Package-ID>
```

### Update Packages

```bash
# List all packages
winget list

# List packages with updates
winget list --upgrade-available [--include-pinned]
winget upgrade

# Update all packages
winget upgrade --all --accept-package-agreements

# Upgrade a specific package
winget upgrade --id <Package-ID>
```

### Pinning Apps
Upgrade of packages can be prevented by pinning them.  
Pinning can also be used to restrict the upgrades to only minor versions.  

```bash
# Pin a Package
winget pin add --id <Package-ID>
winget pin add --id <Package-ID> --version 18.*

# List Pinned Apps
winget pin list
```