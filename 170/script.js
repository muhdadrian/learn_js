//if you are using any data type in JS, it's object and there's protoype included in the object.

/*
//for example:
let number = [];
//what happened behind the scene is:
let number = new Array(); //this is a constructor function. Array is an object that included prototype. 
*/

/*
//the number variable below will call the Array function at below:
let number = new Array();

//just assume, in JS it's included:
function Array() {
  //because we are using constructor function the below code must have
  let this = Object.create(Array.prototype); //it must be connected with its parent class - prototype
}
*/

/*
let number = [1, 2, 3];
console.log(number.reverse());

let number = [3, 1, 2];
console.log(number.sort());
*/

//where the reverse and sort methods above coming from? It's a prototype from array object

//if we only console log the number like below. There's prototype included. Click the prototype to know array object.
// let number = [3, 1, 2];
// console.log(number);
//the number array above is inherit all the methods from array object

//to check array just type: Array.prototype in console
//for object also can, just type: Object.prototype to know the methods
//even for number, just type: Number.prototype for example you want to check number array below:
//let number = 1; //you can check its prototype
