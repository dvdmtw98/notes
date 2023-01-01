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

---

### Initialize Module

````js
const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(() => console.log('Connected to DB');
````

---

### Create Schema

````js
// Schema for the Document Fruit
const fruitSchema = new mongoose.Schema({
	name: String,
	rating: Number,
	review: String
});
````

---

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

---

### Creating Collection (Table)

````js
// DB name is always converted to plural by mongoose
const Fruit = mongoose.model('Fruit', fruitSchema);
````

---

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

---

### Select/ Fetch Document

1. <u>Fetch subset of the Records</u>

````js
Fruit.find({name: 'Apple'}, function(err, fruits) {
	if(err) {
		console.log(err);
	}else {
		console.log(fruits);
	}
});
````

2. <u>Find Single Record</u>

````js
Fruit.findOne({name: 'Apple'}, function(err, fruit) {
	if(err) {
		console.log(err);
	}else {
		console.log(fruit);
	}
});
````

3. <u>Find a document by ID</u>

````js
Fruit.findById(id, function(error, fruit){});
````

---

### Update Document

1. <u>Update a Document</u>

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

2. <u>Update Document using ID field</u>

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

---

### Delete a Document

1. <u>Delete Single Record</u>

````js
Fruit.deleteOne({name: 'Apple'}, function(err) {

	if(err) {
		console.log(err);
	}else {
		console.log('Successfully deleted the data');
	}
});
````

2. <u>Delete all the data from DB</u>

````js
Fruit.deleteMany(function(err) {
	if(err) {
		console.log(err);
	}else {
		console.log('Successfully deleted the data');
	}
});
````

3. <u>Delete using ID Field</u>

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

---

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

---

### Close Connection

````js
mongoose.connection.close();
````

---

### Mongoose Methods

1. <u>Fetch some columns from Document</u>

````js
const fruit = Fruit.find().where('name').equals('Apple').where('rating').gte(6);
````

2. Pagination Logic

````js
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit)) || 100;
const skip = (page - 1) * limit;

Fruit.find().skip(skip).limit(limit);
````
