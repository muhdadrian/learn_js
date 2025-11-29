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

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // you can set 0 to r and g and let the blue choose its color randomly. You can also do the same with r and g
});
