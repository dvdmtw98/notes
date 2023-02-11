---
title: Benefits of Cloud Computing
tags: [cloud, concept]
---

### Cost Effective

No up-front cost  
We pay for what we consume

### Secure

Service provider takes care of physical security  
Allows very granular control on the security options on services

### Scalability

Process of adding or removing resources  
Increasing Size (Vertical Scalability)  
Increasing Amount (Horizontal Scalability)

![Horizontal and Vertical Scaling|400](images/horizontal-and-vertical-scaling.png)

### Elasticity

Auto Scaling (adding/ removing) of resource dynamically based on demand

### Agility

The ability to quickly provision resources as per need  
When using on premise resources this process could take up to months

### Fault Tolerance

The ability of resources to remain up and running during component and service failure  
This is achieved by maintaining multiple copies of the resources

### Disaster Recovery

Creating copies of the required resources in two separate [Azure Regions](../Azure/Azure%20Concepts/Azure%20Regions%20&%20Zones.md) and setting up replication between them to so that they are up to date and then setting up an DNS between these two regions so that the traffic to the resource can be automatically redirected to the working region  
This is an type of Fault Tolerance that is provided for dealing with major disruption to services that can be caused by Natural Disasters

![Disaster Recovery|400](images/disaster-recovery.png)

### High Availability

It is the metric that measures the uptime of the resource  
Downtime can be caused due to planned maintenance or due to resource failure  
Cloud providers at a minimum try to aim for four 9s availability

![High Availability|440](images/high-availability.png)

---

[Cloud Service Providers](../../Cloud%20Service%20Providers.md)