---
tags: [programming, javascript, nodejs, webdev]
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
