**<u>Bronze Layer</u>**  
Used to ingest raw data  
Efficient storage & querying of unprocessed history of data

**<u>Silver Layer</u>**  
Used to perform cleaning of dataset  
Enforce production schema on dataset  
Eliminate duplicated, add quality checks

**<u>Gold Layer</u>**  
Powers ML, reporting, dashboard, etc.  
Contains subset of the data from silver layer (Data Marts)  
Contains final data that will be consumed by services
