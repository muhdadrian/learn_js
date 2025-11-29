//To be more practical. This is another example:
const name = document.querySelector('.name');
const letter = [...name.textContent].map(l => `<span>${l}</span>`).join('');
name.innerHTML = letter; //check in element(console) - there are some <span></span>
//then add 'span' in .name span: hover (CSS)
