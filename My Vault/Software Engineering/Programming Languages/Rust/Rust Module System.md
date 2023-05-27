---
title: Rust Module System
tags: [rust, programming]
---

### Crates

The smallest piece of code that the rust compiler considers together  
Crates can contain modules and module code can be written in different files

**Binary Crates**  
Can be compiled to an executable that can be run  
Must contain a `main()` function

**Library Crates**  
Can't be compiled into an executable  
Does not contain `main()` function  
Used to write code that has to be shared across projects  
Equivalent to the content of libraries that is present in other languages

### Package

A bundle of one or more crates that implement some functionality  
Each package must contain the `Cargo.toml` file which describes how to build the crates 

> [!NOTE] Cargo (Rust Package Manager)
> - Cargo itself is an package that contains a binary crate that provides all the command-line related functionality. It also contains a library crate that the binary crate depends on for additional functionality  
> - Other packages can also use the cargo library crate to use the command-line features provided by cargo

A package can contain many binary crates but at most only one library crate  
All packages must contain at least one crate

A new project that is created using `cargo new` contains one binary crate  
The `src/main.rs` pattern tells rust to create a binary crate with the same name as the package. This file forms the crate root from which other crates can be loaded

Similarly if we create a `src/lib.rs` file rust will create a library crate with the same name as the package name and this crate will become the crate root for other libraries  
My using `cargo new --lib` we can create a package with a library crate

To create additional binary crates in a package we can add new files in the `src/bin` directory

### Modules

They are used to group code together for easy organization  
A module can contain nested modules, Structs, Enums, Functions, Traits as so on  
It also allow to control the privacy of items. Code inside a module is private by default  

Unlike other languages in Rust an single file can contain multiple modules  
Modules are defined in crates using the `mod` keyword  

```rust
mod front_of_house {
    mod hosting {
        fn add_to_waitlist() {}

        fn seat_at_table() {}
    }

    mod serving {
        fn take_order() {}

        fn serve_order() {}

        fn take_payment() {}
    }
}
```

The `src/main.rs` and `src/lib.rs` files are called root crates as they form the root of the module structure, known as the module tree  
So even if we do not create any module using the `mod` keyword our code will contain a module called `crate` i.e. the root crate

```rust
crate modules
└── mod front_of_house: pub(crate)
    ├── mod hosting: pub(self)
    │   ├── fn add_to_wait_list: pub(self)
    │   └── fn seat_at_table: pub(self)
    └── mod serving: pub(self)
        ├── fn serve_order: pub(self)
        ├── fn take_order: pub(self)
        └── fn take_payment: pub(self)
```

Modules that are at the same level `hosting` and `serving` as called sibling modules

> [!IDEA] Module Visualizer
> - Installation: `cargo install cargo-modules`  
> - List Modules: `cargo modules generate tree`  
> - Generate Tree: `cargo modules generate tree --types --traits --fns --orphans`
