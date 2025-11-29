function one() {
  var nama = 'Sarah';
  console.log(nama);
}

function two() {
  console.log(nama);
}

console.log(nama);
var nama = 'Fatih';
one();
two('Fariq');
console.log(nama);

/*
- we have two functions and a variable above
- the three above will be hoisted 1st in creation phase
- after hoisting, var nama = 'Fatih' will be filled with 'undefined'
- then execute the console.log(nama); above var nama, where the two function above are skipped due to hoisting
- so the 1st display is nama = undefined.
- 2nd, var nama = 'Fatih'.
- 3rd, one() - when to execute function one, it will be hoisted 1st, as it's in local execution context
- 4th, inside the function one, var nama is set to undefined, then check if there's function inside the function. If there's no, then execute the console.log(nama) inside the function, which will display Sarah. Then, the execution stack in function one will be gone from the memory.
- 5th, go to two('Fariq');
- 6th, the two('Fariq') argument is not captured in function two. It then entered into arguments object inside the function. It's then ignored. 
- 7th, is it hoisted or not? There's no variable in function two, then there's no hoisting.
- 8th, there's console.log(nama) in function two. It will check local variable (no), then check in parameter/argument (no) and then go to outside to check global variable - it will reach var nama = 'Fatih' at the top of one();.
- The execution stack will be gone after two().
- 9th, go to console.log(nama), which is the last line, the nama will take from global variable - var nama = 'Fatih';
*/

//if still confused, check the code above in JS Visualizer
