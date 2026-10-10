---
title: Application Programming Interface
aliases:
  - API
tags:
  - security
  - programming
date: 2026-10-04 19:27:23 +0530
updated: 2026-10-04 19:30:52 +0530
---

A set of rules that lets two software applications talk to each other.  

### REST (Representational State Transfer)  
Use HTTP methods like GET to retrieve data, POST to create data, PUT to update, DELETE to remove.  
Looks like normal HTTP traffic over the network.  
Request and response are normally in JSON format.  

API keys and OAuth 2.0 are used for API authentication.  

### API Attacks

[OWASP Top 10 - 2025](https://top10.owasp.org/2025/)

#### Broken Object-Level Authorization
When an API endpoint does not properly check whether the user requesting an object is allowed to access that specific object.  

#### Lack of Rate Limiting
API does not limit how many requests a client can make in a given time period.  
Makes credential stuffing and DDoS attacks trivial.  

### API Gateway
Sits before the API and centrally handles authentication, authorization, rate limiting and logging.  
They are the primary monitoring and control point for API activity.  
WAF can also be placed before the API Gateway to detect additional attacks.  
