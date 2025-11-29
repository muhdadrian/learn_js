//to prevent the global variable being declared automatically by JS, use "use strict";

//JS will use strict model

'use strict';

function test() {
  a = 2;
}

test();
console.log(a);
