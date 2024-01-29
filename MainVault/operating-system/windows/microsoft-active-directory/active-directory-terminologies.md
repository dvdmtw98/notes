---
tags:
  - windows
  - active-directory
  - security
title: Active Directory Terminologies
date: 2024-01-28 14:15:56 -0600
---

#### Domain
A domain is an area of a network managed by a single authentication database  
An Active Directory domain is a logical grouping of AD objects on a network

#### [[domain-controller-dc|Domain Controller (DC)]]
It is a server that authenticates user identities and authorized their access to resources

#### Domain Computer
A computer that is registered with a central authentication database  
It would be an AD Object

#### AD Object
An AD Object is the basic element of Active Directory  
Users, Groups, Printers, Computers, Shared Folders are all AD Objects

#### Group Policy Object (GPO)
A virtual collection of policy settings  
Controls the access permissions of AD Objects

#### Organization Unit (OU)
A subdivision within an AD into which we can place users, groups, computers and other OUs

#### Directory Service
Provides the methods for storing directory data and making this data available to network administrators  
Directory services run on the [[domain-controller-dc|Domain Controller (DC)]]
