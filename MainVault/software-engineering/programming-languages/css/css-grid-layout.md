---
tags:
  - css
  - webdev
title: CSS Grid Layout
date: 2024-01-28 14:15:56 -0600
updated: 2024-01-29 12:22:00 -0600
---

Grid container : Element with display set to **grid**  
Grid Items : Direct children of grid container

Height of items are by default based on the content inside the item  
The largest items height becomes the height of all items on a row

When working with grids enable the Grid Layout overlay option in browser Dev Tools (In Elements tab select Grid Label on the parent container)

### Container Properties

grid-template-columns : Define no. and size of each column  
Fractional Unit (fr) is commonly used it specifies the % of total space to use  
Px, Rem, % will cause grid-items to overflow if total size greater than parents  
repeat(3, 1fr) : Three columns of same size

gap : Shorthand for **row-gap** and **column-gap**  
Define margin around the items

grid-auto-rows : Define height of grid-items  
Can use fixed values but will cause content of items to overflow  
mimax(300px, auto) : Allows to specify the min and max height for the items

grid-template-row : Define the size for columns  
Similar to grid-template-columns. Fractional units are preferred

align-items : Align items vertically (Similar to Flexbox)  
Default values is stretch

justify-content : Align items horizontally (Similar to Flexbox)

### Item Properties

align-self : Align items horizontally independent of other items  
justify-self : Align items vertically independent of the other items

grid-column : 1/ 3 (Span element from line 1 to line 3  horizontally)  
Shorthand for **grid-column-start** and **grid-column-end**

grid-row : 2 / 4 (Span elements vertically)  
Shorthand for **grid-row-start** and **grid-row-end**

### Responsive Layout

Media Queries that change the **grid-template-columns** to have fewer columns

grid-template-columns : repeat(auto-fit, minmax(min(200px, 100%), 1fr))  
If size of columns is smaller than 200px wrap grid-items by reducing columns  
If more than 200px of empty space available wrap grid-items by increasing columns  
The min function is used to prevent overflow and very small screen sizes

### Grid Template Area

````css
grid-template-areas:
	"header header header"
	"nav content sidebar"
	"nav footer footer";
````

Specify the layout of the components using names  
On the **grid-items** use **grid-area** property to set it names to the name specified in **grid-template-areas**

All the other grid properties can still be used when using template areas

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0xMQfnTU6oo?si=JcgVJ37ye8EEqlLy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rg7Fvvl3taU?si=rRfd1BEffhbh6dvJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=Kp1eKWXewQZhUf1W&amp;list=PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
