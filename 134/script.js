const changeBtn = document.getElementById('changeBtn');

changeBtn.onclick = function () {
  document.body.classList.toggle('light-blue');
};

//when we click the color will come out randomly
//we'll make button by using JS and not HTML

//make button element
const randomBtn = document.createElement('button');
//create text for button
const textBtn = document.createTextNode('Random Color');
//put the text inside the button
randomBtn.appendChild(textBtn);
//we give type and value to the button (like type="button" in HTML)
randomBtn.setAttribute('type', 'button');
//we put the button under the previous button in HTML - we can use appendChild, insertBefore or the new one (after | before)

//we capture the previous button 1st and then put the new button
changeBtn.after(randomBtn); //the display is inline

//we use addEventListener. When we click (click is the event that we are doing) the function will be executed. Some call the function as callback
randomBtn.addEventListener('click', function () {
  //Math.random function will give number from 0 to 1 randomly
  //but we want the random number between 1 and 255
  const r = Math.round(Math.random() * 255 + 1); //this will not > than 256 (suppose to limit to 255 only. So, 254 + 1. Maybe can try Math.floor. If Math.ceil, it will add 1) and < 1
  console.log(r);
  //document.body.style.backgroundColor = 'rgb(' + r + ', 100, 100)'; //we are playing with red color

  document.body.style.backgroundColor = `rgb(${r}, 100, 100)`; // we can use template literal

  //next go to 135
});

//Three function to make whole number:
//1. Math.round
//2. Math.floor
//3. Math.ceil
