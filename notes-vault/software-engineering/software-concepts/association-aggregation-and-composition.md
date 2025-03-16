---
title: Association, Aggregation and Composition
tags:
  - programming
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### Association

* The object of one class may use the Methods provided by another class. This type of relation is called association
* It is an loose term and is used to denote any type of dependency that exists between two classes
* Aggregation and Composition are subsets of composition

### Aggregation

* The object of one Class owns the object of another class
* When the owning object is destroyed the other object may still continue to exist this type of relation is called aggregation
* It establishes a "has a" relation between the objects

### Composition

* When the owning object is destroyed the other object will also get destroyed
* In other words the owning class is responsible for the existence/ lifecycle of the other object
* It establishes a "has a" relation between the objects
