//Destructuring Assingment/Variable:

//Destructuring Object:
const student = {
  name: 'Adrian Nandu',
  age: 41,
};
//we make Object Literal

const { name, age } = student;
console.log(name, age);

//Assignment without object declaration
//no need const, but put round bracket
({ nama, umur } = {
  nama: 'Adrian Nandu',
  umur: 41,
});
console.log(nama, umur);
