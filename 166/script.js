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

let adrian = new Student('Adrian', 10);
//type adrian in console
//to make method, go to 167
