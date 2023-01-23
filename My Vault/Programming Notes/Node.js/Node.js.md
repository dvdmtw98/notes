---
title: Node.js
---

### Table of Content

* [Mongoose](Mongoose.md)
* [Express](Express.md)
* [EJS Syntax](EJS%20Syntax.md)
* [Dotenv Usage](Dotenv%20Usage.md)
* [Bcrypt Usage](Bcrypt%20Usage.md)

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

* [Express](Express.md) (Make server using node.js)
* nodemon (Auto reload local server)
* request (Access APIs)
* [EJS](EJS%20Syntax.md) (Embeded JS Templating)
* lodash (Provides functions to work with JS)
* [Mongoose](Mongoose.md) (MongoDB ODM)
* [Dotenv](Dotenv%20Usage.md) (Save Secret data like API and Encryption Keys)
* [Bcrypt](Bcrypt%20Usage.md) (Used to Salt and Hash passwords)
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

[Programming Notes](../Programming%20Notes.md)