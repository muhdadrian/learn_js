//we add fade in - add keyframes in CSS

const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    //jumbo we add class
    jumbo.classList.add('fade');
    //add timeout to remove the fade class
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);
  }
});

//to make the clicked photo is still in transparent mode. Go to 155
