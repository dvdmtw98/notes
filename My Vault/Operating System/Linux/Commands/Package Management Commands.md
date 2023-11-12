---
tags: [os, linux, command]
---

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
# Update Packages, Installs new Dependencies, Removes Broken/ Unused Packages
sudo apt full-upgrade

apt-key adv --keyserver hkp://keys.gnupg.net --recv-keys <key-last-8-char>

sudo pacman -Syu
# Update AUR Packages
sudo yay -Syu
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

### View Package for Library

```bash
apt install apt-file
apt-file update

# Find package that installs library
apt-file find <library-name>
# View files in a package
apt-file list <package-name>
```

### Remove Packages

```shell
sudo apt remove <package-name>
# Remove User data as well
sudo apt purge <package-name>
# Remove old unused files from apt cache
sudo apt autoremove

sudo pacman -R <package-name>
# Remove Orphaned Packages
pacman -Qqtd | sudo pacman -Rns -
```
