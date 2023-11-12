---
tags: [snowflake, cloud, data-warehouse]
---

````bash
snowsql -a <accunt-id>.us-east-1 -u <username>

# After making changes in config file
snowsql -c <profile-name> 
````

````sql
use DATABASE LTI_DB;
use SCHEMA LTISCHEMA;
use WAREHOUSE COMPUTE_WH;
````

### Create File Format

````sql
CREATE OR REPLACE 
FILE FORMAT mycsvfile type='CSV' 
field_delimiter = '|' 
skip_header = 1;

CREATE OR REPLACE 
FILE FORMAT myjsonfile type='JSON' 
string_outer_array = true;
````

### Uploading to Snowflake

When loading data into Snowflake we have to make a staging area  
Snowflake Cloud (Internal Stage), [AWS](../AWS/AWS.md), [GCP](../GCP/GCP.md) (External Stage)  
We also need to create a file format which will be used for the file we are going to upload

````sql
# Load data to staging area
PUT file:///c:/Users/David/Downloads/Documents/emp.csv @ST_LTISNOW;

# Load data into table from staging area
COPY INTO LTI_DB.LTISCHEMA.EMPLOYEE 
FROM @ST_LTISNOW 
FILE_FORMAT = 'LTI_DB.LTISCHEMA.CSV_FILEFORMAT' 
ON_ERROR = 'ABORT_STATEMENT' 
PURGE = TRUE;
````

 > [!NOTE]
 > - PURGE = TRUE (Removes data from staging area after it is loaded)
 > - @ST_LTISNOW/emp.csv.qz (Load a single file from staging area)
 > - ON_ERROR = \[ 'CONTINUE' | 'SKIP_FILE' \] (Action if malformed data in file)

### Downloading from Snowflake

````sql
# Create Stage

CREATE STAGE ST_UNLOAD 
FILE_FORMAT = CSV_FILEFORMAT;

# Load data to staging area
COPY INTO @ST_UNLOAD 
FROM SNOWFLAKE_SAMPLE_DATA.TPCH_SF1.customer;

# Change role
USE ROLE ACCOUNTADMIN;

# Unload data to Local System
GET @ST_UNLOAD/data_0_0_0.csv.gz file:///c:/Users/David/Downloads
````

### Staging Area

````sql
# View files in staging area
LIST @ST_LTISNOW

# Remove data from staging area
REMOVE @ST_LTISNOW
REMOVE @ST_LTISNOW PATTERN='.*.csv.gz';

# Query Data in staging area
SELECT t.$1, t.$2, t.$3 
FROM @ST_LTISNOW/emp.csv.gz (
	FILE_FORMAT => CSV_FILEFORMAT
) t;
````

**<u>References</u>**:

* [SQL Command Reference — Snowflake Documentation](https://docs.snowflake.com/en/sql-reference-commands.html)
* [CREATE FILE FORMAT — Snowflake Documentation](https://docs.snowflake.com/en/sql-reference/sql/create-file-format.html)
