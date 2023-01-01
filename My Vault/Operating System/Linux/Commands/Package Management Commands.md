### Install .deb Files

````shell
dpkg -l # List Installed Packages

dpkg -i <filename> # Install .deb Package
apt install -f # Install Dependencies
````

Deb packages can be installed with apt as well

### Update System

````shell
sudo apt update
sudo apt upgrade # Updates Packages, Installs new Dependencies
sudo apt full-upgrade # Update Packages, Installs new Dependencies, Removes Broken/ Unused Packages

apt-key adv --keyserver hkp://keys.gnupg.net --recv-keys <key-last-8-char>
````

### View Package Information

````shell
# Edit Repo List
sudo apt edit-sources

# Search package with specified name
apt search <package-name>

# View package and its dependencies
apt show <package-name>

# List at available packages
apt list [-a] <package-name>
apt list --installed
````

### View Package for Library

````bash
apt install apt-file
apt-file update

# Find package that installs library
apt-file find <library-name>
# View files in a package
apt-file list <package-name>
````

### Remove Packages

````shell
sudo apt remove <package-name>
sudo apt purge <package-name> # Remove User data as well
sudo apt autoremove # Remove old unused files from apt cache
````
