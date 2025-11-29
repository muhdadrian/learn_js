//The 'this' concept in Arrow Function

//Object Literal
const student1 = {
  nama: 'Adrian',
  age: 41,
  sayHello: () => {
    console.log(
      `Hello, my name is ${this.nama}, and I am ${this.age} years old.`
    );
    //console.log(this); //this should point to student1 object above to look 'this' among the nama and age, but it will go to window (type student1.sayHello()) in console to prove it.
  },
};

//Both the nama and age above will be undefined because the this in the arrow function does not look to its lexical scope at outside, as the arrow function does not have this. So, it will look at higher level (parent) if there's this. If there's no this in parent function, it will look at outside parent function until window. If there's no this in window, then display undefined

//In previous constructor function, the this in arrow function will look for this at parent function, and it found it.

//The point is, arrow function does not have 'this' concept
