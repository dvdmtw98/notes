---
tags:
  - rust
  - programming
title: Rust Generics
date: 2024-01-28 14:15:56 -0600
---

Generics are used to reduce code duplication  
It allows to creates functions that can work on multiple datatypes

#### Generics in Function

```rust
fn largest_element<T: PartialOrd>(vector: &Vec<T>) -> &T {
    let mut largest = &vector[0];

    for element in vector {
        if element > largest {
            largest = element;
        }
    }

    largest
}
```

`PartialOrd` is an trait that is implemented by elements that can be compared

#### Generics in Structs & Enums

```rust
struct Point<T, U> {
    x: T,
    y: U,
}

let point1 = Point { x: 2, y: 4 };
let point2 = Point { x: 2.0, y: 4.0 };
let point3 = Point { x: 2, y: 4.0 };
```

Here T and U can be of the same datatype as well

```rust
enum Some<T> {
    Some(T),
    None,
}

enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

#### Generics on Methods

```rust
struct Point<T> {
    x: T,
    y: T,
}

impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }
}

impl Point<f64> {
    fn y(&self) -> f64 {
        self.y
    }
}
```

The x method will be available for all datatypes but y will only be present on `f64` datatype  
The generic type mentioned in the implementation block can use a different variable (it will not make any different)

```rust
struct Point<X1, Y1> {
    x: X1,
    y: Y1,
}

impl<X1, Y1> Point<X1, Y1> {
    fn mix_up<X2, Y2>(self, other: Point<X2, Y2>) -> Point<X1, Y2> {
        Point {
            x: self.x,
            y: other.y,
        }
    }
}

let point3 = point1.mix_up(point2);
println!("{:?}", point3);
```

The types of the point that is passed to the method is different from the type of the point on which the method is defined

#### Performance

Using generics we do not incur any performance penalty as on compile time discrete types of the generics are created as required

```rust
enum Option_i32 {
    Some(i32),
    None,
}

enum Option_f64 {
    Some(f64),
    None,
}

fn main() {
    let integer = Option_i32::Some(5);
    let float = Option_f64::Some(5.0);
}
```
