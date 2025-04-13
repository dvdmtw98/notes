---
title: Typescript
tags:
  - programming
  - javascript
date: 2025-04-11 18:16:34 -0500
updated: 2025-04-11 18:24:08 -0500
---

#### Optional Chaining

The **`?.`** is the optional chaining operator.  
It checks if `options` is not `null` or `undefined` before attempting to access the `basePath` property.  
If `options` is `null` or `undefined`, the entire expression evaluates to `undefined` instead of throwing an error.

```js
const person = {
  name: "Alice",
  pet: {
    type: "cat"
  }
};

console.log(person.pet?.type);   // "cat"
console.log(person.car?.brand);  // undefined (no error)
```

#### Non-null Assertion

The **`!`** is the non-null assertion operator.  
It tells TypeScript to assume that `sourcefilePath` is not `null` or `undefined`, even if the type system suggests that it might be.  
It is the programmer's way of asserting, "I know this value is not `null` or `undefined` at this point."

```js
let name: string | undefined = "Bob";

// You tell TypeScript: "Trust me, it's not undefined"
console.log(name!.toUpperCase()); // "BOB"

let name: string | undefined = undefined;
console.log(name!.toUpperCase()); // Runtime error
```

#### OR Assignment

The **`||=`** operator in JavaScript (and TypeScript) is the OR assignment operator.  
It assigns a value to a variable only if the variable is currently falsy (e.g., false, null, undefined, 0, NaN, or an empty string "").

```js
let a;
a ||= 10; // a is falsy (undefined), so it gets assigned 10.
console.log(a); // 10

a ||= 20; // a is now truthy (10), so it doesn't get reassigned.
console.log(a); // 10
```
