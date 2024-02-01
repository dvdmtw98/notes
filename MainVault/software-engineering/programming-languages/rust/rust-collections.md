---
tags:
  - rust
  - programming
title: Rust Collections
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-31 10:41:15 -0600
---

### Vectors

Similar to array but can grow in size. Stored in the Heap

```rust
let mut vector1: Vec<i32> = Vec::new();
vector1.push(10);
vector1.push(20);
vector1.push(30);

let vector2 = vec![10, 20, 30];
println!("{:?}", vector2);
```

When creating an empty vector the type need to be specified

```rust
println!("First Element: {}", &vector2[1]);

match vector2.get(4) {
	Some(value) => println!("First Element: {}", value),
	None => println!("Invalid Index Specified"),
}
```

Elements in a Vector can be accessed directly using the Index but can lead to errors  
Compiler will not detect this as Vector is dynamic object and is allocated on Heap. The invalid index access can only be detected at runtime  

```rust
for elem in &vector1 {
	println!("{}", elem);
}
```

Values in the Vector can be modified by iterating over them using an mutable reference to the Vector and dereferencing (obtaining address) the current element

```rust
for elem in &mut vector1 {
	*elem += 10;
}
```

We can store data of multiple types in a Vector using Enums

```rust
enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
}
```

To access values from the Vector we need to use the Match statement as depending on the datatype different operations can be performed on the underlying data

```rust
let row = vec![
	SpreadsheetCell::Int(3),
	SpreadsheetCell::Text(String::from("blue")),
	SpreadsheetCell::Float(10.12),
];

match &row[1] {
	SpreadsheetCell::Int(value) => println!("Integer Value: {}", value),
	SpreadsheetCell::Float(value) => println!("{}", value),
	SpreadsheetCell::Text(value) => println!("{}", value),
}
```

### Strings

It is an collection of UTF-8 encoded characters. String is a wrapper over `Vec<u8>`
In UTF-8 characters can be represented using anywhere from 1 to 4 bytes  
Since string as UTF-8 encoded even characters from other languages can be stored in them

```rust
let mut string = String::from("Hello");
string.push_str(" World");
string.push('!');
println!("{}", string);
```

Multiple strings can be joined together using the `+` operator or using the `format!()` macro

```rust
let str1 = String::from("Hello");
let str2 = String::from("World");
let str3 = String::from("!");
println!("{}", format!("{str1} {str2}{str3}"));
```

The below string contains 12 characters but requires 24 bytes to be stored in memory  
Since different characters can have different lengths we cannot index into a string

```rust
let hello = String::from("Здравствуйте");
```

Additionally, there are three relevant ways to look at a string. As bytes (`u8`), scalar values (Rust char type representation) and grapheme clusters (Human characters)  

```rust
let hello = "Здравствуйте";
let result = &hello[0..6]; // Slice 1st three characters
```

While it is not possible to index over a String it is possible to create a string slice but since characters can be represented using different lengths the output could be different from what is expected

[Storing UTF-8 Encoded Text with Strings - The Rust Programming Language](https://doc.rust-lang.org/book/ch08-02-strings.html)

```rust
let welcome = String::from("नमस्ते");
for char in welcome.chars() {
	println!("{}", char);
}
```

`.bytes()`: Iterate over Bytes  
`.chars()`: Iterate over Rust Char represent of string  
`.graphemes(true)`: Iterate over graphemes (Import from `unicode-segmentation` Crate)

### HashMap

Used to represent Key Value pair data

```rust
let mut dictionary = HashMap::new();

dictionary.insert(String::from("Blue"), 10);
dictionary.insert(String::from("Red"), 8);
```

If we pass a variable denoting a String as key the dictionary will get ownership of the value

```rust
let result = dictionary
	.get(&String::from("Blue"))
	.expect("Requested Key not Found");
println!("{}", result);

for (key, value) in &dictionary {
	println!("Key: {} -> Value: {}", key, value);
}
```

For fetching a value and iteration we need to borrow the reference to the value

```rust
let mut word_map = HashMap::new();
let string = "Hello Hello Wonderful World";

for word in string.split_whitespace() {
	let count = word_map.entry(word).or_insert(0);
	*count += 1;
}
println!("{:?}", word_map);
```

`.or_insert()` methods returns an mutable reference to the value of the selected key. We can use this reference to modify the value
