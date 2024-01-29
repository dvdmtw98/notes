---
tags:
  - azure
  - cloud
  - event
title: Azure Notification Hub
date: 2024-01-28 14:15:56 -0600
---

Allows to send push notifications to users  
ANH provides abstraction over platform specific notification services  
Notification Hub billing is performed at the Namespace level

### Components

**Platform Notification Service (PNS)**: Vendor specific Notification Service  
**Notification Hub**: Communicates with PNS  

**Namespace**  
Collection of Notification Hubs  
Generally a single namespace is used for a single application  
And for each application environment a different Hub in the namespace is used
