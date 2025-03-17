---
title: Fact & Dimension
tags:
  - analytics
  - database
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Fact Table

Are generally numeric in value  
They can also be states of a system (Low, Medium, High)  
Values for measurements are taken continuously and each new measure is a new value  
There generally include textual context like units (C, F, kg, etc.)

Fact tables have many-to-one relationship with Dimension Table

Data that has direct impact on the performance of organization -> Measure, Metric, Fact, KPI (Key Performance Indicator)  
They are of three types: Addictive, Semi-additive, Non-addictive

#### Types of Fact Tables

**Fact-less Fact**  
Does not contain any measure (All values are FKs to Dimension Tables)

**Snapshot Fact**  
Stores data wrt. a certain point in time

**Centipede Fact**  
A fact table that is normalized

**Conformed Fact**  
Stored facts that are used by multiple dimension tables

### Dimension Table

They are the context around the measure that is collected  
They are logically grouped into dimensions

The dimension tables have a single primary key that is mapped to the foreign key of the fact table  
There is one-to-many relation between Dimension and Fact tables 

[[types-of-dimension-tables|Types of Dimension Tables]]
