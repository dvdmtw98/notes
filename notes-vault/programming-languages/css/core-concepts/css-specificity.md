---
title: CSS Specificity
tags:
  - css
  - webdev
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

If **multiple same type selectors** are used and they have conflicting attributes then the one that is last in the cascade is will be applied 

Tag & pseudo-element Selector : Lowest Specificity  
Class & pseudo-class & Attribute Selector : More specific than tags  
Id Selector : Higher specificity than classes  
Inline Styles : Highest specificity

 > [!INFO]
 > * Universal selector (\*), combinators (+, >, ~, ' ', ||) and negation pseudo-class (:not()) have no effect on specificity
 > * When using **`:is()`** selector the element with the highest specificity becomes the specificity for all of the other elements

Id Selectors should be avoided whenever possible for styling as they will override the styles specified by classes  
All the selectors (even Inline) can be overwritten using the `!important` keyword (Should never be used)

Avoid using tag selectors as must as possible to style elements  
We should try to avoid using nested selectors whenever possible  
**<u>Always use classes</u>** for styling elements

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c0kfcP_nD9E?si=pNM98GZMfklmPT5-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Specificity - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)  

[Specificity Calculator](https://specificity.keegan.st/)
