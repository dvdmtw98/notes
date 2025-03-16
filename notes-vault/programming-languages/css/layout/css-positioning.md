---
title: CSS Positioning
tags:
  - css
  - webdev
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

Static is the default position that all the elements will have on the page by default

### Relative

Removes the element from the normal flow of document  
All the elements on the page still behave as if the element is still part of the flow

Allows us to use the **top, bottom, left, right** and **z-index** properties  
The positions is applied relative to the original position of the element

Generally position relative is not used on its own

### Absolute

Removes the element from the normal flow of document  
By default it well remain in the location from where it was removed  
All the other elements on the page behave as if the element does not exist

Allows us to use the **top, bottom, left, right** and **z-index** properties  
These positions are applied relative to the parent element that has the position property set to **relative**  
If no such element is found its positioned wrt. root element (HTML element)

Making the element absolute causes the dimensions of the element to collapse (It will only occupy the space that is required)

### Fixed

Removes the element from the normal flow of document  
All the other elements on the page behave as if the element does not exist

Allows us to use the **top, bottom, left, right** and **z-index** properties  
The position is applied always relative to the root (HTML) element  
The element will be fixed to the position even if we scroll the page

### Sticky

It is a combination of both **relative** and **fixed** positioning

Allows us to use the **top, bottom, left, right** and **z-index** properties  
The element will act as relative positioned element normally but if we scroll the screen and the position of the element becomes less than the specified value it will behave as fixed element

Sticky element live only inside its parent element  
Once the parent element is removed from the screen so is the sticky element

---

### Positioning Properties

The properties top, bottom, left and right define how far the respective size of the element is from their parent element  
The **inset** property is the shorthand for the above four properties

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jx5jmI0UlXU?si=wONpNSlsbiRXz9XM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/P6UgYq3J3Qs?si=hFyC2ssX2GCNUOPV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8TyoihVGErI?si=por4Z-41LtXe4aro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

[Sticky Position Header](https://codepen.io/WebDevSimplified/pen/wYmEPz)  

[Sticky Position List](https://codepen.io/WebDevSimplified/pen/pxLOVp)
