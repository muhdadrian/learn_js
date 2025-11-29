//each node in DOM must have relation to each other

//Event Handling
//querySelector will only one capture 1 element it found - so the close and card only occured the 1st card
const close = document.querySelector('.close');
const card = document.querySelector('.card');

//close clicked, then the card lost
close.addEventListener('click', function () {
  //we can remove element used DOM Selection or by using CSS
  card.style.display = 'none';
});

//querySelectorAll to capture all cards. Go to 143
