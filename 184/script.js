function init() {
  let nama = 'Adrian';
  function displayNama() {
    console.log(nama);
  }
  console.log(displayNama); //this will not be executed, but will display the function
}
init();
