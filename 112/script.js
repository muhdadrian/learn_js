// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'lightblue';

//Or we can use querySelectorAll

// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

//Or we can change scope of the node root
//By default node root is document
// const p4 = document.querySelectorAll('p'); -> how to read -> find all the p elements in document
//we can change document to narrow the search effort

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p'); //the sectionB means, it will find p, only in sectionB
// p4.style.backgroundColor = 'orange';

//Or, you can write conversely:

const sectionB = document.querySelector('section#b'); //#b is enough and section#b is more specific
const p4 = sectionB.getElementsByTagName('p')[0]; //the sectionB means, it will find p, only in sectionB
p4.style.backgroundColor = 'orange';

//it's flexible to choose element. Just use the method that is right for you
