//use this in constructor

function Hello() {
  console.log(this);
  console.log('hello');
}

var obj1 = new Hello(); //obj1 == this
var obj2 = new Hello();

//both obj1 and obj2 are doing instant from hello object in function with new object respectively
//this will return the newly constructed object
