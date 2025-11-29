//The 'this' concept in Arrow Function

//Object Literal
const student1 = {
  nama: 'Adrian',
  age: 41,
  sayHello: function () {
    console.log(
      `Hello, my name is ${this.nama}, and I am ${this.age} years old.`
    );
  },
};

//type: student1.sayHello(); in console
//if we use function above, the 'this' will look at its lexical scope at outside, and it will found nama and age
//it will be different when we use arrow function. Go to 208
