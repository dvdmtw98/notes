---
title: Data Modeling
tags:
  - database
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Data Model

It is a framework that describes the **Data** along with its **Relationships**, the **Semantics** and the **Constraints** enforced on it  
It is the set of rules that define the structure of the data along with how it can be accessed, stored and updated  
It is an abstraction that represents the objects that will be part of the system

**Types of Data Model**:

* Relational Model: Tables are known as relations (Most widely Used)
* Entity-Relationship Model: Real world objects and their relation with each other
* Hierarchical Model: Organize data into tree like structure
* Network Model: Extension of Hierarchical. Child node can have multiple parents
* Object Oriented Model: ER Model + Object Oriented Features

### Stages of Data Model

#### Conceptual Data Model

* High level overview of the Data Model
* It is generally used to make the business users understand the Data Model
* Does not consist of any technical information
* Only the Entities of the Model and their relationship are visible
* The attributes of the entities are not yet defined
* Simple to make changes to the Model at this stage

#### Logical Data Model

* The entity have well defined attributes with user friendly names
* The attributes and the keys for the entities are defined
* The constraints and the datatypes to be used are also finalized
* The model at this stage is Database agnostic
* More difficult to makes changes to the Data Model at this stage

#### Physical Data Model

* The actual implementation of the data model that is done by the developers
* Where we define the DB to use, the DB specific datatype, constraints, DB objects, etc.
* The implementation of the model is specific to the database

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/cY7WZYhyC3o?si=lFko4JLolJCaUgDd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
