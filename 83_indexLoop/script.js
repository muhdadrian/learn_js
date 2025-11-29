//Now the question is can we use i (index) as we are using e (element), as in for loop we are using index. But, yes we can in for each.

var arr = ['Adrian', 'Hafizah', 'children'];

arr.forEach(function (e, i) {
  console.log('Student no. ' + (i + 1) + ' is : ' + e);
});
