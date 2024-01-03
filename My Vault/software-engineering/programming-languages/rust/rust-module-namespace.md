---
tags:
- rust
- programming
title: Rust Module Namespace
---

**Absolute Path**: The path starting from crate root. For code from an external crate, the path begins with the crate name. For code from the current crate, it starts with the literal `crate`  

**Relative Path**: Starts from the current module and uses `self`, `super`, or an identifier in the current module

```rust
fn deliver_order() {}

mod back_of_house {
    fn fix_incorrect_order() {
        cook_order();
        super::deliver_order();
    }

    fn cook_order() {}
}
```

By default all child modules are private (Parent module cannot see anything in child)  
On the other hand the child module can see everything in the parent module  

```rust
crate modules
├── mod back_of_house: pub(crate)
│   ├── fn cook_order: pub(self)
│   └── fn fix_incorrect_order: pub(self)
└── fn deliver_order: pub(crate)
```

Using `super` we can reference the items from parent module of the current module

```rust
mod back_of_house {
    pub struct Breakfast {
        pub toast: String,
        seasonal_fruit: String,
    }

    impl Breakfast {
        pub fn summer(toast: &str) -> Breakfast {
            Breakfast {
                toast: String::from(toast),
                seasonal_fruit: String::from("Peaches"),
            }
        }
    }
}

pub fn eat_at_restaurant() {
    let mut meal = back_of_house::Breakfast::summer("Rye");
    meal.toast = String::from("Wheat");
    println!("I'd like {} toast please", meal.toast);
}

```

Even if an Struct is made public the fields in it are private. Each field needs to be explicitly made public (if it needs to be modified)

```rust
crate modules
├── mod back_of_house: pub(crate)
│   └── struct Breakfast: pub
└── fn eat_at_restaurant: pub
```

Enable Structs once an Enum is made public its variants automatically become public

```rust
mod back_of_house {
    pub enum Appetizer {
        Soup,
        Salad,
    }
}

pub fn eat_at_restaurant() {
    let order1 = back_of_house::Appetizer::Soup;
    let order2 = back_of_house::Appetizer::Salad;
}
```

#### Bringing Modules into Scope

The `use` keyword is used to bring modules into scope (Similar to import statements in other languages). Once a module is brought into scope the entire path to items in that module don't have to be used.

```rust
crate modules
├── fn eat_at_restaurant: pub
└── mod front_of_house: pub(crate)
    └── mod hosting: pub
        └── fn add_to_waitlist: pub
```

When using a function it is idiomatic in Rust to bring the parent module into scope  
On the other hand, when bringing in structs, Enums, and other items with `use`, it’s idiomatic to specify the full path

```rust
mod front_of_house {
    pub mod hosting {
        pub fn add_to_waitlist() {}
    }
}

use crate::front_of_house::hosting;

pub fn eat_at_restaurant() {
    hosting::add_to_waitlist();
}
```


> [!IMPORTANT] Special words used with use
> - `crate`: Refers to current Rust project
> - `self`: Refers to current module
> - `super`: Parent module of the current module we are inside


If `eat_at_restaurant` function is moved inside a module the `use` statement would stop working  
`use` only creates the shortcut for the scope in which the `use` occurs

When a module is brought into scope using `use` keyword, the new name available is private
External code will not be able to use this new namespace  
To make the namespace accessible from external code we can re-export the namespace using the `pub use` keyword

```rust
use std::fmt::Result;
use std::io::Result as IoResult;

fn function1() -> Result {
    // --snip--
}

fn function2() -> IoResult<()> {
    // --snip--
}
```

#### Bringing Nested Paths into Scope

```rust
use std::cmp::Ordering;
use std::io;

// Recommended
use std::{cmp::Ordering, io};

use std::io;
use std::io::Write;

// Recommended
use std::io::{self, Write};
```

Using the Glob operation all public items in a namespace can be brought into scope

```rust
use std::collections::*;
```

#### Modules in Separate Files

A file with the name of the module need to be created

If the module consists on child modules then a folder with the name of the parent module has to be created  
In the folder a file with the name of the child module is created

[Separating Modules into Different Files - The Rust Programming Language](https://doc.rust-lang.org/book/ch07-05-separating-modules-into-different-files.html)  
[07 Modules, Pub and Use | Rust Tutorials - YouTube](https://www.youtube.com/watch?v=6cfcWzsvLrA)