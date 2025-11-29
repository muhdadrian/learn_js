/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration  
3. Constructor Function (keyword new)
4. Object.create()
*/

//Constructor Function (keyword new)

function Student(name, energy) {
  this.name = name;
  this.energy = energy;

  this.eat = function (portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}, enjoy your meal`);
  };

  this.play = function (hour) {
    this.energy -= hour;
    console.log(`Hello ${this.name}, enjoy your game`);
  };
}

//how to call? It's compulsory to use new keyword
//if we do not use new keyword, we will instantiate function declaration. Therefore, it will look for return and variable declaration. If the two are not available, the outcome will be undefined when we type 'adrian' in console

let adrian = new Student('Adrian', 10);

//type adrian in console.
//type adrian.play(5)
//type adrian

//we'll use Constructor Function in the future, as it's convenient to make prototype and it's clearer to make Object.create
