const name = document.querySelector('.name');
//console.log(name);
//console.log(name.parentElement);
//console.log(name.parentNode);

//to get the container from name (name's grandfather)
//console.log(name.parentElement.parentElement);

//to trace name's great grandfather
//console.log(name.parentElement.parentElement.parentElement);

//console.log(name.nextSibling); //look at its nodeValue (enter or next line) - when write nextSibling it captures node - when we write name line of code, it will enter once or go to the next line (The enter or next lined is captured by the nextSibling). Unless, we erase the next line by typing the 2nd span side by side with the 1st one, it will capture the 2nd span (telp). This is the difference between node and element

//if you want to make sure you capture the element use nextElementSibling - it will ignore the enter or next line (node)
//console.log(name.nextElementSibling);

//to capture previous element
//console.log(name.previousElementSibling);

//there's no sibling after img. Therefore resulted null
//console.log(name.previousElementSibling.previousElementSibling);

//to capture the close
console.log(name.nextElementSibling.nextElementSibling);
