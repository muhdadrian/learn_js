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
  //above is function expression where the function will be stored inside the variable. So, the function content will not be hoisted

  //execute the function in each half second
  //I want each half second my age increased by 1
  //below is automatic executed function anonymous, but not method
  setInterval(function () {
    //console.log(this.age++);
    //console.log(this);
    console.log(this.age); //this will be undefined as there's no age in window. Undefined being incremented become NaN
  }, 500);
  //above is function declaration where it will be hoisted. When the this is called, it will not point to the this inside the function of Student object above. It will point to the global. This will output NaN in the console. Why Nan, it does not increase the 41. To check the this, use console.log(this). It will point to the window.
};

const adrian = new Student();

//the solution for the setInterval above is by using arrow function. Go to 210
