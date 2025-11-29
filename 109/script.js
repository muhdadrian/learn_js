//document.getElementsByTagName():
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = 'lightblue';
}

//use getElementsByTagName even only 1 element for example h1
//type h1 in console after declaring the variable below - it's HTMLCollection - so get the index 0
const h1 = document.getElementsByTagName('h1')[0];
//h1[0].style.backgroundColor = 'green'; Or simpler code put the index after ('h1) above
h1.style.fontSize = '50px';

//document.getElementsByClassName():
//this will return HTMLCollection
const p1 = document.getElementsByClassName('p1')[0]; //type p1 in console
//p1[0].innerHTML = 'This is changed by JS'; //Or you move the index after ('p1') above then write:
p1.innerHTML = 'This is changed by JS';
