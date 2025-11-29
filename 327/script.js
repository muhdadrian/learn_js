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

film.then(response => console.log(response));
weather.then(response => console.log(response));

//the temp will be displayed 1st in the console, as it's 500
//above is executed one by one (the console.log)
//if you have five API, there will be five lines of the code above
//to execute the code above simultineously go to 328
