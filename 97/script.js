//refresh how to make object:
//1. function declaration
function hello() {
  console.log('hello');
}
hello();

//2. object literal
var obj = {};
obj.greet = function () {
  console.log('morning');
};
obj.greet();

//3. constructor
function Helo() {
  console.log('helo');
}

new Helo();
