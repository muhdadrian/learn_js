//function declaration

function Student(name, energy) {
  this.name = name;
  this.energy = energy;

  //method
  this.eat = function (portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}. Enjoy your meal.`);
  };

  //another method
  this.play = function (hour) {
    this.energy -= hour;
    console.log(`Hello ${this.name}. Enjoy your game.`);
  };
}

let adrian = new Student('Adrian', 10);

let hafizah = new Student('Hafizah', 5);
