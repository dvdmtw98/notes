---
title: Azure Event Grid
tags: [azure, cloud, event]
---

Used to implement Event based architectures (Pub/Sub Model)  
Subscribers can be services in Azure or custom Webhooks  
Supports sending events from one publisher to many subscribers  

Can be scaled up and down as required  
It is a serverless service so we pay only for what we use

There is no Resource that can be provisioned called Event Grid, instead it is feature that needs to be enabled at the Subscription level (Resource Providers)

### Pub/Sub Concepts

An event only signifies that something has changed  
Publisher does not know what happens with the event  
Subscriber decides what to do with the event

### Terminology

**Events**: Smallest unit of data. Describes what happened  
**Publisher**: Application that emits events  
**Topics**: Collection of related events. Endpoint to which events are sent  
**Subscriptions**: Routes and filters events to handlers  
**Handlers**: Apps that consume the events

### Custom Topics

Create our own publisher that will emit events from our application  
The event by default will have the same schema as Azure Topics (Events on Azure)  
It can be customized to include custom information

---

[Azure Messaging Services](Azure%20Messaging%20Services.md)