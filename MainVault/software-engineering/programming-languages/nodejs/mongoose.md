---
tags:
  - programming
  - javascript
  - nodejs
  - webdev
title: Mongoose
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 10:39:02 -0600
---

### MongoDB Basics

````bash
# Show, create and switch to DB

show dbs
use dbname
show collections
````

````js
// If no collection a new one is created on insertion of data
db.tours.insertOne({name: 'Hiking', price: 300, rating: 8})
db.tours.insertMany([{name: 'Hiking', price: 300, rating: 9}, {name: 'Trekking', price: 500, rating: 6}])

// Returns all document from the collection
db.tours.find()
db.tours.find({$or: [{price: {$lte: 300}}, {rating: {$gt: 6}}]})

// The second term is called as projection it is the fields that have to be in output
db.tours.find({$or: [{price: {$lte: 300}}, {rating: {$gt: 6}}]}, {name: 1})
db.tours.updateOne({name: 'Hiking'}, {$set: {price: 400}})
db.tours.updateMany({name: 'Hiking', rating: {$gt: 6}}, {$set: {premium: true}})
db.tours.replaceOne()
db.tours.deleteMany({rating: {$gte: 200}})

// Delete all the collections
db.tours.deleteMany({})
````

### Initialize Module

````js
const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Connected to DB');
````

### Create Schema

````js
// Schema for the Document Fruit
const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	review: String
});
````

### Field Validation

````js
const fruitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: ['true', 'Why no name ?'],
		unique: true
	},
	rating: {
		type: Number,
		default: 4.5,
		min: 1,
		max: 10
	},
	review: {
		type: String,
		required: true,
		select: false //Field will not show up in any output
	}
});
````

### Creating Collection (Table)

````js
// DB name is always converted to plural by mongoose
const Fruit = mongoose.model('Fruit', fruitSchema);
````

### Create & Save Document (Row)

````js
const apple = new Fruit({
	name: 'Apple',
	rating: 7,
	review: 'A apple a day keeps the doctor away!'
});

// Saves the created Document
apple.save();

// Automatically Saves the Document
const apple = Fruit.create({
	name: 'Apple',
	rating: 7,
	review: 'A apple a day keeps the doctor away!'
});

// Save multiple documents
Fruit.insertMany([apple, kiwi, orange, banana], function(err) {
	if(err) {
		console.log(err);
	}else {
		console.log('Successfully saved all the data');
	}
});
````

### Select/ Fetch Document

#### Fetch subset of Records

````js
Fruit.find({name: 'Apple'}, function(err, fruits) {
	if(err) {
		console.log(err);
	}else {
		console.log(fruits);
	}
});
````

#### Find Single Record

````js
Fruit.findOne({name: 'Apple'}, function(err, fruit) {
	if(err) {
		console.log(err);
	}else {
		console.log(fruit);
	}
});
````

#### Find a document by ID

````js
Fruit.findById(id, function(error, fruit){});
````

### Update Document

#### Update a Document

````js
Fruit.updateOne({name: 'Apple'}, {rating: 9}, function(err) {
	if(err) {
		console.log(err);
	}else {
		console.log('Successfully updated the data');
	}
});
````

 > [!NOTE]
 > Can be used to add new fields to document as well but they should be specified in the schema. Refer document for other functions for updating

#### Update Document using ID field

````js
Fruit.findByIdAndUpdate(id, {fields to update}, {new: true, runValidators: true}, function(err) {
	if(err) {
		console.log(err);
	}else {
		console.log('Successfully deleted the data');
	}
});
````

 > [!NOTE]
 > The remove by id will only work if the callback is specified else it will only return the item with the id

### Delete a Document

#### Delete Single Record

````js
Fruit.deleteOne({name: 'Apple'}, function(err) {

	if(err) {
		console.log(err);
	}else {
		console.log('Successfully deleted the data');
	}
});
````

#### Delete all the data from DB

````js
Fruit.deleteMany(function(err) {
	if(err) {
		console.log(err);
	}else {
		console.log('Successfully deleted the data');
	}
});
````

#### Delete using ID Field

````js
Fruit.findByIdAndRemove(id, function(err) {
	if(err) {
		console.log(err);
	}else {
		console.log('Successfully deleted the data');
	}
});
````

 > [!NOTE]
 > The remove by id will only work if the callback is specified else it will only return the item with the id

### Relationship and Embedded Documents

````js
const personSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favouriteFruit: FruitSchema
});

const Person = mongoose.model('Person', personSchema);

const kiwi = new Fruit({
	name: 'Kiwi'
	rating: 10,
	review: 'An amazing fruit'
});

kiwi.save();

const david = new Person({
	name: David,
	age: 21,
	favouriteFruit: kiwi
});

david.save();
````

### Close Connection

````js
mongoose.connection.close();
````

### Mongoose Methods

#### Fetch columns from Document

````js
const fruit = Fruit.find().where('name').equals('Apple').where('rating').gte(6);
````

#### Pagination

````js
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit)) || 100;
const skip = (page - 1) * limit;

Fruit.find().skip(skip).limit(limit);
````
