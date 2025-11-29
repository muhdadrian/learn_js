//DOM Traversal
//1st we capture all close buttons
const close = document.querySelectorAll('.close');
//console.log(close);

//loop the close button to know which button to click
for (let i = 0; i < close.length; i++) {
  //if we give parameter in function - event / e - then, e is contained the occured event (click). The e will be an object that contained some items (info from the occured event)
  close[i].addEventListener('click', function (e) {
    //console.log(e); //if we click the close button there will be object (PointerEvent) that contained many info
    //console.log(e.target); //the word target we get from the info in PointerEvent (target: span.close)
    //when we hover the detail (<span class="close">x</span>) in console, it will show the span.close detail in the card accordingly
    //by using e.target is more beneficial than close[i].parentElement.style.display = 'none'; (in 143) even they are doing similar thing, but we'll know some info from the event by using e.target
    //e.target.parentElement.style.display = 'none';
  });
}
