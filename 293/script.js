//array destructuring
//we can use rest parameter when we do array destructuring
const group1 = ['Adrian', 'Hafizah', 'Sarah', 'Fatih', 'Fariq'];
//const chief = group1[0]; //we can write like this to find chief. But, it will be simpler by using array destructuring:
const [chief, deputy, ...member] = group1;
console.log(chief);
console.log(deputy);
console.log(member);

//we can also make object destructuring at 294
