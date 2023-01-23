---
title: SQL DB Security
---

### Azure Defender for SQL

It is a unified package for advanced SQL security capabilities  
Azure Defender is available for:

* Azure SQL Database
* Azure SQL Managed Instance
* [Azure Synapse Analytics](../../Azure%20Analytics%20Services/Azure%20Synapse%20Analytics/Azure%20Synapse%20Analytics.md)

---

### Azure Database Firewall Rules

They are protected by a server firewall  
The firewall resides on the database server  
All connections are rejected by default to the database

---

### Always Encrypted

Feature that encrypts columns in Azure SQL Database or SQL Server

Uses Two Types of Keys:

* Column Encryption Keys: Used to encrypt data in encrypted column
* Column Master Keys: A key protecting keys that are used to encrypt the columns (Envelope Encryption)

They can be enabled/ applied using T-SQL as well

[Always Encrypted - SQL Server | Microsoft Docs](https://docs.microsoft.com/en-us/sql/relational-databases/security/encryption/always-encrypted-database-engine?view=sql-server-ver15)

---

### [Transparent Data Encryption (TDE) Protector Key](../../Azure%20Analytics%20Services/Azure%20Synapse%20Analytics/Transparent%20Data%20Encryption%20%28TDE%29%20Protector%20Key.md)

Can be applied to SQL Server, Azure SQL Database, [Azure Synapse Analytics](../../Azure%20Analytics%20Services/Azure%20Synapse%20Analytics/Azure%20Synapse%20Analytics.md)  
Performs real time I/O encryption and decryption of data and log files  
Uses an Database Encryption Key (DEK). It is an symmetric key

**<u>Steps to apply TDE</u>**  
Create Database Master Key  
Create a Certificate to support TDE  
Create a Database Encryption Key  
Enable TDE on Database