---
tags: [rust, programming]
---

[Traits: Defining Shared Behavior - The Rust Programming Language](https://doc.rust-lang.org/stable/book/ch10-02-traits.html)

They are used to implement shared/common behavior between types in a abstract manner  
Traits are similar to the concept of Interfaces that are present in other languages  
Traits are normally declared as public so that other crates can use it when required

```rust
pub trait Summary {
    fn summarize(&self) -> String;
}
```

A trait does not contain any implementation it only defines the shared behavior  
The compiler will enforce that every type that has the trait Summary implements all of its methods 

```rust
pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}
```

Default Implementation can be provided so that all methods do not have to bee implemented by the type using the trait

```rust
pub trait Summary {
    fn summarize(&self) -> String {
        String::from("(Read more...)")
    }
}
```

The type that implements the trait can always override the default implementation

#### Traits as Parameters

```rust
pub fn notify(item: &impl Summary) {
    println!("Breaking news! {}", item.summarize());
}
```

In the above snippet the function takes item as a parameter and item can be of item of any type that implements the Summary trait

```rust
pub fn notify<T: Summary>(item: &T) {
    println!("Breaking news! {}", item.summarize());
}
```

The above two snippets represent the same concept. The 2nd snippet uses the Trait Bound syntax  

```rust
pub fn notify(item1: &impl Summary, item2: &impl Summary) {}

pub fn notify<T: Summary>(item1: &T, item2: &T) {}
```

Depending on the function the `impl` syntax could be more concise to read

```rust
pub fn notify(item: &(impl Summary + Display)) {}

pub fn notify<T: Summary + Display>(item: &T) {}
```

A type that implements multiple type can be denotes using the `+` operator

```rust
fn some_function<T: Display + Clone, U: Clone + Debug>(t: &T, u: &U) -> i32 {}

// Where Clause
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{}
```

When there are multiple generics and trait involved the Trait Bound and `impl` syntax both can get a little overwhelming to understand  
To make the code much more readable we can make use of the where clause

#### Returning Traits

```rust
fn returns_summarizable() -> impl Summary {
    Tweet {
        username: String::from("horse_ebooks"),
        content: String::from(
            "of course, as you probably already know, people",
        ),
        reply: false,
        retweet: false,
    }
}
```

We can even create functions that return items that implement a trait instead of mentioning an concrete type  
This concept in very useful when creating closures and iterators

This syntax has an limitation though it cannot be used to return different types from the function

```rust
fn returns_summarizable(switch: bool) -> impl Summary {
    if switch {
        NewsArticle {
            headline: String::from(
                "Penguins win the Stanley Cup Championship!",
            ),
            location: String::from("Pittsburgh, PA, USA"),
            author: String::from("Iceburgh"),
            content: String::from(
                "The Pittsburgh Penguins once again are the best \
                 hockey team in the NHL.",
            ),
        }
    } else {
        Tweet {
            username: String::from("horse_ebooks"),
            content: String::from(
                "of course, as you probably already know, people",
            ),
            reply: false,
            retweet: false,
        }
    }
}
```

The above code would result in an error when compiled

By using trait bounds we can implement methods that are only available when the item is of a specific type

```rust
use std::fmt::Display;

struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("The largest member is x = {}", self.x);
        } else {
            println!("The largest member is y = {}", self.y);
        }
    }
}
```

In the above snippet, the `new()` function will be available of Pair of all types but the `cmp_display()` method will be only available for types that implement the `Display` and `PartialOrd` traits

#### Blanket Implementations

```rust
impl<T: Display> ToString for T {
    // --snip--
}
```

We are implementing the trait `ToString` on all types of T that implement the trait Display  
These implementations are called as Blanket Implementations
