//Node Manipulation

//to add new paragraph under para 3 by using JS:
//1. make new element
const newPara = document.createElement('p');
const newText = document.createTextNode('New Paragraph');
//two nodes (newPara and newText) above are currently not related, but both are already inside memory.

//2. save the text in p
newPara.appendChild(newText);

//3. put the new p at the last of Section A
const sectionA = document.getElementById('a');
//why use getElementById - section A has id
sectionA.appendChild(newPara);
