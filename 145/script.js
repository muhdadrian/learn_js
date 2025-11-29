//DOM Traversal
//close below is nodelist where we can treat like array
const close = document.querySelectorAll('.close');

//the parameter is free. We use el as we want to take an element
//el is like close[i] if we use for loop
//el === close[i]
close.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.target.parentElement.style.display = 'none';
  });
});

//we use either foreach or for loop
//if we use foreach we need not to use its iterator
