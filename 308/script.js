//Asynchronous Callback

function getDataStudent(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open('get', url);
  xhr.send();
}

// console.log('start');
// getDataStudent(
//   'data/student.json',
//   results => {
//     const students = JSON.parse(results);
//     students.forEach(student => console.log(student.name));
//   },
//   () => {}
// );
// console.log('ends');

//We use jQuery
console.log('start');
$.ajax({
  url: 'data/student.json',
  success: students => {
    students.forEach(students => console.log(students.name));
  },
  error: () => {},
});
console.log('ends');
//it's simpler rather than using vanilla JS
//for error go to 309
