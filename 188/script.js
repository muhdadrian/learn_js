function init() {
  let nama = 'Adrian';
  function displayNama() {
    console.log(nama);
  }
  return displayNama;
}
init();

//to display the nama, put the function inside the var
let callNama = init(); // the partly executed function init go into callNama var
callNama(); //we execute the callNama

//it's strange the way to display above, but it will enable us to execute function factory. For example, the var nama inside the function init will depend on the user input.
