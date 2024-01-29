---
tags:
  - programming
  - javascript
  - nodejs
  - webdev
title: Dotenv Usage
date: 2024-01-28 14:15:56 -0600
---

````js
// Add as first line in code
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
````

````bash
touch config.env

SECRET=someverylongstring # Strings dont have quotes
console.log(process.env.SECRET);
````
