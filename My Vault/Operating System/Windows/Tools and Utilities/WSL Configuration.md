---
tags: [os, windows, tool]
---

### Moving WSL to a Different Drive

```batch
wsl --list -v

wsl --shutdown
wsl --terminate <distro-name>
```

<u>Exporting Distro</u>

````batch
mkdir D:\backup
wsl --export Ubuntu D:\backup\ubuntu.tar
````

> [!NOTE]
> For Docker it is sufficient to move docker-desktop-data. The docker-desktop will be recreated in C drive on restart even if moved it does not grow in size when using Docker so shouldn't be a problem

<u>Unregister the Distribution</u>

````batch
wsl --unregister Ubuntu
````

<u>Import the Distro</u>

````batch
mkdir D:\WSL
wsl --import Ubuntu D:\WSL D:\backup\ubuntu.tar
````

 > [!NOTE]
 > When Importing the image ensure that it is saved in its own directory

### Install & Update WSL

````batch
wsl --list --online (View all available Disto's)
wsl --install -d <Distro>
````

<u>Update WSL</u>

````batch
wsl --update
wsl --update --rollback
````

<u>WSL Information</u>

````batch
wsl --status
````

### Other WSL Commands

<u>Change Distro Default User</u>

[Set Default User for Windows Subsystem for Linux Distro in Windows 10 | Tutorials](https://www.tenforums.com/tutorials/128152-set-default-user-windows-subsystem-linux-distro-windows-10-a.html)

````batch
ubuntu config --default-user <username>
````

`cd C:\User\<Username>\AppData\Local\Microsoft\WindowsApps` (If WSL is not added to Environment Path)

<u>Set an Distro as Default</u>

````batch
wsl -s <distro-name> 
````

<u>Launch an Distro Instance as Particular User</u>

````batch
wsl ~ -d Ubuntu -u david
````

<u>Access WSL Disto Drive from Explorer</u>
  
`\\wsl$\`

### WSLg Debugging Commands

````bash
# Set Display Variable
echo $DISPLAY
export DISPLAY=:0 

# Check if X11 is setup
ls -la /tmp/.X11-unix
ls -la /tmp/.X11-unix/

# Recreate Link if Missing
sudo rm -r /tmp/.X11-unix 
sudo ln -s /mnt/wslg/.X11-unix /tmp/.X11-unix
````

### References

* [How can I change the location of docker images when using Docker Desktop on WSL2 with Windows 10 Home? - Stack Overflow](https://stackoverflow.com/questions/62441307/how-can-i-change-the-location-of-docker-images-when-using-docker-desktop-on-wsl2)
* [Advanced settings configuration in WSL | Microsoft Learn](https://docs.microsoft.com/en-us/windows/wsl/wsl-config) (WSL Settings & Config)

---

[Windows Index](../Windows%20Index.md)
