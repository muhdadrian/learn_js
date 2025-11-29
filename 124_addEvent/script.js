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

//click paragraph 4 will pop out the alert
const p4 = document.querySelector('section#b p');
//write two parameters('event mau apa?', function) below
//to read code below: JS please find p4 element, then when there's a click event, please do something. What to do? add 2nd parameter and execute the function
p4.addEventListener('click', function () {
  alert('ok');
});
//above is function expression or anonymous function
//if the code is not working, the first thing to do is check its console
