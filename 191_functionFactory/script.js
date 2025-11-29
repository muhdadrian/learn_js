//function factories

function greet(time) {
  return function (nama) {
    console.log(`Hello ${nama}, Good ${time}, have a nice day`);
  };
}

let morning = greet('Morning');
let afternoon = greet('Afternoon');
let night = greet('Night');

//to execute
morning('Sarah');
afternoon('Fatih');
night('Fariq');

//to understand how the parameter nama for example: morning('Sarah') go into morning var (let morning) go to 192
