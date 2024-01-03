---
tags:
- rust
- programming
- index
title: Rust
---

### Table of Content

1. **Theoretical Concepts**
	- [Memory Management (Programming Languages)](../../software-concepts/memory-management-programming-languages.md)
		- [Stack and Heap Memory](../../software-concepts/stack-and-heap-memory.md)
		- [Rust Ownership Model](rust-ownership-model.md)
	- [Rust Module System](rust-module-system.md)
		- [Rust Module Namespace](rust-module-namespace.md)
1. **Fundamental Concepts**
	- [Rust Datatypes](rust-datatypes.md)
	- [Rust Functions](rust-functions.md)
	- [Rust Control Flow](rust-control-flow.md)
		- [Rust Match Expression](rust-match-expression.md)
	- [Rust Slices](rust-slices.md)
	- [Rust Structs](rust-structs.md)
	- [Rust Enums](rust-enums.md)
	- [Rust Collections](rust-collections.md)
	- [Rust Error Handling](rust-error-handling.md)
3. **Advanced Concepts**
	- [Rust Generics](rust-generics.md)
	- [Rust Traits](rust-traits.md)
	- [Rust Lifetimes](rust-lifetimes.md)

---

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

---

### Best Practices & Coding Conventions

* Variable, Function, Method and Module names should follow snake case  
* Enums, Traits and Types should be written in Pascal Case
* Constant names should be written in All Caps
* When using functions it is idiomatic in Rust to bring the parent module into scope

---

[Programming Languages](../programming-languages.md)