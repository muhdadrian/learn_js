//The 'this' concept in Arrow Function

//Arrow Function
//the constructor function cannot changed into arrow function. But, it's ok for method
//however, there's no this concept inside the arrow function. It will look at outside.
const Student = function () {
  this.nama = 'Adrian';
  this.age = 41;

  //method
  this.sayHello = () => {
    console.log(
      `Hello, my name is ${this.nama}, and I am ${this.age} years old.`
    );
  };
};

const adrian = new Student();

//this will be different when we make object by using Object Literal and not constructor function. Go to 207
