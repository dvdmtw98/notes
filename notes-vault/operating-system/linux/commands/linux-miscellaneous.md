---
tags:
  - os
  - linux
  - command
title: Linux Miscellaneous
date: 2024-01-28 14:15:56 -0600
updated: 2025-03-11 15:29:55 -0500
---

Complete Command in Editor :` Ctrl + X + E`  
Set Default Editor : `$EDITOR`

Open a file in its default application : `xdg-open` 

Redirect Errors to Output File : `ls -lah file.txt not-here > output.txt 2>&1`
Read input from user till EOF not reached : `cat << EOF > <filename>`

The `--` operator is used as argument separator  
`cd -- -foo` : Change directory to -foo folder (Without the argument separator -foo would have been interpreted as `-f -o -o`)

### Fork Bomb

```bash
:(){ :|: & };:
```

 > [!INFO]  
 > * Configure Limits: `/etc/security/limits.conf`
 > * This restriction does not work on the root user

### Flatpak Dark Theme

The following package has to be installed: `gnome-themes-extra`

```bash
# List all GTK3 Themes
flatpak search org.gtk.Gtk3theme

# Install Theme
flatpak install org.gtk.Gtk3theme.Adwaita-dark
```

[Quick Fixes for Flatpak Dark Mode Detection Issues](https://fariszr.com/flatpak-dark-mode-fix/)

### App Launch Scripts

System-wide: `/usr/share/applications`  
User-specific: `~/.local/share/applications`

User-specific launch scripts take precedence over system-wide scripts  
The system-wide scripts can be get reset on application update  
Application icons can be changed by editing the `.desktop` files  

### File Globing

````shell
ls project? # Single Character
ls *.sh # One or more character

touch foo{,2,5,10} # Expanded Form : touch foo foo2 foo5 foo10
# Cartesian Product Outputs
touch project{1,2}/src/test/test{1,2,3}.py
touch {foo,bar}/{a..j}

# Expand for all digits
ls /sys/bus/cpu/devices/cpu[0-9]*
````
