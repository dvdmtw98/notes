---
tags:
- security
- web
title: HSTS (HTTP Strict Transport Security)
---

More Secure (Strict) version of HTTPS. Used by big sites like Facebook, Twitter, etc.
Browser knows site needs to be loaded as HTTPS so its sends request in HTTPS and only accepts response if it is also in HTTPS. This check is done locally using a list which is present in the browser.

Only way to bypass this is to make the browser think its loading another website.  
E.g. facebook.com -> facebook.corn, twitter.com -> twiter.com

This method only works if person goes to an non-HSTS site and tries to load the target site
