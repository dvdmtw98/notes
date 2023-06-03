---
title: Rust Error Handling
tags: [rust, programming]
---

#### Result Enum

Similar to the Options Enum Rust uses the Result Enum to show results that could fail  
Ok contains the result value while Err contains a error type value

```rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Since its an Enum we need to match on all of the cases for the program to compile

```rust
let file = match File::open("hello.txt") {
	Ok(file) => file,
	Err(error) => panic!("File could not be opened! {:?}", error),
};
```

We could even write a more robust Error Handling conditions as follows  
The `.kind()` method when called on an error allows to match on its various types

```rust
let file = match File::open("hello.txt") {
	Ok(file) => file,
	Err(error) => match error.kind() {
		ErrorKind::NotFound => match File::create("hello.txt") {
			Ok(file) => file,
			Err(error) => panic!("File creation failed: {:?}", error),
		},
		other_error => panic!("Failed to open file: {:?}", other_error),
	},
};
```

Closures can be used to make the above match statement more concise

`unwrap()` returns the Some value and panics when None is returned (Not recommended)  
`expect()` returns the Result Ok value and panics with the provided message

#### Error Propagation

Using the `?` operator in Rust error can be propagated up to the calling function

[Recoverable Errors with Result - The Rust Programming Language](https://doc.rust-lang.org/stable/book/ch09-02-recoverable-errors-with-result.html)

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Result<String, io::Error> {
    let mut username_file = File::open("hello.txt")?;
    let mut username = String::new();
    
    username_file.read_to_string(&mut username)?;
    Ok(username)
}
```

If the line that uses `?` returns can error the remaining code in the function is not executed  
The function will return the error to the calling code

The value returned from the `?` operator goes through the from function present in the From trait which is used to convert the type of values  
The type of the Error is converted to the type mentioned in the return signature of the function

```rust
use std::fs::File;
use std::io::{self, Read};

fn read_username_from_file() -> Result<String, io::Error> {
    let mut username = String::new();

    File::open("hello.txt")?.read_to_string(&mut username)?;

    Ok(username)
}
```

Code can be chained after the `?` operator  
The `?` operator cannot be used in the main function (It can be but requires a special return type)

```rust
fn last_char_of_first_line(text: &str) -> Option<char> {
    text.lines().next()?.chars().last()
}
```

The `?` operator can be used with Some Enum, here when None is returned the Function will exit early

[To panic! or Not to panic! - The Rust Programming Language](https://doc.rust-lang.org/stable/book/ch09-03-to-panic-or-not-to-panic.html)