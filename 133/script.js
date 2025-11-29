const changeBtn = document.getElementById('changeBtn');

changeBtn.onclick = function () {
  document.body.classList.toggle('light-blue');
};

//toggle - if there's class erase it, if there's no class add to it (class name is light-blue)
//you inspect and check at elements: try to click the button and you'll see a class is being added to the body, and it'll be gone if you clicked for the 2nd time
