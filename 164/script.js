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
  let student = Object.create(studentMethod);
  student.name = name;
  student.energy = energy;

  return student;
}

let adrian = Student('Adrian', 10);
let hafizah = Student('Hafizah', 5);

//now type: adrian, in console
//then type: adrian.sleep(5)
//retype: adrian

//By using Object.create(studentMethod) we can tell its object parent - studentMethod
//No need to register the method anymore

//Now, this is the most effective - its memory management and no need to think about the method registration
//But, all you need is only a student, and not studentMethod, which is a new object that we have to make
//Eventhough, we make the connection, but we make our job twice by making studentMethod object to support the function object
//The solution is by using prototype in 165. By using prototype, we can make the code above more effective.
