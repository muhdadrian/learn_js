/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration  
3. Constructor Function (keyword new)
4. Object.create()
*/

//Constructor Function (keyword new)
//It's similar to Function Declaration, but the difference is no need to write the variable declaration and return, as they are already done by JS
//by removing them, JS know that we are going to make constructor function, but now JS does not know what is the student for, as we already removed the variable declaration.
//the solution is we replaced the student with 'this' keyword. Look at 161

function Student(name, energy) {
  //remove the variable declaration below
  // let student = {};

  student.name = name;
  student.energy = energy;

  student.eat = function (portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}, enjoy your meal`);
  };

  student.play = function (hour) {
    this.energy -= hour;
    console.log(`Hello ${this.name}, enjoy your game`);
  };

  //remove the return below
  // return student;
}
