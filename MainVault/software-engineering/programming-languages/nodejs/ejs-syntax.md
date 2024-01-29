---
tags:
  - programming
  - javascript
  - nodejs
  - webdev
title: EJS Syntax
date: 2024-01-28 14:15:56 -0600
---

* In project make a folder called 'views' add the required .ejs file. All normal HTML is valid in ejs file.
* In the file the location where the content needs to be changed dynamically add `<%= foo %>`
* The `<% if(condition) { %>` tag can be used to include control flow structure in ejs.
* Layout can be created using `<%- include('header'); -%>`. Refer doc for more information.
* In the express code include the lines as below

````js
app.set('view engine', 'ejs');

//Substitute foo in the HTML with the value FOO
app.get('/', function(req, res) {
	res.render('index', {foo: 'FOO'});
});
````
