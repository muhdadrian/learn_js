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

//synchronous - the script to be executed from the top to the bottom
console.log('start');
students.forEach(student => {
  for (let i = 0; i < 10000000; i++) {
    let date = new Date();
  }
  console.log(student.name);
});
console.log('done');

//we change the code above to asynchronous. Go to 302
