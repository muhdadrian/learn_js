function init() {
  let nama = 'Adrian';
  let age = 33;
  function displayNama() {
    console.log(nama);
    console.log(age);
  }
  console.dir(displayNama);
}
init();

//the var age will not be included in the closure if there's no console.log(age) in the inner function
//when I add console.log(age) in the inner function, the displayNama function needs two data from outside. Therefore, both nama and age variables will be included in the closure scope
