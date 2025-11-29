const title = document.getElementsByTagName('h1')[0];
//title.setAttribute('name', 'adrian'); //right click and inspect at h1 - check at element - there are new attribute: name with adrian value added in the line of code
//if you type in console: title.setAttribute('name', 'adrian');, the function is same with the above - you can check at the elements once again and the attribute is added

const a = document.querySelector('section#a a');
//type: a.setAttribute('id', 'link') in the console and check at elements, there is id with link value added in the a link

//if we type: a.getAttribute('href') in the console. It will return: 'https://instagram.com/adriannandu'

//to get id:
//type in console: title.getAttribute('id');

//to remove an attribute
//type in console: a.removeAttribute('href'); -> the underline in the link will be removed (It means the href is removed)

//to add class (label) besides class p2
const p2 = document.querySelector('.p2');
//p2.setAttribute('class', 'label'); //this will replace the p2 class - use classlist instead

//to check class list:
//type in console: p2.classList;

//to add new class
//type in console: p2.classList.add('label'); -> this will not replace the p2 class

//recheck the class list:
//type in console: p2.classList;

//to remove
//p2.classList.remove('label');

//to use toggle:
//p2.classList.toggle('label'); -> this will return true and the label class is added in p2
//retype for 2nd time in console: p2.classList.toggle('label'); -> this will return false, as it removed the label class

/*
in console you can type:
- document.body
- document.body.style.backgroundColor = 'lightblue'; -> this will give color to whole body.
 */

/*
- by typing in console: document.body.classList.toggle('light-blue') -> this will add light-blue class in body
- when you retype once again, the class will be gone
- this method we'll use in button like you switch on and off the light
*/

/*
p2.classList.add('one')
p2.classList.add('two')
p2.classList.add('three')
- p2 will have another three classes besides p2 itself
- p2.classList.item(2); -> to find the class in index 2
- p2.classList.contains('two'); -> this will return true [we're asking JS]
- p2.classList.contains('four'); -> will return false
- p2.classList.replace('three', 'four'); -> this will replace the class three with four
*/
