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
const bSlider = document.querySelector('input[name=bSlider]');

rSlider.addEventListener('input', function () {
  const r = rSlider.value;
  const g = gSlider.value;
  const b = bSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

gSlider.addEventListener('input', function () {
  const r = rSlider.value;
  const g = gSlider.value;
  const b = bSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

bSlider.addEventListener('input', function () {
  const r = rSlider.value;
  const g = gSlider.value;
  const b = bSlider.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

//if you already understand DOM you are powerful over elements in your website - SG
