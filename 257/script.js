//Destructuring Assingment/Variable:

//Destructuring Object:

//Give default value + assign to new var
const student = {
  name: 'Adrian Nandu',
  age: 41,
  email: 'adriannandu@mit.edu',
};

const { name: n, age: a, email: e = 'email@default.com' } = student;
console.log(n, a, e);

//make rest parameter
const pelajar = {
  nama: 'Adrian Nandu',
  umur: 41,
  emel: 'adriannandu@mit.edu',
};

//the values below is an object
const { nama, ...values } = pelajar;
console.log(nama, values); //nama is string, while values is object
