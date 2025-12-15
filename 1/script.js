// function Student(name, energy) {
//   this.name = name;
//   this.energy = energy;
// }

// Student.prototype.eat = function (portion) {
//   this.energy += portion;
//   console.log(`Hello ${this.name}, enjoy your food`);
// };

// Student.prototype.play = function (hour) {
//   this.energy -= hour;
//   console.log(`Hello ${this.name}, enjoy your play`);
// };

// Student.prototype.sleep = function (hour) {
//   this.energy += hour * 2;
//   console.log(`Hello ${this.name}, have a nice sleep`);
// };

// let adrian = new Student('Adrian', 10);

class Student {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}, enjoy your food`);
  }

  play(hour) {
    this.energy -= hour;
    console.log(`Hello ${this.name}, enjoy your food`);
  }

  sleep(hour) {
    this.energy += hour * 2;
    console.log(`Hello ${this.name}, have a nice sleep`);
  }
}

let adrian = new Student('Adrian', 10);
