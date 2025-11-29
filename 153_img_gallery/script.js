//event delegation technique - the photo we clicked will go to the main photo
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

//e to mark the event
container.addEventListener('click', function (e) {
  //we'll check whether the one we clicked is thumb
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
  }
});

//right click, inspect. In elements, when we click a photo, its main img will show different img/no. in HTML.
