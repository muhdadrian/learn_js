/* 
DOM Selection:
1. document.getElementById():
- document (node root)
- document is the default for node root
- how to read?: JS please help me to find the element with id that is in the document
*/

//make variable:
const title = document.getElementById('title');
//variable and id name no need to be similar
//why we do document.getElementById('title')? So that we can manipulate the title variable (const title) for example we want to change its styling, font, to find another element based on the title element.
//type title in console. It will automatically return an element - JS know the title contained that element (h1) with all the nodes (id and text) inside it
//getElementById will return element

//the dot (.) below is method
title.style.color = 'red'; //it will add inline css in console (elements)
title.style.backgroundColor = '#ccc';
title.innerHTML = 'Adrian Nandu';

//getElementsByTagName():
//getElementsByTagName() will return HTMLCollection - it's similar to array - it's wrapped with array wrapper and got index too
//type p in the console - it will return HTMLCollection above
const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'lightblue'; //you must give index first lest it will error | we can style the element only based on index not p as it's an HTMLCollection

//if you want all just copy:
p[1].style.backgroundColor = 'lightblue';
p[2].style.backgroundColor = 'lightblue';
p[3].style.backgroundColor = 'lightblue';

//Or you can use looping. Go to 109
