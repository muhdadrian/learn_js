/*
Replace back the a link with span for close button in HTML

Previously, we learned that we added event to x button. When the x button is clicked, the event will be bubbling to the top to card then to container, to body to html and khalas (settled)  


 */

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  //console.log(e.target); //to know what we click inside container div - img, name, phone, x button - you can hover the output in console
  //this is more effective as we just add an event in container
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
  }

  //now, if we create a new card on real-time at browser (not in script) then we click the x button, it will be gone

  //to be more confident add prevent default as you might click a link in the class name.Go to 152
});
