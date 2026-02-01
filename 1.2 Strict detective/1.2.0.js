"use strict";           // Enables strict mode

x = 10;                 // ❌ Error here
console.log(x);

function test() {
  y = 20;               // ❌ Error here
}
test();

console.log(y);

/*
a) What happens in non-strict mode?

- JavaScript allows variables to be used without declaring them.
- x becomes a GLOBAL variable automatically.
- y also becomes GLOBAL even though it was created inside a function.
- The code runs without any error.

⚠️ This behavior can cause bugs and unexpected side effects.
*/

/*
b) What happens in strict mode?

- JavaScript throws a ReferenceError.
- Variables MUST be declared using let, var, or const.
- x = 10 causes an error because x is not declared.
- y = 20 also causes an error for the same reason.
- The code stops running immediately when the error occurs.
*/

/*
c) Why do modern developers prefer strict mode?

- It helps catch errors early.
- Prevents accidental creation of global variables.
- Makes code safer and more predictable.
- Improves performance in JavaScript engines.
- Encourages clean and professional coding practices.

✅ Strict mode = cleaner, safer, and more maintainable code.
*/
