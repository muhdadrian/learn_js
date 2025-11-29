//querySelectorAll will return array or nodelist and saved in close variable
const close = document.querySelectorAll('.close');

//we loop the close variable. Each of its element we represent as new variable named el
close.forEach(function (el) {
  //el we give event called click. When the button (x button) we clicked..
  el.addEventListener('click', function (e) {
    //it will target x element, then capture its parent element and then change its CSS (style) to display none.
    //parentElement is DOM Traversal
    //e.target.parentElement.style.display = 'none';
    //e.target.parentElement.parentElement.style.display = 'none'; //when you click any x button, all the cards will be gone as this will trace back to container
  });
});

//prevent default go to 148
