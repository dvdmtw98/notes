---
title: Digital Media Forensics
tags:
  - security
  - forensics
  - data
date: 2024-01-28 14:15:56 -0600
---

Process of investigating and analyzing digital devices and data to uncover evidence for legal purposes

### Digital Forensics Procedure

#### Identification
Ensures the safety of the scene, secures it to prevent any evidence contamination and determines the scope of the evidence to be collected

#### Collection
Process of gathering, preserving and documenting physical or digital evidence

#### Analysis
Systematically scrutinizing the data to uncover relevant information, such as potential signs of criminal activity, hidden files, timestamps and user interactions

#### Reporting
Involves documenting the findings, processes and methodologies used during a digital forensics investigation

---

### Order of Volatility
Dictates the sequence in which data sources should be collected and preserved based on their susceptibility to modification or loss

#### Collection Order
Data from System Memory (CPU Register, Cache, RAM)  
Data from the System State (Routing tables, ARP Cache, Process Table, Swap File)  
Data from Storage Devices (HDD, SSD)  
Remote Logging and Monitoring Data (SIEM, IDS, etc.)  
Physical Configuration and Network Topology  
Remotely Stored or Archived Data (Backups, Cloud Storage, External Devices, Printouts)

---

### Chain of Custody
Documented and verifiable record that tracks the handling, transfer and preservation of digital evidence from the moment it is collected until it id presented in a court of law

### Legal Hold
Formal notification that instructs employees to preserve all potentially relevant electronic data, documents and records

### Electronic Discovery (e-Discovery)
Process of identifying, collecting and producing electronically stored information during potential legal proceedings

---

### Data Acquisition
The method and tools used to create a forensically sound copy of the data from a source device such as RAM or HDD

#### Disk Imaging
Creating a bit-by-bit copy of a storage device, preserving its entire content, including   deleted files and unallocated space

#### File Carving
Focuses on extracting files and data fragments from storage media without relying on the file system
