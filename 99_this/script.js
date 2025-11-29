//use this in function declaration
function hello() {
  console.log(this); //the result is as if we are doing this in global scope
  console.log('hello');
}

//hello(); //this is the same when we write 'window.hello();', as it global scope. It means I also can use 'this.hello();'

this.hello(); // this return global object

//property is variable in object
//method is function in object
//global scope is window (assume it as window object)

/*
var a = 10; 
console.log(window.a);

-when we make variable a, we can say window object (in console.log above), inside it there's property a with value 10
*/
