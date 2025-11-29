//Promise
//we use ajax in vanilla js version:

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.status === 200) {
    if (xhr.readyState === 4) {
      console.log(JSON.parse(xhr.response));
    }
  } else {
    console.log(xhr.responseText);
  }
};
xhr.open('get', 'http://www.omdbapi.com/?apikey=6c4aecc&s=avengers');
xhr.send();

//the result is same with jQuery in 318. But, not we are not using external library (jQuery). But, there are many lines of code we have to write.
//But, in modern JS there is a way to write simpler ajax object like above by using fetch. Go to 320
