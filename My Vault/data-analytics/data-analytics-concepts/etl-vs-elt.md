---
tags:
- analytics
- etl
title: ETL vs ELT
---

### ETL (Extract Transform Load)

* The data is transformed before it is loaded into the target system
* The compute resources to the ETL engine is used to transformation the data in-memory
* Used when all the transformations that need to be performed on the data can be done using SQL queries
* Generally used when the data being transferred is not very large

Informatica - PowerCenter  
IBM - Infosphere Information Center  
SQL Server Integration Service (SSIS)  
Talend Open Studio

---

### ELT (Extract Load Transform)

* The data is moved to the target database as is and then transformed as per requirement
* Uses the compute horsepower of the Target System (mostly Data Warehouse) to perform the transformation operations
* As the transformation is not performed by the ELT engine, user is free to use other tool to transform the data into the required form
* ELT is also preferred when large volumes of data needs to be moved and implemented quite often in cloud environments

Azure Data Factory

---

### Why ELT over ETL ?

* Data is generated at a high velocity in organizations and as such ETL tools are no able to perform the transformations at the seem in which data is generated
* Data in modern systems are generated from disparate source and can be unstructured in form as well leading to very complex transformation pipelines
* Adoption of cloud has made the storage affordable and the emergence of MPP based Data Warehouses have make processing large volumes of data feasible

---

**<u>References</u>**:

* [An overview of ETL and ELT architecture](https://www.sqlshack.com/an-overview-of-etl-and-elt-architecture/)

---

[Data Analytics](../data-analytics.md)
