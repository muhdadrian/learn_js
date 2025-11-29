//to count name length for each student by using normal function

let students = ['Sarah', 'Fatih', 'Fariq'];

let totalChar = students.map(function (nama) {
  return nama.length;
});
console.log(totalChar);

//We use arrow function to replace the above function
let students2 = ['Sarah', 'Fatih', 'Fariq'];

let totalChar2 = students2.map(nama2 => nama2.length);
console.log(totalChar2);

//if we want to map object to return object
//if you only write {} inside the function to make object, JS will think you want to return and not making object
//to make object, wrap the {} with (), so that JS will think it as object
let students3 = ['Sarah', 'Fatih', 'Fariq'];

let totalChar3 = students3.map(nama3 => ({
  nama: nama3,
  totalChar: nama3.length,
}));
console.log(totalChar3);

//to make the object display better, use console.table(totalChar3) instead
console.table(totalChar3);

//In latest ES version, if you want to return object where its property equal to its value go to 202
