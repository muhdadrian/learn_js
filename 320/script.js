//Promise
//we use fetch

//const movies = fetch('http://www.omdbapi.com/?apikey=6c4aecc&s=avengers');

//console.log(movies); //this already make a request, but the return value is not movie data instead of Promise

//for better code, at below
fetch('http://www.omdbapi.com/?apikey=6c4aecc&s=avengers')
  .then(response => response.json())
  .then(response => console.log(response));
//the fetch result is similar by using jQuery and vanilla js ajax object

//But, the problem is, fetch is returning Promise. We'll discuss this further.
