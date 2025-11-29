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

//When I move my mouse the background-color will change
//we'll work with mouse coordinate

//1st we capture the body - we can organise the mouse movement inside the body
//no need to capture by using variable like previously
//the event argument inside the parameter can be written only e.
document.body.addEventListener('mousemove', function (event) {
  //mouse position - use clientX move
  //console.log(event.clientX); //x is horizontal
  //browser size - the browser is inside window object (window from button max, min, close etc) and not in document object (document from the white area in the website).
  console.log(window.innerWidth); //to know the width from the white box (document width, not reaching the close button etc). But because, it's organized by window, we should not write document, instead of window. Try to resize the browser, the size will change accordingly. Why we want the size? I want to get the number from 0 to 255 when I move the mouse
  //xPost - position in x axis
  //to locate cursor position (event) over X axis if divided by browser width ()
  const xPost = Math.round((event.clientX / window.innerWidth) * 255);
  //console.log(xPost);
  const yPost = Math.round((event.clientY / window.innerHeight) * 255);
  //console.log(yPost);
  document.body.style.backgroundColor = `rgb(${xPost}, ${yPost}, 100)`;
});

//currently, the code is only working between 'Play with Color' and the blue slider. Why? because we add the addEventListener in the body - its scope is body. The body suppose to be all the white box, but our content is between the two elements above. Beyond those line, there are no content. Therefore, those beyond two lines are not assumed as body, only between the content. So, we have to make the body full by using CSS.
//Use css to fix the bug: html, body {height: 100%}
//html (outside body)

//Go to 141
