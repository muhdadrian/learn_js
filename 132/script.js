const changeBtn = document.getElementById('changeBtn');

changeBtn.onclick = function () {
  document.body.setAttribute('class', 'light-blue'); //you inspect and check in Elements (next to console), there's light-blue class in body
};

//but setAttribute cannot do double function of giving and erasing class. We use classList instead to manipulate class by using toggle method. Go to 133
