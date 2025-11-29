//Template Literal / Template String

/*
String Literal:
let nama = 'Adrian'; //single quotes
let matric = '303040494'; //double quotes in SG
let email = `adriannandu@mit.edu`; //back tick to enable us to make template literal
*/

/*
Template Literal:
- use back tick: ``. By using back tick we can make:
1. multi-line string 
2. embedded expression
3. HTML Fragments
4. Expression Interpolation - it's like double quotes for php
5. Tagged Template
*/

/*
Template Literals Examples:

//normal string
`string text`

//multi-line string:
`string text row 1
string text row 2
string text row 3`

//embedded expression:
`string text ${expression} string text`

//Tagged Template:
tag `string text ${expression} string text`
*/

//multi-line string with single quotes:
console.log('string 1\nstring 2'); //use escape character \n to add new line.

//multi-line string with back tick:
console.log(`string 1 
string 2`); //you can enter once or twice

//multi-line string (HTML Fragments) by using single quotes
const student = {
  name: 'Adrian Nandu',
  age: 33,
  matric: '0404040',
  email: 'adriannandu@mit.edu',
};

let el = '';
el += '<div class="student">';
el += '<h2>' + student.name + '</h2>';
el += '<span class="matric">' + student.matric + '</span>';
el += '</div>';

console.log(el); //this element will be displayed in DOM by using innerHTML. Cukup ribut menggunakan concat

//multi-line string (HTML Fragments) by using back tick
let element = `<div class ="student">
  <h2>${student.name}</h2>
  <span class="matric">${student.matric}</span></div>`;

console.log(element); //even there's white space in the HTML or console, as you are using tab in making the element, but it will be ignored by browser

//embedded expression (you can store the expression in template literal)
const nama = 'Sarah Sophia';
let umur = 6;
console.log(`Hello, I am ${nama}, I am ${umur} years old`); //This expression, we can also interpolate

//expression interpolation by using single quotes
let a = 10;
let b = 15;
console.log(
  'If a = 10 and b = 15, so the total is : ' + (a + b) + ', not ' + (2 * a + b)
);

//expression interpolation by using back tick
console.log(
  `If a = 10 and b = 15, so the total is : ${a + b}, not ${2 * a + b}`
);
