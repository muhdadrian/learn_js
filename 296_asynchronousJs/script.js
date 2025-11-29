/*
Asynchronous JS Programming:
- Callback
- Promise
- ajax
- Async & Await
 */

/* JS is a single-threaded, non-blocking, asynchronous and concurrent language.

1. Thread:
- The code execution that can be done freely / independent towards each other
- So it means, JS can do a thing in a specific time, as it's single-threaded

2. Blocking:
- if task 1 is not completed, it cannot go to task 2.
- so JS as non-blocking, it can go to task 2, even, the test 1 is yet completed.

3. Synchronous:
- from task 1 to task 2 etc
- asynchronous (single threaded) can move to the next task even the previous task is yet done, until all of them are done
- asynchronous divided into single threaded and multi threaded
- asynchronous multi threaded can do three threads simultenously where 1st thread may contain task 1 and task 4, 2nd thread contain task 2, while thread 3 contain task 3.
- asynchronous + single-threaded = concurrency
- asynchronous + multi-threaded = parallelism
*/

/*
Conclusion:
Single vs Multi Thread:
- related with task execution - used single or many thread 

Blocking vs Non-blocking:
- related with our coding technique (IO related - input output related) 
- when button is clicked, selecting something, doing complex function

Synchronous vs Asynchronous:
- coding technique (HTTP Request related)
- when we do ajax

Concurrent vs Parallel
- related with task execution
- related with infrastructure, hardware etc

#we focus on Non-blocking and Asynchronous
*/

/*
JS:
- in JS there's 'V8 Engine' - machine that executing JS that is planted in web browser
- V8 is divided two parts - Heap and Stack
@ In Heap:
1. Memory Allocation - to allocate memory, to store var, function and hoisting is executed in Heap.

@ In Stack:
1. Function Call and Execution Context (script execution) - the var and function kept in heap, and when they are called for example, the var that is being displayed, it's executed in stack  

# we focus in stack as it's related with asynchronous
 */

//all the console.log below are execution where they are executed in stack not in heap
console.log('one');
console.log('two');
console.log('three');

//JS will read from one to three above
//when the 1st console.log is executed, it will be gone. Then, 2nd one will be executed and gone before the 3rd being executed and gone too

function kalikan(a, b) {
  return a * b;
}

function hitungLuas(sisi) {
  return kalikan(sisi, sisi);
}

function cetakLuasKotak(sisi) {
  const luas = hitungLuas(sisi);
  console.log(luas);
}

cetakLuasKotak(5);

/*
How the stack execute the function above?
- JS read from the top. It will go to heap first and do hoisting
- it will go the 2nd function. It will go to heap and do hoisting. Likewise the 3rd one.
- JS then will read cetakLuasKotak(5); - this is execution where it will go to stack.

IN Stack:
4. a * b
         ^
         |
3. kalikan(sisi, sisi)
         ^
         |
2. hitungLuas(sisi)
         ^                         
                          console.log(luas);
         |
1. cetakLuasKotak(5);

a) after a * b = 25 - it will be gone from the stack

b) kalikan(sisi, sisi) - gone after execution

c) hitungLuas(sisi) - 25 captured into luas var, then gone

d) console.log(luas); - it will go here and pop into the stack for a while, then will be gone after printed in the console

e)  cetakLuasKotak(5); - finally, this will be gone too after all the execution are done
 */

//Another example:
console.log('satu');
prosesYangSuperKompleks();
console.log('tiga');

/*
1. console.log('satu'); will be executed first in the stack and gone (quick execution).
2. prosesYangSuperKompleks(); will be executed 1st until the process is done before the console.log('tiga') popped out in the stack to be executed.

- the longer the process of the function to be executed above, the longer the console.log('tiga'); will be popped out in the stack - this is one of 'blocking' example.
- blocking will block us in the web from clicking the button, giving input, as the execution is still in process (it's hanged)
- how to solve this problem? - by doing asynchronous callback
*/

//the solution example:
console.log('satu');
setTimeout(() => {
  prosesYangKompleks();
}, 0);
console.log('tiga');

//to visualize more of the solution:
console.log('satu');
setTimeout(() => {
  console.log('dua');
}, 5000);
console.log('tiga');
/*
how to read code above?
1. read the console.log('satu') first - then get into the stack, executed and gone
2. then, read setTimeout - get into stack, we should wait this for 5s, but it then gone before 5s. It skipped to console.log('tiga');
3. After console.log('tiga') is done in its execution, it will be gone from the stack.
4. After 5s, the console.log('dua') is executed in stack, then gone after the execution
5. The console.log('satu') will be done first, then console.log('tiga') and finally the console.log('dua')
6. The conclusion is, the console.log('tiga') execution is not blocked where all the code from top to bottom are executed

Why the process above occured?
- It's due to asynchronous callback. It happened because there's event loop
*/

/*
The point is don't block the event loop to give convenience to our users
*/
