---
tags:
  - programming
  - asp.net
  - csharp
  - webdev
title: Entity Framework
date: 2024-01-28 14:15:56 -0600
---

It is an **ORM (Object Relation Mapper)** that allows us to work with our databases at an higher level of abstraction

DbContext : Connection to Database  
DbSet : Represent Tables in Database

LINQ is used to query DBSets which are then converted to its equivalent SQL query by Entity Framework

### Workflows

**Database First** : Create DB with tables and have Entity Framework create the corresponding Domain Classes  
**Code First** : We create Domain Classes and have them converted to the equivalent Database Queries
