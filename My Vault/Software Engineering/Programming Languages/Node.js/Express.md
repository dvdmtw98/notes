---
tags: [programming, javascript, nodejs, webdev]
---

### Initialize Express

````js
const express = require('express');
const app = express();

// Access static files like CSS, JS and Images that are inside the public folder
app.use(express.static(__dirname + '/public'));

// Allows us to access the data of POST request
app.use(express.urlencoded({extended: true}));
````

### URL Routing

````js
app.get('/', function(req, res) {
	//Send back a File
	res.sendFile(__dirname + '/index.html');
});

app.post(['/', '/register'], function(req, res) {
	//Returns the data from the form
	console.log(req.body);

	//The values in String typecasting is required
	//Property name is the name of the input in the form
	var num1 = req.body.num1;
});

app.get('/failure', function(req, res) {
	//Redirect to a different route
	res.redirect('/');
});
````

### Route Chaining

````js
app.route('/article')
.get(function(req, res) {
	//Write code here
})
.post(function(req, res) {
	//Write code here
})
.delete(function(req, res) {
	//Write code here
});
````

### Dynamic Routes

````js
app.get('/post/:topic', function(req, res) {
	//Returns the value of :topic
	console.log(req.params.topic);
});

app.get('/post', function(req, res) {
	//Returns the data after the ? as an object
	console.log(req.query);
});
````

### User Middleware

* The id here is the `:id` term that was part of URL. The value of the id is saved in val
* Such an middleware can be used to create a function that does some actions based on the value of the URL parameter

````js
app.param('id', function(req, res, next, val) {
	//Note that the code needs to be returned else will be continuously run and be stuck here
	if(val > tours.length) {
		return res.send('Correct ID : ' + val);
		//next() is needed else the code will get stuck in this middleware
		next();
	}
});
````

* Middleware can bee also passed as first parameter for the requests to cause that middleware to be run for that route
* Here we have created a function called checkBody that is used to check the message that is received when the POST route is used

````js
app.route('/article')
.get(function(req, res) {
	//Write code here
})
.post(checkBody, function(req, res) {
	//Write code here
});
````

### Running the Server

Change 3000 to `process.env.PORT || 3000` when deploying website

````js
app.listen(3000, function() {
	console.log('Server running on localhost:3000');
});
````

### Creating Router Object

1. <u>tourRoutes.js</u>

````js
const router = express.Router();

// The app variable is changed to router
router.route('/')
.get(function(req, res) {
	//Write code here
})
.post(function(req, res) {
	//Write code here
});

router.route('/:id')
.get(function(req, res) {
	//Write code here
})
.post(function(req, res) {
	//Write code here
});

module.exports = router;
````

2. <u>app.js</u>

````js
const tourRouter = require('./routes/tourRoutes');

// Mounting of the router
app.use('/api/v1/tours', tourRouter);

// Handling undefined routes (Error Handling)
app.all('*', function(req, res, next) {
	res.status(404).json({
		'status' : 'fail',
		'message': 'Route does not exist'
	});
});
````

### Error Handling Middleware

* When these four parameters are used Express understands it's an error handling middleware. Add this as the last middleware after all the routes, etc in the code

````js
app.use(function(err, req, res, next) {
	err.status = err.status || 'fail';
	err.statusCode = err.statusCode || 500;

	res.status(err.statusCode).json({
		'status': err.status,
		'message': err.message
	});
});


// Use the middleware in the route where it is required
const err = new Error('Can't find such a path');
err.status = 'fail';
err.statusCode = 404;
					  
// When error object is passed to next() it will skip other middleware and go to the error handling middleware
next(err);
````
