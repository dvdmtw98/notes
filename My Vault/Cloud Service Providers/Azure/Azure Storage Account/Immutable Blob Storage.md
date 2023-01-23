---
title: Immutable Blob Storage
---

Allows to store business-critical data in WORM (Write Once Read Many) type of state  
This makes the data undeletable and unmodifiable for the time period specified by the user  
This data cannot even be deleted by the administrator of the storage account  
This feature needs to be configured at the container level  
If any attempt is made to access the data before the retention period then the activities are logged and stored

Types of data retention approaches:
* Time based Retention: Set policy to retain data for a fixed time
* Legal Hold: Useful if not sure how long the data needs to be stored