/*
In previous lessons:
# getElementById() -> returned element
# getElementsByTagName() & getElementsByClassName() - with s means plural -> returned HTMLCollection
 */

/*
# querySelector() is similar to getElementById(). to return an element.
#query means we are asking. We're asking about what? Selector CSS 
# querySelectorAll() to return nodelist. It different compared to getElementsByTagName() & getElementsByClassName()
*/

//document.querySelector()
//PLEASE READ IN CSS FILE first
const p4 = document.querySelector('#b p'); //what we put inside the bracket is CSS
//type p4 in console to check our selection
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// there's a moment where we cannot change HMTL by adding id and class, but we can target the element by using querySelector

// //the querySelector below will only return the first p (element) that it found
// const p = document.querySelector('p');
// p.innerHTML = 'This is changed by JS';

//if we want to change all p use querySelectorAll
//try type p in console. It'll return nodelist and not HTMLCollection
//if you change to getElementsByTagName below and type p in console. It'll return HTMLCollection
const p = document.querySelectorAll('p');
p[2].style.backgroundColor = 'lightblue';

//if want all use loop. Go to 111
