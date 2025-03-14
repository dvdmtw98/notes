---
title: Azure API Management
tags:
  - azure
  - cloud
  - backend
  - api
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Azure service to create consistent and modern API gateways for existing backend services  

Pricing Tiers: Consumption, Developer, Basic, Standard, Premium, Isolated  
Cache Types: Internal, External ([[azure-cache-for-redis|Azure Cache for Redis]])

**Versions**: Separates APIs with breaking changes  
**Revisions**: Provides minor non-breaking changes to API

### API Management Components

**API Gateway**  
Accepts API calls and routes them to your backend  
API Gateway also provides the ability to verify API Keys, JWT Tokens and other credentials    
Allows to enforce usage quotes and rate limiting  
Provides caching for backend services

**Azure Portal**  
The administrative interface where you set up your API program  
Set up policies like quotes and perform transformations on APIs

**Developer Portal**  
Web user interface for developers where they can read the API documentation  
Try out API using Interactive Console

### Product and Groups

**Products**  
Defines how APIs are surfaced to the developers  
Can be Open or Protected. Protected APIs must be subscribed to before being used

Starter: No Admin Approval Required. Allows 5 requests per minute up to 100 requests per week  
Unlimited: Admin Approval Required. No Rate limiting present

**Groups**  
Allows to manage the visibility of products to developers  
Admins, Developers and Guests are the three built-in groups  

### API Management Policies

Collection of rules that can be executed sequentially on the request or response of an API  
It can be used to perform various operations like: converting data from XML to JSON, checking existence of headers and setting cache configuration  
Policies can be applied at the Global, Product, API and Operation scopes  
They are defined using XML

**Policy Types**: Restrictive, Advanced, Transformation, Caching
