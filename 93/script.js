//make object
//var student = {};
//we can call the student in console by typing student
//you can insert name in the object in console: student.name = 'Adrian';. But, the memory is only temporary. Once you refresh the browser, it will disappear

//Object Literal

var student = {
  name: 'Adrian Nandu',
  age: 41,
  gpa: [3.99, 3.5, 4.0],
  address: {
    street: 'Lot 4 Taman Ruby',
    city: 'Labuan',
    state: 'Federal Territory',
  },
};

console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student.gpa);
console.log(student.gpa[1]);
console.log(student.address);
console.log(student.address.city);
console.log(student.address['city']);
console.log(student.address.street);
console.log(student['address']['street']);

//can combine between . and [] to access the object properties
