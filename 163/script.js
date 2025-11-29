/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration 
3. Constructor Function (keyword new)
4. Object.create()
*/

const studentMethod = {
  eat: function (portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}, enjoy your meal`);
  },

  play: function (hour) {
    this.energy -= hour;
    console.log(`Hello ${this.name}, enjoy your game`);
  },
  //we add another method
  //when the student sleep, his/her energy will become twice
  sleep: function (hour) {
    this.energy += hour * 2;
    console.log(`Hello ${this.name}, have a nice sleep`);
  },
};

function Student(name, energy) {
  let student = {};
  student.name = name;
  student.energy = energy;
  student.eat = studentMethod.eat;
  student.play = studentMethod.play;
  //when there's new method, we need to register here again
  student.sleep = studentMethod.sleep;

  return student;
}

let adrian = Student('Adrian', 10);
let hafizah = Student('Hafizah', 5);

//the problem here is we are organizing two objects now: object that made by using function declaration (student function) and object literal (method containing function) that connected with the registered method inside student function
//In term memory management, it's effective, but when there's new method, you have to register it, and when there's deleted method, you have to delete in the registered one
//It's better when there automatic way - no need to register manually
//When we delete all the registered method, how do we connect the two objects above? The answer is by using Object.create.
//let student = {} inside the function, we replace it with let student = Object.create()
//explanation above: let student = {} - when we make the student variable, the content inside the curly braces is object
//Object.create === {} === to make object. Its difference is, we can put parameter inside Object.create(parameter). The parameter is pointing to its parent object.
//In our case, Object.create(studentMethod)
//In OOP, it's similar to inheritance
//Go to 164
