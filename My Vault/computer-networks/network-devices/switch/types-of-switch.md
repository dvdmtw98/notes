---
tags:
- networking
- device
title: Types of Switch
---

### Form Factors of Switch

**Fixed Form Factor**  
Switches used in small networks has fixed number of ports  

**Modular Switches**  
Used for large networks  
We can increase/ decrease the amount of ports on the switch

### Types of Switches

**Unmanaged Switches**  
Nothing to configure. Plug it in and it works directly  
Used on small/ home networks. They are generally of fixed form factor

**Managed Switches**  
Can be configured and managed by network admin using Telnet or [SSH](../../../operating-system/linux/commands/ssh-command.md)  
They can be fixed form factor or modular  
They are expensive compared to unmanaged switches  
We can add static entities in MAC table  
Configure which port uses Full Duplex and Half Duplex  
Monitor switch performance using SNMP  
Allows creating [Virtual LANs (VLANs)](../../layer-wise-concepts/data-link-layer-concepts/virtual-lans-vlans.md)    
Configure port mirroring (One port to mirror another port for redundancy)

---