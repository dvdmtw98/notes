---
title: Package Management
tags:
  - os
  - linux
  - command
date: 2024-01-28 14:15:56 -0600
updated: 2025-03-11 19:01:41 -0500
---

## Debian

### Install .deb Files

```shell
# List Installed Packages
dpkg -l

# Install .deb Package & Install dependencies
dpkg -i <filename> 
apt install -f
```

Deb packages can be installed with apt as well

### Update System

```shell
sudo apt update
# Updates Packages, Installs new Dependencies
sudo apt upgrade
# Update Package, Install new Dependencies, Removes Broken/ Unused Packages
sudo apt full-upgrade

# Adding key for Repository
apt-key adv --keyserver hkp://keys.gnupg.net --recv-keys <key-last-8-char>
```

### View Package Information

```shell
# Edit Repo List
sudo apt edit-sources

# Search package with specified name
apt search <package-name>

# View package and its dependencies
apt show <package-name>

# List at available packages
apt list [-a] <package-name>
apt list --installed
```

### Remove Packages

```shell
sudo apt remove <package-name>
# Remove User data as well
sudo apt purge <package-name>
# Remove old unused files from apt cache
sudo apt autoremove
```

## Arch

`pacman` can only update packages installed from the Arch Repo  
[pacman/Rosetta - ArchWiki](https://wiki.archlinux.org/title/Pacman/Rosetta)

Pacman Config: `/etc/pacman.conf`  
Pacman Hooks: `/etc/pacman.d/hooks`  

`yay` is an AUR Helper, manages packages from Arch Repo and AUR  
The `yay` command should not be prefixed with `sudo`

### Install Packages

```bash
# Search for package
[pacman|yay] -Ss <package-name>

# Install package
[pacman|yay] -S <package-name>

pacman -Q | less        # List Packages
pacman -Qs | less       # List Packages /w description

# List Packages /w dependencies (Arch & AUR)
pacman -Qi <package-name>
```

### Update Packages

```bash
# Update Packages
[pacman|yay] -Syu
```

### Remove Packages

```bash
# Remove Package
[pacman|yay] -Rns <package-name>

# Remove Pacman Cache
sudo paccache -r

# Remove Orphan & Build Artifacts
yay -Yc --noconfirm && yay -Sc --noconfirm
```

### Update Errors

PGP key invalid error

```bash
# Update the Keyring
sudo pacman -Sy archlinux-keyring

# Install the Updates
sudo pacman -Syu
```

## Flatpak

Flatpak can download apps from multiple repo. The default is `flathub`  

### Install Packages

```bash
# Search for package
flatpak search <package-name>

# Install package
flatpak install flathub <package-name>

# View Package Info
flatpak list
flatpak info <package-id>
```

### Update Packages

```bash
# Update Packages
flatpak update -y
```

### Remove Packages

```bash
flatpak uninstall <package-id>
# Config Directory
rm -rf ~/.var/app/<package-id>

# Remove Orphan & Build Artifacts
flatpak uninstall --unused -y
```
