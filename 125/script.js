//addEventListener() method

const p3 = document.querySelector('.p3');

function changeColorP2() {
  p2.style.backgroundColor = 'lightblue';
}

function changeColorP3() {
  p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = changeColorP2;

//Each time we click paragraph 4 it will add new item list.
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
  //we capture the parent 1st
  const ul = document.querySelector('section#b ul');

  //we add new element li
  const newLi = document.createElement('li');

  //we make text
  const liNewText = document.createTextNode('New Item');
  newLi.appendChild(liNewText);
  ul.appendChild(newLi);
});
