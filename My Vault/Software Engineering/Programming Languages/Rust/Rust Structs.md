---
tags: [rust, programming, structs]
---

Structs are similar to tuples. They allow to hold related data together  
Unlike a tuple each element in the Struct is assigned a name  
Structs are comparable to the concept of `dataclass` present in Python

```rust
struct User {
    name: String,
    username: String,
    email: String,
    active: bool,
    login_count: u32,
}

fn main() {
    let mut user1 = User {
        active: true,
        login_count: 1,
        name: String::from("David"),
        email: String::from("davidvarghese@gmail.com"),
        username: String::from("dvdmtw"),
    };

    println!("Username: {}", user1.username);
    user1.username.push_str("12");
    println!("Username: {}", user1.username);
}
```

To mutable even a single field in the struct, the entire struct has to become mutable  
Values for fields in the struct can be provided in a order different from the definition order 

When using a function to initialize a struct, if the names of the input parameters are the same as the the struct field names then the `initialization shorthand` notation can be used

```rust
fn build_user(name: String, username: String, email: String) -> User {
    User {
        name,
        username,
        email: email,
        active: true,
        login_count: 1,
    }
}
```

The fields of a struct can be initialized using the values of fields from another struct

```rust
let user3 = User {
	name: String::from("Jane"),
	email: String::from("jane.smith@gmail.com"),
	username: String::from("jane123"),
	..user2
};
```


> [!IMPORTANT] Data Move
> - When initializing structs using this method the Compound datatype values are moved to the newly created struct (Ownership - Rule 2)
> - In the above example we would no longer be able to use the username field from user2

Struct fields can contain reference type data (Data that is borrowed from another variable) but this requires the use of lifetimes

### Tuple Structs

Used to create a struct where the tuple needs to be assigned a name but assigning names to fields are too verbose for the scenario  
Instead of field names the datatype of the fields are defined in the struct

```rust
struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);
}
```

### Unit Structs

[Defining and Instantiating Structs - The Rust Programming Language](https://doc.rust-lang.org/book/ch05-01-defining-structs.html)

### Methods

Methods are functions that are defined within the context of the struct  
The first parameter to a method is always self which points to the current instance

The methods that are tied to a struct need to be defined in a `impl` (implementation) block
Multiple `impl` blocks can also be created for an struct

```rust
#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    let rect1 = Rectangle {
        width: 10,
        height: 30,
    };

    let rect2 = Rectangle {
        width: 5,
        height: 40,
    };

    let area1 = rect1.area();
    let area2 = rect2.area();
    println!("Area of Rect1: {}", area1);
    println!("Area of Rect2: {}", area2);

    let can_hold = rect1.can_hold(&rect2);
    println!("Can Rect1 hold Rect2?: {}", can_hold);
}

```

Functions defined inside `impl` block without a `&self` reference are called associated functions  
Associated functions are generally used to create constructors  
Associated Functions are called using the `::` syntax with the struct name

```rust
impl Rectangle {
    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let rect = Rectangle::square(10);
    println!("Area of Square: {}", rect.area());
}
```
