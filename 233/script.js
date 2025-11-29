//2. Looping (array of object)
const student = [
  {
    name: 'Adrian Nandu',
    email: 'adriannandu@mit.edu',
  },
  {
    name: 'Hafizah Hamran',
    email: 'hafizahhamran@uitm.edu',
  },
  {
    name: 'Sarah Sophia Adrian',
    email: 'sarahsophia@alazhar.edu',
  },
  {
    name: 'Fatih Rizq Adrian',
    email: 'fatihrizq@alazhar.edu',
  },
  {
    name: 'Fariq Yusuf',
    email: 'fariqyusuf@mit.edu',
  },
];

//we loop by using map
//${student.map} - we use expression where inside it, we call map method. This is higher order function to student array above
//${} - we can fill wtih expression and map is also an expression
//m we assume as the item in the looping
//use .join to beautify the paragraph
const el = `<div class="student">
  ${student
    .map(
      m => `<ul>
  <li>${m.name}</li>
  <li>${m.email}</li>
  </ul>`
    )
    .join('')}
</div>`;

document.body.innerHTML = el;
