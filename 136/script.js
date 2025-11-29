const changeBtn = document.getElementById('changeBtn');

changeBtn.onclick = function () {
  document.body.classList.toggle('light-blue');
};

const randomBtn = document.createElement('button');

const textBtn = document.createTextNode('Random Color');

randomBtn.appendChild(textBtn);

randomBtn.setAttribute('type', 'button');

changeBtn.after(randomBtn);

randomBtn.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

//For slider
//the slider has no id, class. So, we cannot use getElementById and getElementByClassName
const rSlider = document.querySelector('input[name=rSlider]'); //JS please find input with name rSlider
//to check if rSlider has already captured it - type rSlider in console

rSlider.addEventListener('change', function () {
  //alert('ok'); //to check if the slider is working
});

//go to 137
