//The 'this' concept in Arrow Function

//Constructor Function
//to make object in JS
//it's similar to function expression
const Student = function () {
  //by default the 'this' below will point to the object (Student above)
  this.nama = 'Adrian';
  this.age = 41;
  console.log(this);
};

const adrian = new Student();
