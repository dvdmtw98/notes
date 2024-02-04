---
tags:
  - programming
  - javascript
  - nodejs
  - webdev
title: Bcrypt Usage
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

````js
const bcrypt = require('bcrypt');
const saltRounds = 10;

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
	// Store hash in your password DB.
});

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
	if(result == true) {
		//Successfully Authenticated
	}
});
````
