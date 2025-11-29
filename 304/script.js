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
    console.log(JSON.parse(results)); //we parse the results to display object. We want to display only the name. Go to 305
  },
  () => {}
);
