function Student(name, energy) {
  this.name = name;
  this.energy = energy;
}

Student.prototype.eat = function (portion) {
  this.energy += portion;
  return `Hello ${this.name}, enjoy your food`;
};

//to make another method
Student.prototype.play = function (hour) {
  this.energy -= hour;
  return `Hello ${this.name}, enjoy your game`;
};

Student.prototype.sleep = function (hour) {
  this.energy += hour * 2;
  return `Hello ${this.name}, have a nice sleep`;
};

let adrian = new Student('Adrian', 10);

//the code above is similar to class (contained inheritance) in OOP. In JS, the concept is called 'Prototypal Inheritance'.

//we can change the code above into Class. Go to 169
