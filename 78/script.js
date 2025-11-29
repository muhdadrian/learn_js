//Method in array

//3. unshift & shift - work on first element
var arr = ['Adrian', 'Hafizah', 'children'];

arr.unshift('Sarah');
console.log(arr.join(' - '));

arr.shift();
console.log(arr.join(' - '));

//shift and pop are really deleting the element, not changing it to undefined that we previously did manually
