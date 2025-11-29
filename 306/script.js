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

console.log('start');
getDataStudent(
  'data/student.json',
  results => {
    const students = JSON.parse(results);
    students.forEach(student => console.log(student.name));
  },
  () => {}
);
console.log('ends');

//when JS read and execute the function above, it knows that it's asynchronous, so it will go to Web API first before going to event loop etc. Therefore, the console.log('ends') will be executed after console.log('start'). Finally the function will be executed

//above is pure JS or vanilla JS. We can use jQuery. Go to 307
