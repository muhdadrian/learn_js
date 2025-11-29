/*
function Student(name, energy) {
  this.name = name;
  this.energy = energy;
}

Student.prototype.eat = function (portion) {
  this.energy += portion;
  return `Hello ${this.name}, enjoy your food`;
};

Student.prototype.play = function (hour) {
  this.energy -= hour;
  return `Hello ${this.name}, enjoy your game`;
};

Student.prototype.sleep = function (hour) {
  this.energy += hour * 2;
  return `Hello ${this.name}, have a nice sleep`;
};

let adrian = new Student('Adrian', 10);
*/

//Class Version from the code above
class Student {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(portion) {
    this.energy += portion;
    return `Hello ${this.name}, enjoy your food`;
  }

  play(hour) {
    this.energy -= hour;
    return `Hello ${this.name}, enjoy your game`;
  }

  sleep(hour) {
    this.energy += hour * 2;
    return `Hello ${this.name}, have a nice sleep`;
  }
}

let adrian = new Student('Adrian', 10);
let hafizah = new Student('Hafizah', 5);

//why we do not learn class directly instead of learning prototype first? In class version, what happened behind the scene is, it's undergoing the prototype. So the class is only a wrapper, so that it will make more sense.

//we should understand prototype first before learning class. There's no problem if you want to move to class as long as you know what happened behind the scene, where it's the prototype that occured.
