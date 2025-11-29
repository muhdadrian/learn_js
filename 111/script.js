const p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}

/*
So which one to choose?
1. getElementById(): 
2. getElementsByTagName():
3. getElementsByClassName():
4. querySelector()
5. querySelectorAll()

- we choose based on our cases and what we need.
- if in HTML element already has id why not use getElementById()
- if in HMTL already has class why not use getElementsByClassName()
- if we cannot change HMTL structure for example we cannot add id and class, we'll use querySelector() and querySelectorAll()
- for performance both getElementById() and getElementsByTagName() are faster compared to the other three methods
- make sure you use getElementById() and getElementsByTagName() first. Only if you cannot target specific element with them, then use the other three.
*/
