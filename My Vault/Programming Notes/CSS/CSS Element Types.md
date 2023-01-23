---
title: CSS Element Types
---

### Block

Almost all the elements in HTML are blocks  
They **always stack above each** other even if there is room for them to be placed side by side  
By default they have a **<u>width: 100%</u>**  
They always force a new line of content

---

### Inline

They do not force a new line of content  
Properties like **margin, width, height and padding** when used will have no effect **on their layout**

The padding property when used will show up on the element but it will not move the element from its location (It will overflow into the surrounding elements)

---

### Inline-block

Used when we want to give height to inline elements  
This will allow us to use the margin, padding, width and height properties (like block elements)  
Will not force a new line of content (like inline elements)

---

### Replaced Elements

Elements whose contents are not affected by the current document's styles  
They behave exactly like inline-block elements

---

**<u>References</u>**:

* [Block, Inline, and Inline-Block explained | CSS Tutorial - YouTube](https://www.youtube.com/watch?v=x_i2gga-sYg)
* [Replaced elements - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)