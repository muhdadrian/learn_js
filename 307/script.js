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
//to use jQuery, use method called ajax
//$ === jQuery
//jQuery, please execute ajax
//no need to parse. It's already returned json
//it's the content is object
//it's already asynchronous
$.ajax({
  url: 'data/student.json',
  success: students => {
    console.log(students);
  },
  error: () => {},
});
console.log('ends');

//we just want the name. Go to 308
