---
title: SELinux
tags:
  - security
  - access
  - controls
---

### Context-based Permissions
Permission schemes that are defined by various properties for a given file or process  
e.g. SELinux, AppArmor

### SELinux
Linux normally uses DAC but SELinux uses MAC  
It was created by NSA  

It is used to enforce MAC on processes and resources  
Allows information to be classified and protected

SELinux has three main contexts and a 4th optional one

##### User
Define what user can access an object  
`unconfined_u`: All Users  
`user_u`: Unprivileged Users  
`sysadmin_u`: System Administrators  
`root`: Root User

##### Role
Defines what roles can access a given object  
`object_r`: Applies to files and directories

##### Type
Groups objects together that have similar security requirements

##### Level
Used to describe the sensitivity level of a given file, directory or process

### SELinux Modes

##### Disabled
SELinux is disabled. So MAC is not implemented  
Relies on the default DAC

##### Enforcing
All SELinux security policies are enforced

##### Permissive
SELinux is enabled but security policies are not enforced  
Processes can bypass the policies in this mode

### Policy Types

##### Targeted
Default in RHEL and CentOS  
Processes that are target will run in a confined domain

##### Strict
Every object on the system will be acted upon by MAC
