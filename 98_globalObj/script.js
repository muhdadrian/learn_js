//this
console.log(this); //by default this contain window or called Global Object.
console.log(window === this);

var a = 10;
console.log(a);
console.log(this.a);
console.log(window.a);

//this === window
//when we do variable in global scope, it's property or method from window object
//to be clear, in global scope, this is window
