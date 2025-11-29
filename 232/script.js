//1. HTML Fragments
const student = {
  name: 'Adrian Nandu',
  age: 33,
  matric: '0404040',
  email: 'adriannandu@mit.edu',
};

const el = `<div class="student">
<h2>${student.name}</h2>
<span class="matric">${student.matric}</span>
</div>`;

//console.log(el); //we display in DOM instead

document.body.innerHTML = el; //output is quite simple
