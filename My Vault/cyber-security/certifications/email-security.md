---
title: Email Security
tags:
  - security
  - protect
  - protocol
---

#### Domain Keys Identified Mail (DKIM)
Allows the receiver to check if the email was actually send by the domain it claims to be sent from and if the content was tampered with during transit  
A digital certificate is added in the email header which can verified with the public key stored on the domains DNS records

#### Sender Policy Framework (SPF)
Email authentication method designed to prevent forging sender addresses during email delivery  
When server receives an email it can check the senders IP address against the SPF record of valid IP addresses on the senders domain

#### Domain-based Message Authentication, Reporting & Conformance (DMARC)
An email-validation system designed to detect and prevent email spoofing
DMARC can work with SPF, DKIM or both

---

#### Email Gateway
Server that serves as the entry and exit point for emails  
Server that connects the sender and receiver over the Internet  
Can be on-premise, cloud-based or hybrid solution

#### Spam Filtering
Process of detecting unwanted and unsolicited emails and preventing them from reaching a users email inbox
