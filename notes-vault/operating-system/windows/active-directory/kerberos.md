---
title: Kerberos
tags:
  - security
  - authentication
  - windows
date: 2026-11-17 22:30:31 +0530
updated: 2026-11-20 23:43:59 +0530
---

### Kerberos
Kerberos is an *authentication key agreement* protocol.  
It allows two entities to establish a *shared secret key* securely, starting from an insecure communication channel.  

Kerberos is based on symmetric key cryptography (SKC).  
Entities rely on a centralized server called *KDC* (Key Distribution Center).  
KDC knows long term secret keys for all the entities involved in the communication.  
Using the long term secret keys its possible for KDC to generate *ephemeral session keys* that allow clients to authenticate with services.  
Ephemeral here means an key that is only valid for the length of the session.  
As soon as the session ends the key is destroyed.  

Kerberos is built on top of the *Needham-Schroder Symmetric Key Protocol*.  

[Needham–Schroeder Protocol - Wikipedia](https://en.wikipedia.org/wiki/Needham%E2%80%93Schroeder_protocol)  
[RFC 1510 - The Kerberos Network Authentication Service (V5)](https://datatracker.ietf.org/doc/html/rfc1510)

### Kerberos Components

#### Key Distribution Center (KDC)
Deals with the initial authentication and with the issuing of tickets.  

##### Authentication Server (AS)
Component that deals with the initial authentication.  
After it verifies the users identity, it generates a *Ticket Granting Ticket (TGT)*.  
These tickets can then be exchanged for *Service Tickets*.  

##### Ticket Granting Server (TGS)
Component responsible for issuing Service Tickets by using the *Ticket Granting Ticket (TGT)*.  
The *Service Tickets* allow users to access server resources.  
TGS also validates that the TGT submitted for Service Ticket is valid.  

Once a TGT is obtained we can use it without provided password related information in message/communication.  
A single TGT can be used to issue multiple Service Tickets.  
If TGT was not present then each time a Service Ticket was requested information related to users long term secret key would need to be shared.  
This is not good. We want to reduce the exposure of secrets as much as possible.  

#### Realm
Defines a logical security boundary that contains group of principals (users, services and computers) that trust a specific *Key Distribution Center (KDC)* for authentication purposes.

In Active Directory, a realm is automatically created when a domain is initialized.  
The Kerberos Realm is the uppercase version of the AD domain name.  

#### Principal
A Kerberos Principal is a unique identity to which Kerberos can assign tickets.  

##### User Principal
Represents an individual user in the Kerberos realm.  
This is also known as *User Principal Name (UPN)*.  

##### Service Principal
Represents a service that requires authentication and authorization to be accessed by its clients.  
e.g.) SMB Service, SQL Server, HTTP Server, LDAP Server

Services need  to register proper Service Principal Names (SPNs) within Active Directory.  
Once this registration has taken place, Kerberos can issue tickets for service access. 

[\[MS-ADTS\]: Service Principal Name \| Microsoft Learn](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-adts/cd328386-4d97-4666-be33-056545c1cad2)

##### Host Principal
Represents a computer in a Kerberos realm.  

Each principal has an associated “secret key” (long term secret key), which is used during the key agreement protocol to provide authentication.  

Principal names have the following structure: `primary/instance@REALM`  
*Primary*: Identifies the entity.  
*Instance*: Further qualifies the primary.  
*Realm*: The Kerberos domain in which the authentication has to take place.  

```batch
:: Print UPN (User Principal Name)
whoami /upn

:: List Kerberos Tickets
klist

:: List all SPNs registered for a Principal
setspn -L <principal>

:: Set a new SPN for a Principal
setspn -A <spn> <principal>
```

#### Ticket Granting Ticket (TGT)
Is a Kerberos ticket that is used to issue *Service Tickets* through a *Key Distribution Center* (KDC).  

In secure deployments of Kerberos, the TGT is issued after proper authentication with the *Authentication Server (AS)*. If the authentication is successful, the KDC will issue a TGT.  
If the TGT is used prior to proper authentication, an attack known as *AS-REP Roasting* can be performed on the Kerberos realm.  

The TGT contains information, such as:  
User ID  
TGS ID (Server who will receive the TGT)  
Expiration Time  
TGS Session Key  
Ticket Flags  

The TGT is not sent in cleartext, it is encrypted with the *KDC secret key*.

```
Client: leo @ HEXDUMP.LAB
Server: krbtgt/HEXDUMP.LAB @ HEXDUMP.LAB
KerbTicket Encryption Type: AES-256-CTS-HMAC-SHA1-96
Ticket Flags 0x40e10000 -> forwardable renewable initial pre_authent name_canonicalize
Start Time: 2/13/2025 4:07:44 (local)
End Time:   2/13/2025 14:07:44 (local)
Renew Time: 2/20/2025 4:07:44 (local)
Session Key Type: AES-256-CTS-HMAC-SHA1-96
Cache Flags: 0x1 -> PRIMARY
Kdc Called: DC01
```

```
krbtgt/CONTOSO.COM @ CONTOSO.COM
       └─────────┘   └─────────┘
       Target realm   Principal's realm
```

*initial*: Flag that indicates that its the first ticket.  
*pre_authent*: Flag that indicates authentication occurred to receive the ticket.  

#### Service Ticket (ST)
A Service Ticket is a Kerberos ticket that allows an *authenticated* user to access a specific service or resource by using a previously obtained TGT.  

Once a ST is obtained, it can be presented to the target service.  
The ticket is created in such a way that only the service can decrypt it with its own secret key.  
It is used to validate the identity of the user and the request of the user.  

```
Client: leo @ HEXDUMP.LAB
Server: LDAP/DC01.hexdump.lab/hexdump.lab @ HEXDUMP.LAB
KerbTicket Encryption Type: AES-256-CTS-HMAC-SHA1-96
Ticket Flags 0x40a50000 -> forwardable renewable pre_authent ok_as_delegate name_canonicalize
Start Time: 2/13/2025 4:40:02 (local)
End Time:   2/13/2025 14:40:02 (local)
Renew Time: 2/20/2025 4:40:02 (local)
Session Key Type: AES-256-CTS-HMAC-SHA1-96
Cache Flags: 0
Kdc Called: DC01.hexdump.lab
```

```
LDAP/DC01.hexdump.lab/hexdump.lab @ HEXDUMP.LAB
 │         │                │          │
 │         │                │          └─ Serivce Realm
 │         │                └─ Service Name
 │         └─ Hostname
 └─ Service Class
```

*Service Name*: The AD domain whose LDAP directory service is being requested.  
*Service Realm*: The Kerberos realm in which the LDAP service principal exists.  

[Name Formats for Unique SPNs - Win32 apps \| Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/ad/name-formats-for-unique-spns)

### Kerberos Messages

![[kerberos-authentication-flow.png|640]]

#### AS-REQ + AS-REP
This is the first request/response that is sent.  
The purpose of this exchange is to obtain a *Ticket Granting Ticket* (TGT).  

**Entities Involved**:  
Client, AS/KDC  

**Messages**:  
AS-REQ (Authentication Service Request), Client → AS  
AS-REP (Authentication Service Reply), AS → Client  

##### AS-REQ
Can contain *pre-authentication data*, such as:  

**PA-PAC-REQUEST**  
Specifies if the user wants to obtain a TGT that includes *PAC* (Privileged Attribute Certificate) data, containing authorization information like group memberships and user privileges.  

**PA-ENC-TIMESTAMP**  
It contains a timestamp encrypted with the user's key. It is used to prove that the request comes from a legitimate user. It is also used to prevent replay attacks.  

When the KDC/AS receives the timestamp, it uses the user's secret key to decrypt the timestamp. If the timestamp is within an *acceptable window of time*, authentication continues otherwise, it fails.  

**PA-PK-AS-REQ**  
Uses public-key cryptography and certificates (PKINIT) for authentication.  

During this authentication different errors can happen, such as:

**KRB5KDC_ERR_PREAUTH_REQUIRED**  
The client must include proper authentication data.  
Encrypted timestamp is used in password-based authentication.  

**KRB5KRB_AP_ERR_SKEW**  
Since Kerberos relies on synchronized clocks for security, significant time different between entities can result in a *time skew error*.

**eRR-PREAUTH-FAILED**  
When the timestamp is not properly encrypted with the user private key. This means that the user typed in the wrong password.

