/*
What is the difference between Event Handler and addEventListener()?
1.  Event Handler - the last change will replace the previous one, while addEventListener will add the change
*/

//1. Event Handler

//when we click paragraph 3, its background turned into lightblue
const p3 = document.querySelector('.p3');
p3.onclick = function () {
  p3.style.backgroundColor = 'lightblue';
};

//add another event
p3.onclick = function () {
  p3.style.color = 'red'; //change text color
};

//for addEventListener go to 127
