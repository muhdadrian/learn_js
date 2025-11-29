const box = document.querySelector('.box');
box.addEventListener('click', function () {
  //console.log(this); //click the box to display output in console. And you cannot change the function into arrow function, as it does not have this concept

  //add class for size in HTML
  this.classList.toggle('size');
  //we will wait for 6s based on the animation in CSS (height and margin-top), then we give class caption
  setTimeout(function () {
    this.classList.toggle('caption'); //why the caption is not executed? The this will be filled whatever at outside. When the setTimeout is executed during hoisting, the position of the this is in global. The solution for this is by using arrow function. Go to 212
    //console.log(this); //click to see the output in console - window
  }, 600);
});

//before arrow function we type:
//let that = this; and
//console.log(this)
//to check where the this will point to - window
