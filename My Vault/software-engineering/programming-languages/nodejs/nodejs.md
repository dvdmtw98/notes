---
tags:
- programming
- javascript
- nodejs
- webdev
- index
title: Node.js
---

### Table of Content

* [Mongoose](mongoose.md)
* [Express](express.md)
* [EJS Syntax](ejs-syntax.md)
* [Dotenv Usage](dotenv-usage.md)
* [Bcrypt Usage](bcrypt-usage.md)

---

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

---

### Popular Node Modules

* [Express](express.md) (Make server using node.js)
* nodemon (Auto reload local server)
* request (Access APIs)
* [EJS](ejs-syntax.md) (Embeded JS Templating)
* lodash (Provides functions to work with JS)
* [Mongoose](mongoose.md) (MongoDB ODM)
* [Dotenv](dotenv-usage.md) (Save Secret data like API and Encryption Keys)
* [Bcrypt](bcrypt-usage.md) (Used to Salt and Hash passwords)
* validator (Add custom validation to Mongoose)
* express-validator (Middleware for validator package to add validation to form data)
* fs (File System - Inbuild Module)

---

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

---

[Programming Languages](../programming-languages.md)