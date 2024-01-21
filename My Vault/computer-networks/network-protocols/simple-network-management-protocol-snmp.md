---
title: Simple Network Management Protocol (SNMP)
tags:
  - security
  - protocol
  - management
  - networking
---

Protocol for collecting and organizing information about <u>managed devices</u> on IP networks and for modifying that information to change device behavior

### Managed Device
Devices that can communicate with <u>SNMP manager</u>  

SNMP manager uses Management Information Base (MIB) to store the data  
It is an subsystem that uses an hierarchical namespace of object identifiers to store data

SNMP Manager can be any device on the network that is running the SNMP protocol for collecting and processing information from devices   
Agent is a background service running on the device that sends data to the manager

### SNMP Messages

#### SNMP Set
Set or modify the value of an variable on the agent when requested by the maanger

#### SNMP Get
Request by the manager to get values from the agent  

#### SNMP Trap
Asynchronous requests that are sent from the agents to the manager to notify of significant events that are occurring in real-time  
Data is stored as key-value pairs (Variable Binding)

##### Granular
Trap Messages get a unique objective identifier (OID) to distinguish each message as a unique message being received
This type message allows update of specific variables instead of having to update all the variables for the device

##### Verbose
Traps that may be configured to contain all the information about a given alert or event  
Will require more bandwidth as all data of the device is being sent

### SNMP Versions

#### SNMP v1 and v2
SNMP v1 and v2 used community strings to give them access to the device as their security mechanism  
This information was sent in plain text making it insecure

#### SNMP v3
Integrity: Hash all the messages  
Authentication: Validate the source of the message  
Confidentiality: Encryption (using DES, 3DES or AES)
