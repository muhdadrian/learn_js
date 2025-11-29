/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration 
3. Constructor Function (keyword new)
4. Object.create()
*/

function Student(name, energy) {
  this.name = name;
  this.energy = energy;
}

//to make method, it's enough to use the prototype
Student.prototype.eat = function (portion) {
  this.energy += portion;
  return `Hello ${this.name}, enjoy your food`;
};

let adrian = new Student('Adrian', 10);
//type adrian in console. The prototype is automaticaly included in the student object
//type student.eat(3)
//type adrian.energy
//no need to make separate object to connect like before
//to add another method go to 168
