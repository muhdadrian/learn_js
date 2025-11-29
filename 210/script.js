//The 'this' concept in Arrow Function

//Constructor Function
const Student = function () {
  this.nama = 'Adrian';
  this.age = 41;

  //method
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.nama}, and I am ${this.age} years old.`
    );
  };

  setInterval(() => {
    console.log(this.age++);
    //console.log(this);
  }, 500);
  //arrow function does not have this concept, so the this will look for lexical scope at outside in sayHello. Try to check by using console.log(this);
};

const adrian = new Student();
