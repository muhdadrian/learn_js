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
const gSlider = document.querySelector('input[name=gSlider]');

rSlider.addEventListener('change', function () {
  const r = rSlider.value;
  const g = gSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
});

gSlider.addEventListener('change', function () {
  const r = rSlider.value;
  const g = gSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
});

//but, the color will only change when you release the mouse. You should not use the change event instead of input (real-time). Go to 139
