//4. Nested HTML Fragments

const student = {
  name: 'Adrian Nandu',
  semester: 6,
  subjects: ['Introduction To Programming', 'Web Design', 'C++', 'OOP'],
};

function printSubject(subjects) {
  return `
  <ol>
  ${subjects.map(sub => `<li>${sub}</li>`).join('')}
  </ol>`;
}

const el = `<div class="student">
<h2>${student.name}</h2>
<span class="semester">Semester: ${student.semester}</span>
<h4>Subjects:</h4>
${printSubject(student.subjects)}
</div>`;

document.body.innerHTML = el;
