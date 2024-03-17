---
tags:
  - rust
  - programming
  - index
title: Rust
date: 2024-01-28 14:15:56 -0600
updated: 2024-02-24 11:27:48 -0600
---

### Table of Content

1. **Theoretical Concepts**
	- [[program-memory-management|Memory Management]]
		- [[stack-and-heap-memory|Stack and Heap Memory]]
		- [[rust-ownership-model|Rust Ownership Model]]
	- [[rust-module-system|Rust Module System]]
		- [[rust-module-namespace|Rust Module Namespace]]
1. **Core Concepts**
	- [[rust-datatypes|Rust Datatypes]]
	- [[rust-functions|Rust Functions]]
	- [[rust-control-flow|Rust Control Flow]]
		- [[rust-match-expression|Rust Match Expression]]
	- [[rust-slices|Rust Slices]]
	- [[rust-structs|Rust Structs]]
	- [[rust-enums|Rust Enums]]
	- [[rust-collections|Rust Collections]]
	- [[rust-error-handling|Rust Error Handling]]
3. **Advanced Concepts**
	- [[rust-generics|Rust Generics]]
	- [[rust-traits|Rust Traits]]
	- [[rust-lifetimes|Rust Lifetimes]]

### Commonly Used Commands

```bash
# Create new Rust Project
cargo new [--vcs none] <project-name>

# Install dependencies/compile code
cargo build

# Compiles and runs code
cargo run

# Add Dependency to Project
cargo add <crate-name>

# Install a Rust Binary
cargo install <binary-name>
```

* [The Rust Programming Language - The Rust Programming Language](https://doc.rust-lang.org/stable/book/title-page.html)  
* [Naming - Rust API Guidelines](https://rust-lang.github.io/api-guidelines/naming.html)

### Best Practices & Coding Conventions

* Variable, Function, Method and Module names should follow snake case  
* Enums, Traits and Types should be written in Pascal Case
* Constant names should be written in All Caps
* When using functions it is idiomatic in Rust to bring the parent module into scope
