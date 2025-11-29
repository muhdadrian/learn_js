/*
Higher Order Function:
- function that is operating in other function whether to be used in argument or return value (eloquentjavascript.net)
*/

/*
- In JS, a function is called First Class Function - the essence of JS is function
- JS treats function as object (sitepoint.com)
- Object is a value like integer and string. Therefore, function can be stored as argument or return value from other function. We already tried this when we learn closure
*/

//subject will be filled string, done is a function
function doTask(subject, done) {
  console.log(`Start to learn ${subject}..`);
  done();
}

//we call done function. Outside, function doTask above we have another function like below
//we use function as argument
function done() {
  alert('Done in learning');
}

//when we call
doTask('Math', done);

//the function doTask above is called Higher Order Function
//the done in function doTask argument is called callback
//if you have function as argument like done above, it's called callback
//function that has callback called as higher order function

//another example go to 215
