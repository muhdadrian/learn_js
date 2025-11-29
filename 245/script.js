const name = 'Adrian Nandu';
const age = 41;

//just ignore the third empty span, as it will not be seen
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class=hlight>${values[i] || ''}</span>`,
    ''
  );
}

//when displayed, the name and age are being highlighted
const tl = highlight`Hello, I am ${name}, and I am ${age} years old.`;
console.log(tl);

document.body.innerHTML = tl;
