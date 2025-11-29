/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration  
3. Constructor Function (keyword new)
4. Object.create()
*/

//Function Declaration
//In function declaration, you need not to duplicate the object
//It's similar to class in OOP

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
  return student; //omitted earlier
}

//when you type Student in console, the display is function, and not object, as above is still a blueprint

//to instantiate:
let adrian = Student('Adrian', 10);
//when you type adrian in console, the output will be undefined. Why? we omit the return keyword above

//Now type 'adrian.eat(3)' and type 'adrian' on the next line in the console

//to make another student, instantiate it. No need to duplicate the template
let hafizah = Student('Hafizah', 5);

//we add another method in 159
