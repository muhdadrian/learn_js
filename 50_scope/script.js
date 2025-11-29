//block scope vs function scope

/*
Program in C:

int i = 2;

if(i % 2 == 0){
	bool even = true;
}

if (even) {
	printf("even!");
}
*/

//The code above will display "error: 'even' is undeclared" as the variable within then block scope (parentheses) shown at below can only be used within that block

/*
if(i % 2 == 0){
	bool even = true;
}
*/

//Program in JavaScript
var i = 2;

if (i % 2 == 0) {
  var even = true;
}

if (even) {
  console.log('even!');
}

//JS code above will be displayed without any problem as JS is using 'function scope' and not block scope
