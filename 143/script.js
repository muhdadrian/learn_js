//DOM Traversal
//1st we capture all close buttons
const close = document.querySelectorAll('.close');
//console.log(close);

//loop the close button to know which button to click
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    //alert(`button no ${i}`);

    //capture the close that we clicked [i], then we trace its parent, when we found, then we style.display = none
    close[i].parentElement.style.display = 'none';
  });
}
