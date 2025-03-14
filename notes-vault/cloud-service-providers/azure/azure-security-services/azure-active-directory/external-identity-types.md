---
title: External Identity Types
tags:
  - security
  - azure
  - cloud
  - identity
  - management
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28
---

Allow people outside your organization to access your apps and resources while letting them sign in using whatever identity they prefer.

### B2B (Business-to-Business)  
External vendor has own AAD you can send invitations to them to use/access your apps  
A stub object is created in out AAD that represents the person at the external vendor

Even a user with a Microsoft ID can access the app using this approach  
If the users uses a different identity provider (Google, Facebook) when they receive invite to join they will be asked to create a Microsoft ID

There are PowerShell and self-service portal that can be used to allow multiple/all users from a different organization to access our apps  

### B2C (Business-to-Consumer)
A completely separate object from the AAD by the organization that is sharing the app

Allows customers to use any of there social identities (Facebook, Google, Azure AD, etc.) to access the service  
If the customer does not want to use their social identity then can create a local account (Account that is local to the service)

B2C is used to provide access to an Web App/ Mobile App to end users  
It cannot be used to collaborate on SharePoint, access Office 365, Azure Resources, etc.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/U2Temcn-hes?si=WYbo_iDLvya9pzF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
