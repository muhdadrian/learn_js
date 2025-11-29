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
};

const adrian = new Student(); //type adrian.sayHello(); in console

//to change code above into arrow function go to 206
