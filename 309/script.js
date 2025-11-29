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
  //e means error, we can use any var name
  error: e => {
    console.log(e.responseText); //the error in text. When error, the callback is here. Try to remove n in json above to make the error
  },
});
console.log('ends');
