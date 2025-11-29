/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration  
3. Constructor Function (keyword new)
4. Object.create()
*/

//Object Literal:
let students = {
  name: 'Adrian',
  energy: 10,

  //method
  eat: function (portion) {
    this.energy = this.energy + portion;
    console.log(`Hello ${this.name}, enjoy you meal`);
  },
};
// type students in console, then the students object will display two properties namely name and energy (before writing the method)
//if property its content is value, while method, its content is function
//in object, there's 'this keyword'
//backtick is a string literal
//type 'students.eat(2)' in console and then type 'students'. The energy will become 12
//to create another student in Object Literal, you have to copy the object above. But, the problem is the object name cannot be the same.

/*
let students = {
  name: 'Hafizah',
  energy: 5,

  eat: function (portion) {
    this.energy = this.energy + portion;
    console.log(`Hello ${this.name}, enjoy you meal`);
  },
};
*/

let students2 = {
  name: 'Hafizah',
  energy: 5,

  eat: function (portion) {
    this.energy = this.energy + portion;
    console.log(`Hello ${this.name}, enjoy you meal`);
  },
};

//In console, type students first then type students2
