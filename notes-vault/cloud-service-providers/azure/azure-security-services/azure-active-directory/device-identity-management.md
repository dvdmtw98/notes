---
title: Device Identity Management
tags:
  - azure
  - cloud
  - security
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Management of physical devices like phones and laptops that are granted access to company resources like Printers, Cloud Resources via device based Conditional Access.

#### Azure AD Registered
Personally owned device  
Signed in with a personal Microsoft or local account

#### Azure AD Joined
Owned by an organization  
Joined using Azure AD account that belongs to the organization  
They exist only in the cloud

#### Hybrid Azure AD Joined
Owned by the organization  
Joined using Active Directory Domain Service that belongs to the organization  
They exist on-premises and in the cloud

---

#### Mobile Device Management (MDM)  
Control the entire device, can wipe data from it, and also reset it to factory settings  
[[mobile-device-management-mdm|Mobile Device Management]]

#### Mobile Application Management (MAM)
Publish, push, configure, secure, monitor and update mobile applications for your users

MDM and MAM are managed via Microsoft Intune  
Intune needs AAD Premium Tier 2  
Intune is a part of Microsoft Enterprise Mobility + Security (EMS)