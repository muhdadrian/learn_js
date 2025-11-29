//use this in object literal
var obj = { a: 10, name: 'Adrian' };
obj.hello = function () {
  console.log(this); //it returns its own object with a and name properties, and method hello
  console.log('hello');
};
obj.hello();
