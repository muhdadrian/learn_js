//Node Manipulation

//to add new list item between item 1 and item 2
const newLi = document.createElement('li');
const newLiText = document.createTextNode('New Item');

newLi.appendChild(newLiText);

//you must check the parent of the li first and then the next li element (item 2), as we are going to use 'insertBefore'

const ul = document.querySelector('section#b ul');
//use query selector as the li has no id and class
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
//we use :nth-child(2), which is pseudo class in css to target the item 2

//Or, you can narrow the scope of li2 search with code below:
const li2 = ul.querySelector('li:nth-child(2)');

//call the parent element - 2 parameter (new node, insert before)
ul.insertBefore(newLi, li2);
