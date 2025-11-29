/*
Never use var in js from now on to make variable. Instead use let or const.
*/

/*
console.log(i);
var i = 10;
*/

// the result above will output undefined. In JS, undefined is also a value
// Why? In JS, there's hoisting concept. Hoisting means raising (flag) or lifting (machine pulling thing)
// When you write code like above. What actually happened is:

/*
var i;
console.log(i);
var i = 10;
*/

// the variable is hoisted above the console.log and filled with undefined value

// above is hoisting for variable. There are also hoisting in function and the rest

/* 
Another example of hoisting:

console.log(i);
var i = 10,
  j = 'adrian';

The code above are actually written behind the scene like below:

var i;
var j;
console.log(i);
(i = 10), (j = 'adrian');
*/

/*
To resolve the issue above, use let:
console.log(i);
let i = 10;

The code above will output error when we use let keyword. It will work just like in the other programming languages.

In C or Java, the code will output error, as it's not possible to call a variable before we define it. In JS, it's still can by using var keyword, but the result is wierd (undefined value) due to hoisting
*/

/*
So, one of the reasons, why we are using let or const - it will work just like the other programming languages - C, Java etc 
*/

/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

//the 10th is the last increment of i displayed by the outer console.log
//In JS, it's possible to access the variable (i in console.log) in looping from the variable i of the outer console.log, while in other programming languages it's not possible due to 'Block Scope' (the curley braces) and it will output error.
//JS is embracing 'Function Scope' and not Block Scope
*/

/*
//How to overcome the problem above?
//To unable for access the variable i in inner console.log, we must change the scope into Function Scope like below:

function test() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}

test();
console.log(i); //this will no longer able to access the variable i in block scope
*/

/*
JS programmers to make the variable work just like in other programming language by using function scope, normally they use IIFE or SIAF.

IIFE - Immediately Invoked Function Expression (function expression is invoked while it's being made)

SIAF - Self Invoking Anonymous Function

They apply it so that the variable inside the function cannot be accessed from outside  
*/

/*
we can make anonynous function in JS by using function expression for example:

var x = function () {};

we can also make the function above without putting it inside x variable, but we invoke it on time like function at below:

(function () {

}()); 

() - this means to call the function and inside it we make function like above. The () before the closing parentheses will invoke the function automatically. This is called IIFE or SIAF.

(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();
console.log(i);

The i in outside function cannot access the i within the function

Why we should use IIFE or SIAF? - to protect the JS file in function expression especially when our JS file is already big, we collaborate with others or we use other people's scripts, as we may encounter similar variables with different function

But, the function above is in old JS version style. In ES6, it's enough just to use let keyword. Please check at the code below:

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);

The result will be the same. We cannot access the inner variable i from outside. When we use let keyword above, it will embrace Block Scope, and not Function Scope anymore
*/

/*
let and const embracing Block Scope
*/

//const i = 10; //if we believe that we are not going to change the variable i value, use const

//some say, use let keyword only for 'for loop'
//we'll use more const which value will not change

//const will minimize the state change

/*
//const is not fully immutable for example:
const students = {
  name: 'Adrian',
  age: 41,
};

//students.age = 35; //we can change the age, as long as we do not replace the object with new one for example:
students = {
  faculty: 'Software Engineering',
};

console.log(students);
*/

/*
// Likewise, in array for example:
const i = [1, 2, 3];
//i = [1, 2, 3, 4]; //this will not work
i.push(4); //but, this will work
console.log(i);

//the conclusion is we still can change something in const, as long as we do not change all
*/
