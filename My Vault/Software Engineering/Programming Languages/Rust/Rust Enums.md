---
title: Rust Enums
tags: [rust, programming, enum]
---

Structs allows developers to group similar fields together  

Enums are used to show that an item that can have multiple types/forms  
For using a enumeration we need to know all the possible types of the item. Additionally, the item cannot be of multiple types at the same time

```rust
enum IpAddressKind {
    V4,
    V6,
}
// V4, V6: Enum Varients
```

Enum variants must be defined in Camel Case

```rust
let localhost = IpAddressKind::V4;
```

To store the properties of the Enum variant we can create a Struct

```rust
enum IpAddressKind {
    V4,
    V6,
}

struct IpAddress {
    kind: IpAddressKind,
    address: String,
}

fn main() {
    let localhost = IpAddress {
        kind: IpAddressKind::V4,
        address: String::from("127.0.0.1"),
    };
}
```

The properties of the Enum variants can be stored directly in the Enum (No separate struct)

```rust
enum IpAddressKind {
    V4(String),
    V6(String),
}

fn main() {
    let localhost = IpAddressKind::V4(String::from("127.0.0.1"));
    let loopback = IpAddressKind::V6(String::from("::1"));
}

```

> [!NOTE] Enum Constructor
> By using this syntax we turn each Enum variant into a **constructor function** that takes in parameter's and returns a **instance** of the variant

Each Enum variant can have multiple properties and be of different datatypes  

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 }, // Struct-like structure
    Write(String),
    ChangeColor(i32, i32, i32),
}
```

The same Enum could also be created using 4 different Structs but each Struct will be of a different type  
With Enums we can group different variants of the same item together

Similar to Structs Methods can be declared on Enums

```rust
impl Message {
    fn call(&self) {
        println!("{:?}", &self);
    }
}

let message = Message::Write(String::from("Input Message"));
message.call(); // Write("Input Message")
```

### Option Enum

Rust does not have the concept of NULL value  
Instead there is Option Enum which captures the essence of nullable value  
The Option Enum is automatically imported into every project (i.e. it is included in Rust prelude)

```rust
enum Option<T> {
    Some(T),
    None
}
```

When declaring a variable as None we need to explicitly mention the type of the variable

```rust
    let number = Some(21);
    let name = Some(String::from("David"));
    let missing: Option<i32> = None;
```

A Some value cannot be combined directly with another datatype  
The value of `T` needs to be extracted from the Some Enum before it can be used  

```rust
    let num1 = 10;
    let num2 = Some(5);

    let result = num1 + num2.unwrap_or(15);
    println!("{}", result);
```

`unwrap()` returns the Some value and panics when None is returned (Not recommended)  
`unwrap_or()` allows to define default value that will be used if value of Some is None  
`unwrap_or_else()` returns Some value or calculates value from a closure  
`unwrap_or_default()` returns Some value or returns default value for the datatype

[Option in std::option - Rust](https://doc.rust-lang.org/std/option/enum.Option.html)