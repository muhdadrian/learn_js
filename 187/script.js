function init() {
  let nama = 'Adrian';
  function displayNama() {
    console.log(nama);
  }
  // displayNama();
  return displayNama; //this will not display anything in the console. Until return, the terma is the function only partly executed. To display the name go to 188
}
init();
