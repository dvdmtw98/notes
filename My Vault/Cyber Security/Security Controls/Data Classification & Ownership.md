---
tags:
  - data
  - cloud
  - security
  - concept
---

### Data Classification  
Categorizing data based on the sensitivity of the information  
The classification is decided by the data owner  
More money and resources need to be spend on data that is highly sensitive  
Classification Schema depends on organization - Commercial Business or Government

##### Commercial Business
**Public**: No impact on company if released. Often published in open-source environment  
**Sensitive**: Had minimal impact if released (Financial Information)  
**Private**: Data that should be used only inside organization (Personal Records, Salary)  
**Confidential**: Data that effects business if disclosed (Trade Secrets, IP data, Source Code)  
**Critical**: Contains valuable data. Access restricted to few individuals (Credit Card, SSN, etc.)

##### Government
**Unclassified**: Data that can be released to the public  
**Sensitive but Unclassified**: Data that won't affect national security (Medical records, Personal Files, etc.)  
**Confidential**: Data that could seriously affect the government (Trade Secrets)  
**Secret**: Data that could damage national security (Deployment Plan)  
**Top Secret**: Data that would damage national security (Blueprints of weapons)

### Data Ownership

##### Data Owner  
Senior Executive that has to maintain the CIA of the information asset  
Responsible for labelling the asset and ensuring its protected with proper controls

##### Data Controller  
Responsible for deciding the purpose and methods of data storage, collection and usage and for guaranteeing the legality of the process  
Holds accountability of any breaches and privacy mishap  

##### Data Processor
Hired by data controller for tasks like collecting, storing and analyzing data  

##### Data Steward  
Focused on the quality of the data and the associated metadata  
Works along with the data owner  

##### Data Custodian  
Responsible for handling and managing the systems on which the data assets are stored  
System Administrators act as Data Custodians

##### Privacy Officer  
Responsible for ensuring the proper handling of private data - PII, SPI and PHI  
Ensure that organization is complies with legal and regulatory frameworks 

### Data States

##### Data at Rest
Full Disk Encryption (FDE)  
Partition Encryption: Encrypt specific partitions of a hard drive    
File Encryption  
Volume Encryption: Encrypt a set of selected files and directories  
Database Encryption  
Record Encryption: Encrypt specific fields within a database record

##### Data in Transit/ Data in Motion
SSL and TLS: Cryptographic protocols  
VPN  
IPSec: Protect IP communication by authenticating and encrypting each packet

##### Data in Use
Application Level Encryption  
Access Controls  
Secure Enclaves  
Intel Software Guards

### Data Types

##### Regulated Data
Information controlled by laws, regulations and industry standards  
e.g. GDPR, HIPAA

##### Personal Identifiable Information (PII)
Any information that can be used to identify an individual

##### Personal Health Information (PHI)
Information about health status, provision of healthcare or payment for healthcare that can be linked to a specific individual

##### Trade Secrets
Type of confidential business information that provides a company a competitive edge

##### Intellectual Property (IP)
Creations of the mind, such as inventions, literary and artistic works, designs and symbols

##### Legal Data
Data related to legal proceedings, contracts or regulatory compliance

##### Financial Information
Data related to an organizations financial transactions, such as sales records, invoices, tax documents and bank statements
e.g. PCI DSS

##### Human-readable Data
Information that can be understood by humans without the need for a machine or software

### Data Sovereignty
Refers to the concept that digital information is subject to the laws of the country in which it is located