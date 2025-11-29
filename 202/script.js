// let students = ['Sarah', 'Fatih', 'Fariq'];

// let totalChar = students.map(nama => ({
//   nama: nama,
//   totalChar: nama.length,
// }));

// console.table(totalChar);

//In latest ES version, if you want to return object where its property equal to its value, replace code above with below where no need to write nama twice

let students = ['Sarah', 'Fatih', 'Fariq'];

let totalChar = students.map(nama => ({
  nama,
  totalChar: nama.length,
}));

console.table(totalChar);
