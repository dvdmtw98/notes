---
tags:
  - programming
  - javascript
  - webdev
title: JS - Other Features
date: 2024-01-28 14:15:56 -0600
---

Defer Attribute : Starts downloading JS in the background will the HTML is being parsed and hence the parsing is done executes the JS  
Async Attribute : Starts downloading JS in the background when HTML is being parsed.  Once the JS is download stops HTML parsing and executes the JS and then continues parsing of remaining HTML

[Async Vs Defer - JavaScript Loading Explanation](https://blog.webdevsimplified.com/2019-12/javascript-loading-attributes-explained/)

### HTML Element Attributes

Allows to interact with the attributes that are applied on the elements  
Most of the attributes can be directly accessed on the element using the dot operator  
Data attributes can be accessed in JS using using `querySelector` with the following syntax `[<attribute-name>]`

### New Scope

An new scope can be created any where in JS by wrapping the code in curly brackets

````js
const a = 3;
console.log(3);

{
	const a = 5;
	console.log(a);
}
````

### Template Literal Function

The first parameter to the function is all the strings present in the template string

````js
const custom = (strings, name, age) => {
	console.log(strings, name, age);
	return `Hi`;
}

let name = 'David';
let age = 23
console.log(custom`My name is ${name}. I am ${age} years old`);
````

### Nullish Coalescing

````js
// When 1st term is null or undefined
const name = null ?? "David"

// When 1st term is a falsey value
const name = "" || "Tim"
````

### JS Enumerate Function Equivalent

````js
const foobar = ['A', 'B', 'C'];

for (const [index, element] of foobar.entries()) {
  console.log(index, element);
}
````

### Debugging

````js
// Time a function
console.time("Timer");
for(let i = 0; i <= 10000000; i++);
console.timeEnd("Timer");

// Use CSS in Console
console.log(`%cMy name is %cDavid`, "color:green", "color:red");

// Display Object as Table
console.table(objectName);
````

### Immediately Invoked Function Expression (IIFE)

[JavaScript's Immediately Invoked Function Expressions](https://stackabuse.com/javascripts-immediately-invoked-function-expressions/)

````javascript
// Anonymous IIFE
((num) => {
    console.log(num);
})(6);

// Named IIFE
(printValue = (num) => {
    console.log(num);
})(6);

printValue(10);
````

This function gets executed immediately once the script is run  
Named IIFEs can be used as normal functions as well  
In ES6 with the introduction of block level variables IIFEs are not used that often

### Closure

Closure = Function + Its Environment (Variables used by function)  
Can be used to emulate private functions

````javascript
function makeFunc() {
	var name = "JS Nuggets";
	
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc(); // JS Nuggets
````

[Master the JavaScript Interview: What is a Closure? | by Eric Elliott | JavaScript Scene | Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36#.nu14obibk)
