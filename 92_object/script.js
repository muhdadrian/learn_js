//Object in JS - in JS almost each element is object. For example, array is an object, there's no array data type, but object data type
//array - a group of element or value that has index
//object - is a group of value that has no index, but name
//object - is an array that is powerful
//"In JS, object are king. If you understand object, you understand JS."
//Object in other programming languages:
//1. PHP: Associative Array
//2. Python: Dictionaries
//3. C: Hash Tables
//4. Java: Hash Maps
//5. Ruby and Pearl: Hashes

//Object Anatomy:

var Person = {
  name: 'Adrian Nandu',
  age: 31,
  job: 'Programmer',
  greet: function () {
    return (
      'Hello, my name is ' +
      this.name +
      '. My age is ' +
      this.age +
      ' year old, and I am a ' +
      this.job +
      '.'
    );
  },
};

console.log(Person.greet());

//name, age and job above are variables inside the object
/*
these three are called properties
name: 'Adrian Nandu',
age: 31,
job: 'Programmer',
*/
//from now on, the variable inside the object we call property
//we can also have function inside object
//function inside the object we call as method
