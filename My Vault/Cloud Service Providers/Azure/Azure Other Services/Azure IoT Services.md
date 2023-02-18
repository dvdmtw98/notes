---
title: Azure IoT Services
tags: [azure, cloud, iot]
---

It is an network of internet connected devices are embedded in everyday objects and allows to send and receive data (settings, telemetry, etc.)

### Azure IoT Central

Similar to IoT Hub but provides ready made templates that can be used to create services  
It is SaaS (Software as a Service) offering  
No deep technical knowledge required  
Build on top of IoT Hub and 30+ other services

### Azure Sphere

Provides Sphere MCU (Micro Controller Unit)  
Provides Sphere OS on top of which we can make apps  
Azure Sphere Security Service: Allows communication between the cloud and the device itself  
Allows to build secure. end to end solutions

### Azure IoT Edge

Allows to deploy services to Edge devices (IoT hardware devices)  
Deployment to Edge devices are done using modules  
Modules are Docker compatible containers  
They are the smallest unit of compute managed by IoT Edge  

To deploy module to IoT Edge Device a container needs to be created which needs to be hosted in ACR, an manifest file needs to be generated for the edge devices that tells them which modules needs to be installed

---

[Azure](../Azure.md)