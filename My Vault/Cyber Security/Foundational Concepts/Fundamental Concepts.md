---
tags:
  - security
  - terms
  - concept
---

**Cybersecurity**: Act of protecting the (Confidentiality, Integrity and Availability) CIA of data, people, networks and devices from unauthorized access and criminal compromise

**Information Security**: Protecting the data stored in the system  
**Information System Security**: Protecting the system that holds the data

**SIEM**: Security Incident and Event Management  
**SOAR**: Security Orchestration and Automated Response  

**EDR**: Endpoint Detection and Response  
**XDR**: Extended Detection and Response. Combines intel from multiple sources to provide a holistic view of the incident

---

### Threats and Vulnerabilities

##### Threat
Any circumstance that can negatively effect our information security systems  
Natural Disasters, Cyberattacks, Data Integrity Breach, Information Disclosure

##### Vulnerability
Any weakness in system design or implementation  
Software bugs, Missing Security Patches, Lack of Physical Security

Intersection of Threat and Vulnerability is where risk to enterprise systems lies  
Threat + No Vulnerability = No Risk  
No Threat + Vulnerability = No Risk  

**Threat Vectors**  
The means or pathway by which an attacker can gain unauthorized access to a computer or network to deliver a malicious payload or carry out an unwanted action  
Message, Image, Files, Voice Calls, Removable Devices, Unsecure Networks

**Attack Surface**  
Encompasses the various points where an unauthorized user can try to enter data to try to extract data from an environment  
Restricting Access, Removing Unnecessary Software, Disabling Unused Protocols  

##### Risk Management
Finding different ways to minimize the likelihood of an outcome from occurring and achieve the desired outcomes

### CIA Triad

##### Confidentiality
Information has not been disclosed to unauthorized people  
Protect personal piracy, Maintain a business advantage, Achieve regulatory compliance
Encryption, Access Control, Data Masking, Physical Protection, Training and Awarness

##### Integrity
Information not modified or altered without right authorization  
Ensure Data Accuracy, Maintain Trust, Ensure Security Operability  
Hashing Digital Signature, Checksums, Access Controls, Regular Audits

##### Availability
Information can be accessed, stored and protected at all times  
Ensure Business Continuity, Maintain Customer Trust, Uphold Organizations Reputation  
Redundancy (Server, Data, Network, Power)

##### Non-repudiation 
Undeniable proof that an specific action or event has taken place  
Confirm authenticity, Ensure Integrity, Provide Accountability

**Digital Signature**
Hash the information to be digitally signed  
Then encrypt the hash digest with the users private key

### AAA of Security

##### Authentication
Process of verifying the identity of an user or system  
Prevent unauthorized access, Protect user data & privacy, Resource validity

<u>Factors to verify authenticity</u>  
Something you know (Knowledge Factor): Username, Password  
Something you have (Procession Factor): ID Card, OTP  
Something you are (Inheritance Factor): Biometrics  
Something you do (Action Factor): Handwriting Analysis  
Somewhere you are (Location Factor): Geofencing

##### Authorization
Defines what actions or resources a user can access  
Protect sensitive data, Maintain system integrity, create streamlined user experience

##### Accounting
Acting of tracking user activity and resource usage typically for auditing or billing  
Audit Trail, Compliance, Forensic Analysis, Resource Optimization, User Accountability  
Syslog Servers, network Analyzers, SIEM

### Gap Analysis
Process of evaluating the differences between an organizations current performance and its desired performance

**Analysis Steps**  
Define Scope of the Analysis  
Gather data on current state of Organization  
Analyze data to identify gaps  
Develop a plan to bridge the gap

**Technical Gap Analysis**: Identify gaps in the organizations technical infrastructure  
**Business Gap Analysis**: Identify gaps in the current business processes that prevent the full utilization of the technical infrastructure 

### Shadow IT
Use of information technology systems, devices, software, applications and services without the explicit organizational approval  
Use of personal device for work, Installation of Unapproved Software, Use of cloud services not approved by organization  
Mainly occurs because the organizations security posture is being set too high or too complex for business operations to occur without negative impact
