//The 'this' concept in Arrow Function

//Constructor Function
const Student = function () {
  this.nama = 'Adrian';
  this.age = 41;

  //method
  this.sayHello = function () {
    console.log(`Hello, my name is ${nama}, and I am ${age} years old.`);
  };
};

const adrian = new Student(); //type adrian.sayHello(); in console. This will output error, as to call nama and age in console.log inside the function, we need this. Go to 205
