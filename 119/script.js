//Node Manipulation

//replace paragraph 4
//1. capture the parent 1st - section B
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p'); //this will capture paragraph 4, which is the first it found. Don't use document.querySelector('p') as it will find the paragraph 1 first, which is wrong. By using sectionB as we want to limit its query in sectionB

//2. make new element
const newH2 = document.createElement('h2');
const newText = document.createTextNode('New Title');

//enter the text inside h2
newH2.appendChild(newText);

//replacement
//take the parent - sectionB and replaced with new child
//two parameter(new node, old node) - new node will replace the old node
sectionB.replaceChild(newH2, p4);
