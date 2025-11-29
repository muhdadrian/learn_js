//In JS, there are two phases of Context Execution:
//1. Creation
//2. Execution

// console.log(nama);
// var nama = 'Adrian';

//the result above will output undefined. Why? When the program is executed, there's something occured called 'creation phase' in 'Global Context'.
//In creation phase, JS will first check if there's variable or function in the code and will ignore the console.log order.
//If you have 10 line of codes for example, it will search for var or function keyword first.
//If there's any, it will make var name that is automatically filled with undefined. For example:
//var nama = undefined;
//All variables will be set first with undefined value.
//When we write the console.log first at the top like above, its value will be set to undefined even the variable is already available at the next line of code

//If there's function, it will be filled with the function itself:
//function nama = fn()

//what happened to both the var nama and function nama above are due to hoisting concept.
//even the var and function are written at the next line of code after the console.log, it will automatically raised to the top 1st.
//beside the two things (var and function) above, JS defined window object as global object and JS defined this as window
//if the script.js is empty and you type window and this in the console, there are objects

//after the creation phase, then it will go to execution phase. It will execute the program from the top to the bottom - line by line
//then, the console.log(nama) above will be executed

/*
SG'notes:
- creation phase in Global Context:
- nama var = undefined
- nama function = fn()
- hoisting
- window = global object
- this = window
*/

//Another example go to 172
