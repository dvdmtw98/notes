---
title: Useful SQL Functions and Queries
tags:
  - security
  - sqli
  - web
date: 2024-01-28 14:15:56 -0600
updated: 2024-03-29 19:04:18 -0500
---

`select user()`: SQL DB Username  
`select version()`: View Version  
`select database()`: View DB name  
`select load_file()`: Load a file on the Server

````sql
-- View all DBs
SELECT schema_name 
FROM information_schema.schemata; 

-- View tables in DB
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema="<db-name>"; 

---View columns in Table
SELECT column_name 
FROM information_schema.columns 
WHERE table_name="<tab-name>"; 
````
