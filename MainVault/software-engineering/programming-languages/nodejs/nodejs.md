---
tags:
  - programming
  - javascript
  - nodejs
  - webdev
  - index
title: Node.js
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 10:39:15 -0600
---

### Related Topics

* [[mongoose|Mongoose]]
* [[express|Express]]
* [[ejs-syntax|EJS Syntax]]
* [[dotenv-usage|Dotenv Usage]]
* [[bcrypt-usage|Bcrypt Usage]]

### Commonly Used Commands

````bash
npm init
npm install express
npm install -D nodemon # Development Dependency

# Loading another person's project (Download dependencies)
npm install 

# Update all the dependencies
npm outdated
npx npm-check-updates -u
npm install
````

### Popular Node Modules

* [[express|Express]] (Make server using node.js)
* nodemon (Auto reload local server)
* request (Access APIs)
* [[ejs-syntax|EJS]] (Embeded JS Templating)
* lodash (Provides functions to work with JS)
* [[mongoose|Mongoose]] (MongoDB ODM)
* [[dotenv-usage|Dotenv]] (Save Secret data like API and Encryption Keys)
* [[bcrypt-usage|Bcrypt]] (Used to Salt and Hash passwords)
* validator (Add custom validation to Mongoose)
* express-validator (Middleware for validator package to add validation to form data)
* fs (File System - Inbuild Module)

### Creating Modules

````js
//Import the module
const moduleName = require('/module');

//Use module
const module = moduleName();

//Exporting the module
exports = function() {
	//Write code here
};

// If multiple functions are present in the module
exports.functionName1 = function() {
	//Write code here
};

exports.functionName2 = function() {
	//Write code here
};

const moduleName = require('/module');
const module = moduleName.functionName1();
````
