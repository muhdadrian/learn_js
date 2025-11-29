const box = document.querySelector('.box');
box.addEventListener('click', function () {
  this.classList.toggle('size');

  setTimeout(() => {
    this.classList.toggle('caption');
  }, 600);
});

//to make the box display better, go to 213
