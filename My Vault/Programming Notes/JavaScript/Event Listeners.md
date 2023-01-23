---
title: Event Listeners
---

`e.target` : Event that caused the event  
`e.currentTarget` : Element listening for the event (Element with event listener)

### Event Listeners

````js
element.addEventListener('animationend', (e) => {
	console.log(e.target.nodeName);
}, {once : true});
````

The `{once : true}` option can be used to remove an event listener as soon as its done executing

Input : Perform action even there is an change to the input  
Animationend : Perform action on end of animation  
Transactionend : Perform action at the end of a transaction

**Event Bubbling** : Events from child element bubble to the parent element

````js
element.addEventListener('click', (e) => {
	console.log(e)
}, {capture : true});
````

**Event Capture** : The opposite of event bubbling

`e.stopPropagation()` : Prevent event from prorogating further

Events can be removed using `removeEventListener()`  
Anonymous functions cannot be used as 2nd parameter when using this property

**Event Delegation** : Capturing event on a child element from the parent using the target property