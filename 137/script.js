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

const rSlider = document.querySelector('input[name=rSlider]');

rSlider.addEventListener('change', function () {
  //capture the slide value (right and left) - add min and max at HTML 1st
  //console.log(rSlider.value); //check value when we slide
  const r = rSlider.value;
  document.body.style.backgroundColor = `rgb(${r}, 100, 100)`;
});

//for next go to 138
