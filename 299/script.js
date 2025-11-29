//Synchronous Callback
const students = [
  {
    name: 'Adrian Nandu',
    matric: '112233444',
    email: 'adriannandu@gmail.com',
    faculty: 'Computer Science',
    idStudent: 1,
  },

  {
    name: 'Hafizah Hamran',
    matric: '112233445',
    email: 'hafizahhamran@gmail.com',
    faculty: 'Islamic Finance',
    idStudent: 2,
  },

  {
    name: 'Sarah Sophia Adrian',
    matric: '112233446',
    email: 'sarahsophia@gmail.com',
    faculty: 'Medical School',
    idStudent: 3,
  },

  {
    name: 'Fatih Rizq Adrian',
    matric: '112233447',
    email: 'fatihrizq@gmail.com',
    faculty: 'Arabic Studies and Syariah',
    idStudent: 4,
  },

  {
    name: 'Fariq Yusuf Adrian',
    matric: '112233448',
    email: 'fariqyusuf@gmail.com',
    faculty: 'Software Engineering',
    idStudent: 5,
  },
];

//we use higher order function - forEach
students.forEach(student => console.log(student.name)); // when we use higher order function the parameter of forEach is callback as it's a function. It's similar to the parameter of displayMessage:
//displayMessage(name => alert(`Hello, ${name}`));

//higher order function is normally a callback function
