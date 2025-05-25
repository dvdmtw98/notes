---
title: XSS (Cross Site Scripting)
tags:
  - security
  - web
  - attack
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

It is a code injection attack  
Allows an attacker to execute malicious JavaScript in another user's browser

In this attack the attacker does not directly target the user  
The attacker exploits vulnerability in a website that the victim visits to get the website to deliver the malicious JavaScript for the user

XSS exploits the trust between a users web browser and website

### Detecting XSS

Similar to SQL Injection try out all the input field and URL with parameters to see if they can execute any JS code

### Cross-Frame Scripting (XFS)

This is one of the most commonly used method to see if the site is vulnerable to XSS

```html
<iframe src="javascript:alert('xss')">
```

[Cross Site Scripting Prevention - OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

#### Reflected XSS

Works when the target loads an URL that is specially crafted by the attacker  
Affects input fields and URLs that have parameters. If the input fields are not sanitized then we can enter a JS script which will get executed when submitted

[Reflected XSS Example](http://testphp.vulnweb.com/listproducts.php?cat=%3Cscript%3Ealert(%22Hello%20World%22)%3C/script%3E)

#### Persistent/ Stored XSS

Attacker stores malicious code in DB used by the website  
A user opens a page that displays the malicious code stored in the DB  
The code gets executed on the users device    
Works on pages that have input field whose data is stored in DB and then displayed somewhere else on the site

<u>Example 1</u>:  
Insert the BeEF Hook URL into the fields to be saved in DB  
Now anyone visiting the page which shows the DB contents are going to hooked in BeEF

<u>Example 2</u>:  
In a request send to the server we can add an header which can be used to perform persistent XSS  
Works for "X-Forwarded-For" header as well

```html
"True-Client-IP" : <iframe src="javascript:alert('xss')">
``` 

Both these headers inform the server of the IP Address of the device  
So in place of the IP Address that will be stored on the site we are able to store XSS code

#### DOM-based/ Client-side XSS

This attack happens on the client-side not on the server  
The script needs to be in an language that is processed on the client side like HTML, CSS 

Can be dangerous as it happens on client side because of which the server side input validation is not performed  
Generally found on pages that refresh the content without reloading the page (Perform action without accessing server)

```html
<img src="" onerror="alert('Hello World')" />
```

This attack can mostly be found on search bars that load results without refreshing the page
