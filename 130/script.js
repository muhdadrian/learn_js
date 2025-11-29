//In CSS there's hover, in JS there mouseenter and mouseleave

const p3 = document.querySelector('.p3');

//mouseenter
p3.addEventListener('mouseenter', function () {
  p3.style.backgroundColor = 'lightblue';
});

//mouseleave
p3.addEventListener('mouseleave', function () {
  p3.style.backgroundColor = 'lightgreen';
});
