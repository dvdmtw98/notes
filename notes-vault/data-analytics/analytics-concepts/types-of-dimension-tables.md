---
title: Types of Dimension Tables
tags:
  - analytics
  - database
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Conformed Dimension
A table that can be used across multiple fact tables in a data model  
A conformed Dimension can be a [[slowly-changing-dimension-scd|Slowly Changing Dimension (SCD)]]  
This dimension has the same meaning across the entire data model

### Degenerate Dimension
A fact table that stored dimension information as well

### Junk Dimension
If a model has many small dimension tables which are then clubbed into a single table

### Role-playing Dimension
A table that is used across multiple fact tables but unlike conformed dimension they do not have the same meaning across each fact table  
e.g. Date Dimension

### Static Dimension
A dimension table in which the value never changes  
The values in this table are usually loaded using an INSERT script  
e.g. Gender, Category

### Shrunken Dimension
They are found in models that contain Snowflakes  
They are multiple Dimension tables that are connected to each other  
e.g. Product Column in Dim Table 1. Models of this Product in Dim Table 2
