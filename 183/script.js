function init() {
  let nama = 'Adrian';
  function displayNama() {
    console.log(nama);
  }
  console.log(displayNama());
}
init();

//there will be undefined under Adrian in the console due to hoisting
