---
title: CSS Units
tags:
  - css
  - webdev
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-28 14:15:56 -0600
---

### TL;DR

Font Size : rem  
Width : % in combination with max-width, ch  
Height : %, rem, vh  
Padding/ Margin : em, rem  
Media Queries : em  
Shadow, Border and Other Small Things : px

 > [!info]
 > * Avoid setting height on elements, but if it absolutely necessary use it along with min-height
 > * Be careful when using viewport units as they can behave weirdly on mobile devices

### Absolute Units

Pixels (px)  
Points (pt) it is slightly bigger than pixels  
Pc is an similar unit (1pc = 20pt)

Rarely Used : inches, cm, mm

Absolute units should be avoided as their sizes are fixed and they will not change depending on the display size

### Relative Units

**<u>Rem Unit</u>**  
Size always relative to the font size of the root element (HTML element)  
Default = 16px  
If we change the font size in browser settings then all the rem units will scale accordingly

 > [!tip]
 > * Set the font size of the HTML element to 62.5%
 > * This causes the base font size to become 10px which makes the calculation for the other elements easier

[PX to REM converter (instantly and bidirectional)](https://nekocalc.com/px-to-rem-converter)

**<u>Em Unit</u>**  
Size relative to the font size of the parent element  
Need to be careful of compounding effect

When we used em to define an value any property leaving font size (margin, padding, etc.) the value is going to be relative to the font size of the current element

Em is an good option to use if we want all the elements inside an element to scale automatically based on the size of the parent element

**<u>% Unit</u>**  
Percentage scale relative to parent element

**<u>vw/vh Units</u>**  
Size elements wrt the size of the viewport/ screen (They are not relative to any element)  
1 vw/vh = 1% of total viewpoint width/ height

If children elements that have size larger then the size of the parent element that is sized using viewport units, the children elements will overflow 

Vmax : Use the larger of the two units (vw/ vh)  
Vmin : Use the smaller of the two units

**<u>Ch Unit</u>**  
Roughly equal to the size of 0 in any given font  
An good choice to use if we trying to fit a certain amount of characters on a line

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/N5wpD9Ov_To?si=aQ3ebWcGr_2XOUFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dHbYcAncAgQ?si=7E0js9PjTMk0R8HV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/_-aDOAMmDHI?si=XsR1S7zoLvx07h5R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
