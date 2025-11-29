//Promise
//to handle the callback hell from the previous video
//in previous video, to request api we can use jQuery ajax

$.ajax({
  url: 'http://www.omdbapi.com/?apikey=6c4aecc&s=avengers',
  success: movies => console.log(movies),
});

//this we are using jQuery library
//if we do not want jQuery. Go to 319
