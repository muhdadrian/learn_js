/*
Promise:
- it's an object to represent success or failure of an asynchronous event in the future
- states (fulfilled / rejected / pending)
- callback (resolve / reject / finally)
- action (then / catch) 
*/

//In promise there's a method called 'all()'
//The all() is executed when we have many promise to be executed simultaneously
//for example, we want to connect to two different API - 1st to fetch film data | 2nd to fetch wheather data

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        title: 'Avengers',
        director: 'Adrian Nandu',
        Actor: 'Fatih, Fariq',
      },
    ]);
  }, 1000);
});

const weather = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        city: 'Labuan',
        temp: 26,
        condition: 'Sunny Day',
      },
    ]);
  }, 500);
});

// film.then(response => console.log(response));
// weather.then(response => console.log(response));

//execute the code above simultineously by putting array inside. Then, call then once
Promise.all([film, weather])
  //.then(response => console.log(response));
  .then(response => {
    const [film, weather] = response;
    console.log(film);
    console.log(weather);
  });
