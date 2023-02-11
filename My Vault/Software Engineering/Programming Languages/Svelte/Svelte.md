---
title: Svelte
tags: [programming, javascript, svelte, webdev, index]
---

### Table of Content

---

### Commonly Used Commands

````bash
# Setup SPA Application
npm init vite svelte-feedback-app -- --template svelte

npm install
npm run dev
````

* [Introduction / Basics • Svelte Tutorial](https://svelte.dev/tutorial/basics)
* [Svelte for new developers](https://svelte.dev/blog/svelte-for-new-developers)

---

### Best Practices & Coding Conventions

* Svelte Components should follow Pascal Case

---

### Miscellaneous Points

* Functions that mutate arrays and objects do not trigger updates
* Dispatch Event is used to pass events from children elements to parent element
* Slots are used to define the location where the children elements are going to be placed in the component
* Transitions cannot be applied to Custom Elements (Wrap element to HTML element)