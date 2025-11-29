//use this in constructor

function Hello() {
  console.log(this);
  console.log('hello');
}

new Hello(); //if we only use Hello() without new, console.log(this); is window or global object. But, if we use new, it returns its object - the new object (new Hello()) - newly built instantly, not the function Hello() {}.
