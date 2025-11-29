//use this in object literal
var obj = {};
obj.hello = function () {
  console.log(this); //it return its own object (obj.hello(); - obj.hello = function () {})
  console.log('hello');
};
obj.hello();
