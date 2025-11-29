/*
There are four ways to make object in JS by using:
1. Object Literal
- the simplest
- if we only make an object or not too big, we can use Object Literal 
- it's not effective for object that too many

2. Function Declaration 
- by using this, as if we can eliminate the problem in Object Literal because we only make the template once and we can call it by writing:

let adrian = Student('Adrian', 10);
let hafizah = Student('Hafizah', 5);  

- but behind the scene, the two methods of eat and play are still being made (duplicated) whether we use them or not. They are stored in memory. Therefore, it is as if we are making Object Literal.
- But there's solution for the problem by making separate object. Look at the code below, beyond this commented area

3. Constructor Function (keyword new)
4. Object.create()
*/

//we make object that contained two methods
const studentMethod = {
  eat: function (portion) {
    this.energy += portion;
    console.log(`Hello ${this.name}, enjoy your meal`);
  },

  play: function (hour) {
    this.energy -= hour;
    console.log(`Hello ${this.name}, enjoy your game`);
  },
};

function Student(name, energy) {
  let student = {};
  student.name = name; //we take from parameter/argument above
  student.energy = energy; //we take from parameter/argument above

  //to connect with our student object with studentMethod
  student.eat = studentMethod.eat; //we take from outside object
  student.play = studentMethod.play; //we take from outside object

  return student;
}

let adrian = Student('Adrian', 10);
let hafizah = Student('Hafizah', 5);

//the studentMethod above will only be stored in memory once each time we run the code.
//when we call the student function and fill the method inside the function, it will point to the object method in the memory and not being duplicated
