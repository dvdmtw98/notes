---
tags:
  - programming
  - css
  - webdev
title: CSS Inheritance
date: 2024-01-28 14:15:56 -0600
---

There are three different level of CSS styles that are applied to elements  
The initial styles defined in the CSS spec (Formal Definition), the styles specified by the browser (User agent stylesheet) and finally the custom styles specified by us

<u>initial</u>  
Reset the properties to the formal definition values

<u>inherit</u>  
Inherit properties from parent that are not inherited from default  
Font properties are not inherited by form elements setting `font: inherit` will allow them to use the fonts that we have defined

<u>unset</u>  
If element inherits properties that sets itself to inherit else sets itself to initial  
On an element we can set `all: unset` this will cause inherited properties to be inherited and the rest to be set to initial values

<u>revert</u>  
Sets the styles to the default specified in the browser

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N8tFrMZp_wA?si=8WzxxAMJb644hHfD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
