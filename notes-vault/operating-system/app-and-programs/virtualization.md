---
title: Virtualization
tags:
  - virtualization
  - technology
  - concept
date: 2025-09-06 14:20:27 +0530
updated: 2026-04-03 19:46:24 +0530
---

### Virtual Box

#### Mounting Shared Folder

[Shared Folders - Oracle](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/sharedfolders.html)

**Windows**

```cmd
net use x: \\vboxsvr\sharename
```

**Linux**

```bash
mount -t vboxsf sharename mountpoint
```

#### Misc. Commands

To exit stretched mode or any mode where the VirtualBox ribbon is hidden use: `Host (Right Ctrl) + C`. 

[Create more than 4 Network Adapters on single VM? - virtualbox.org](https://forums.virtualbox.org/viewtopic.php?t=88463)

---

### Hyper-V
WSL 2, Windows Sandbox and Docker uses Hyper-V under the hood.  
Disabling it will cause these 3 features to stop working.

VirtualBox can be used when Hyper-V is active however in this mode the VM performance is going to be sluggish.  

#### Check Hypervisor Status

```bash
# Check Status
bcdedit | findstr /i hypervisorlaunchtype
```

```bash
# Disable Hyper-V
bcdedit /set hypervisorlaunchtype off
reboot
```

```bash
# Enable Hyper-V
bcdedit /set hypervisorlaunchtype auto
reboot
```

---

### Network Modes

[VirtualBox Network Settings: All You Need to Know](https://www.nakivo.com/blog/virtualbox-network-setting-guide/)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Fhdxk4bmJCs?si=XLeObuTHiTQb3kgm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

#### NAT
Stands for Network Address Translation.  
Maps private IP address to a public IP address.  
In a NAT network outside communicate is always allowed.  

The VM software setups a NAT engine (also provides DHCP) which connects its outside (public) interface to host machine NIC internal (private) interface.  
Devices on the physical network cannot use the VM as its hidden behind NAT.  

VMs cannot communicate with each other as they are on different networks.  
The VM can communicate with host and devices on physical network.  
To access the VM from host port forwarding has to be configured.

VirtualBox sets up the NAT engine on the IP `10.0.2.2/24`. The NAT engine also acts as the DHCP server. VM created in this mode is assigned the IP `10.0.2.15/24`.  
VMware does not have a basic NAT mode like VirtualBox. VMware NAT mode is similar to VirtualBox NAT network.

#### NAT Network

Similar to NAT mode.  
The NAT engine converts VM IP address to the IP address of the internal interface of the host systems NIC.  

In this mode a virtual switch is created to which all the VMs are connected.  
In this mode the VMs can communicate with each other.  
Similar to NAT mode the VMs can access devices on the physical network.  

In VirtualBox the IP `10.0.2.1/24` is used by the NAT engine and the IP `10.0.2.3/24` is used by DHCP server.  
VMware treats VMnet8 as NAT network. VMs connected to this network can communicate with each other.  

#### Bridged
Used to directly connect the VM to the physical network without using NAT.  
The VMs are bridged to the physical network through the host systems NIC.  
The VMs in this mode are assigned an IP address by the DHCP server of the physical network.  

#### Host-Only
In this mode the host along with the VMs are connect to a virtual switch.  
Similar to internal VMs connected to the switch can communicate with each other.  
No internet is available in this mode.  

A new adapter is created on the host which is connected to the virtual switch.  
The host has 2 adapter one through which it can access the internet (NIC) and other through which it cannot access the internet (Virtual Adapter).  

#### Internal
In this mode a virtual switch is created and every VM is connected to this switch.  
VMs connected to the switch can communicate with each other.  
No internet access is provided in this mode.  

In VirtualBox this mode creates a switch called `intnet`.  
VMware calls this mode LAN segment.  
