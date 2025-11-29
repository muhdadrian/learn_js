//Node Manipulation

const newPara = document.createElement('p');
const newText1 = document.createTextNode('New Paragraph');
newPara.appendChild(newText1);
const sectionA = document.getElementById('a');
sectionA.appendChild(newPara);

const newLi = document.createElement('li');
const newLiText = document.createTextNode('New Item');
newLi.appendChild(newLiText);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(newLi, li2);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const newH2 = document.createElement('h2');
const newText = document.createTextNode('New Title');
newH2.appendChild(newText);
sectionB.replaceChild(newH2, p4);

//to color to differentiate between new and old element
newPara.style.backgroundColor = 'lightgreen';
newLi.style.backgroundColor = 'lightgreen';
newH2.style.backgroundColor = 'lightgreen';

//All the elements above are modified using JS without touching HTML
