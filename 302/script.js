//Asynchronous Callback
//we have two data in json where we should get them through API. They are only for simulation

//three parameters - url(address of the data to be replaced with API), function callback (when success), error - success and error are callback
function getDataStudent(url, success, error) {
  //do ajax object (var name is free to use any name)
  let xhr = new XMLHttpRequest();

  //when the state is ready, execute the function - we want to make request in asynchronous by using ajax
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  //we execute the ajax
  //we put outside the xhr.onreadystatechange above
  //parameter - method (get), url to where
  xhr.open('get', url);
  xhr.send();
}

//if we do not want these two functions, we can make anonymous function inside the success and error parameter at: getDataStudent('data/student.json', success, error); below
//go to 303.
function success() {}

function error() {}

//three parameter - url (to data folder), function callback (success), function callback (error)
getDataStudent('data/student.json', success, error); // we must have function for success and error above
