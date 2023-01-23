---
title: Dotenv Usage
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