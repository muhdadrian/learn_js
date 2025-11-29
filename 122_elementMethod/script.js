//Element Method
//we are not putting the onclick in HTML anymore

const p3 = document.querySelector('.p3');

function changeColor() {
  p2.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = changeColor; //don't use changeColor() as this will execute the function
