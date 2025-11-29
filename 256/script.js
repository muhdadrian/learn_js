//Destructuring Assingment/Variable:

//Destructuring Object:
//Assign to new var
const student = {
  name: 'Adrian Nandu',
  age: 41,
};

const { name: n, age: a } = student;
console.log(n, a);

//we can give default value
const employee = {
  nama: 'Adrian Nandu',
  umur: 41,
};

const { nama, umur, email } = employee;
console.log(email);
//this will output undefined. Give default value to email like below

const staff = {
  nama2: 'Adrian Nandu',
  umur2: 41,
};

const { nama2, umur2, email2 = 'email@default.com' } = staff;
console.log(email2);

//but if we give email data in the object
const bos = {
  nama3: 'Adrian Nandu',
  umur3: 41,
  email3: 'adriannandu@mit.edu',
};

const { nama3, umur3, email3 = 'email@default.com' } = bos;
console.log(email3);
