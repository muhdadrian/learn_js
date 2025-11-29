/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration  
3. Constructor Function (keyword new)
4. Object.create()
*/

//Function Declaration

function Student(name, energy) {
  //this is template
  let student = {};
  student.name = name;
  student.energy = energy;

  //method
  student.eat = function (portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}, enjoy your meal`);
  };

  //another method
  student.play = function (hour) {
    this.energy -= hour;
    console.log(`Hello ${this.name}, enjoy your game`);
  };
  return student;
}

let adrian = Student('Adrian', 10);

let hafizah = Student('Hafizah', 5);

//type hafizah in console
//then, type hafizah.play(1)
//again, type hafizah.energy - to see the energy balance
