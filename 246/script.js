//we add another data - email
const name = 'Adrian Nandu';
const age = 41;
const email = 'adriannandu@mit.edu';

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class=hlight>${values[i] || ''}</span>`,
    ''
  );
}

const tl = highlight`Hello, I am ${name}, and I am ${age} years old and my email is : ${email}`;
console.log(tl);

document.body.innerHTML = tl;

//Other usage for tagged template:
//1. Escaping HTML Tags
//2. Translation & Internationalization
//3. Styled Components in front-end frameworks such as vue or react
