---
tags:
  - programming
  - css
  - webdev
title: CSS Element Types
date: 2024-01-28 14:15:56 -0600
---

### Block

Almost all the elements in HTML are blocks  
They **always stack above each** other even if there is room for them to be placed side by side  
By default they have a **<u>width: 100%</u>**  
They always force a new line of content

### Inline

They do not force a new line of content  
Properties like **margin, width, height and padding** when used will have no effect **on their layout**

The padding property when used will show up on the element but it will not move the element from its location (It will overflow into the surrounding elements)

### Inline-block

Used when we want to give height to inline elements  
This will allow us to use the margin, padding, width and height properties (like block elements)  
Will not force a new line of content (like inline elements)

### Replaced Elements

Elements whose contents are not affected by the current document's styles  
They behave exactly like inline-block elements

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/x_i2gga-sYg?si=PR1iC8Z0idgyIU52" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Replaced elements - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element)
