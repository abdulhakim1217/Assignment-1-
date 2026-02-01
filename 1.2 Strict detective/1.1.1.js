// NON-STRICT MODE (default behavior)

x = 10;                 // No declaration (var/let/const)
console.log(x);         // Output: 10

function test() {
  y = 20;               // Also no declaration
}
test();

console.log(y);         // Output: 20
