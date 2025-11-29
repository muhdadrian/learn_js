var nama = 'Adrian';
var age = 41;

console.log(sayHello());

function sayHello() {
  return `Hello, my name is ${nama}, I am ${age} years old`;
}

/* 
- In JS Visualizer, when comes to function, it will make Local Execution Context. In the function, there will be creation and execution phases. 
- In Local Execution Context, we can access window and arguments object.
- The arguments object is anything we put inside our function parameter
- Inside it, there's hoisting (local hoisting), to check variable inside the function. If there's any variable, it will be raised to the top of the function (outside the function).
- If there's any variable, filled it 1st with undefined in creation phase. It will be filled with the value in execution phase.
- It also check if there's a function inside the function. If there's any, it will be hoisted too.
*/

//next example go to 174
