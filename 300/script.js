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
students.forEach(student => console.log(student.name));
console.log('done');

//the 2nd console.log above may take such a long time, as we might get an API from other source which will block the execution of the 3rd console.log. Go to 301 for e.g
