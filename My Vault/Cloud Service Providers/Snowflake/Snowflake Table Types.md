---
tags: [snowflake, cloud, data-warehouse]
---

### Cloned Table

The clone does not use any extra space it shares its micro-partitions with the original table  
But if we add, delete or edit values in the clone table then new micro-partitions are created for the cloned table  
There are no limits to cloning an clone table can be cloned again as well

### Temporary Table

They are tables that are associated to an session  
They are not visible to other users and data and the structure is purge when the session is closed

### Transient Table

They are tables that are not associated to an session and are accessible to users that have permission to access them  
They are used to store temporary data that needs to be accessed across sessions  
They do not have fail safe protection
