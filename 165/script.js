/*
There are four ways to make object in JS by using:
1. Object Literal
2. Function Declaration 
3. Constructor Function (keyword new)
4. Object.create()
*/

//Function Declaration
function Student(name, energy) {
  // let student = Object.create(studentMethod); // Remove this to use  Constructor Function
  //let student = {};// Remove this that used in Function Declaration when to use Constructor Function
  //when we remove the the variable itinialization above, we no longer have access to student variable
  //therefore, we change the student word below to 'this'

  //let this = {}; //behind the scene JS will make 'this' variable in terms of object. No need to write this one
  //But, the this variable above is not an empty object. It's more detailed like below:
  //let this = Object.create(studentMethod);//It's like this. Object.create is like calling another class to make its parent class. But, inside the round bracket (), JS is calling Student object (the function name above).prototype (There's default parent property by JS) like below
  //let this = Object.create(Student.prototype); //No need to write this
  // student.name = name;
  this.name = name;
  // student.energy = energy;
  this.energy = energy;
  // return student;// Remove this also when using Constructor Function
  //return this; //this is what happened behind the scene
}

//By default, constructor function already has its parent, that is prototype
//We need not to make another object, to make as parent
