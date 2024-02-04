---
tags:
  - security
  - sqli
  - web
  - burp
title: Semi-Automated Tool (Burp Suite)
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

#### Start Burp 
Proxy - Open Browser - Visit Target Site

#### View Request/ Responses in Burp
Proxy - HTTP History (View all request that went through Burp)  
Target - Site Map - Select a Resource - Request (View the request of specific resource)  
Right Click - Send to Repeater

#### Using Repeater
Repeater - Raw (Make changes in request) - Send  
Repeater - Response - Render (View Output of request)  
Right Click - Send to Intruder

#### Using Intruder
Intruder - Target (Make changes)  
Intruder - Positions (Check Payloads) - Attack Mode (Sniper)  
Intruder - Payload - Payload Type - Simple List (Load List in Payload Options) - Start Attack

#### Attack Output
Look at the Status Code, Length, Timeout, Error column  
Render the Output and see if the attack was successful  

OR  

Intruder - Options - Grep (Select Flag Results) - Add "String Present in Response"  
Now in Attack results that have the string Welcome are going to get flagged
   