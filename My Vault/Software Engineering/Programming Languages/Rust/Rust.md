---
tags: [rust, programming, index]
---

### Table of Content

1. **Theoretical Concepts**
	- [Memory Management (Programming Languages)](../../Software%20Concepts/Memory%20Management%20(Programming%20Languages).md)
		- [Stack and Heap Memory](../../Software%20Concepts/Stack%20and%20Heap%20Memory.md)
		- [Rust Ownership Model](Rust%20Ownership%20Model.md)
	- [Rust Module System](Rust%20Module%20System.md)
		- [Rust Module Namespace](Rust%20Module%20Namespace.md)
1. **Fundamental Concepts**
	- [Rust Datatypes](Rust%20Datatypes.md)
	- [Rust Functions](Rust%20Functions.md)
	- [Rust Control Flow](Rust%20Control%20Flow.md)
		- [Rust Match Expression](Rust%20Match%20Expression.md)
	- [Rust Slices](Rust%20Slices.md)
	- [Rust Structs](Rust%20Structs.md)
	- [Rust Enums](Rust%20Enums.md)
	- [Rust Collections](Rust%20Collections.md)
	- [Rust Error Handling](Rust%20Error%20Handling.md)
3. **Advanced Concepts**
	- [Rust Generics](Rust%20Generics.md)
	- [Rust Traits](Rust%20Traits.md)
	- [Rust Lifetimes](Rust%20Lifetimes.md)

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

- [The Rust Programming Language - The Rust Programming Language](https://doc.rust-lang.org/stable/book/title-page.html)  
- [Naming - Rust API Guidelines](https://rust-lang.github.io/api-guidelines/naming.html)

---

### Best Practices & Coding Conventions

- Variable, Function, Method and Module names should follow snake case  
- Enums, Traits and Types should be written in Pascal Case
- Constant names should be written in All Caps
- When using functions it is idiomatic in Rust to bring the parent module into scope

---

[Programming Languages](../Programming%20Languages.md)
