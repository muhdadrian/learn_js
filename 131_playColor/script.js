//In programming, to reach a goal you can use different approaches. - SG
//To make button you can use either HMTL or JS

//In this exercise, when the button is clicked it will change to your favorite color

//we capture the button 1st (we can use variable similar to id in HTML so that it's easier), while you are free to use any variable name
const changeBtn = document.getElementById('changeBtn');

//we capture the body as the body has no body and we need to give index
//const body = document.getElementsByTagName('body')[0];// but for body you can write like this or like below, which is easier, as body already has its document.body
//we use Event Handler
changeBtn.onclick = function () {
  //alert('ok'); // to check 1st
  document.body.style.backgroundColor = 'lightblue'; //for body no need to capture by using DOM Selection
};
