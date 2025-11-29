const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let one = 'size';
  let two = 'caption';

  if (this.classList.contains(one)) {
    //old syntax
    // one = temp;
    // one = two;
    // two = temp;

    //new syntax
    [one, two] = [two, one];
  }

  this.classList.toggle(one);
  setTimeout(() => {
    this.classList.toggle(two);
  }, 600);
});
