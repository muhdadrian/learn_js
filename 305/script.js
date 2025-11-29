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

getDataStudent(
  'data/student.json',
  results => {
    const students = JSON.parse(results);
    students.forEach(student => console.log(student.name));
  },
  () => {}
);
//to check whether it's asynchronous or not. Go to 306
