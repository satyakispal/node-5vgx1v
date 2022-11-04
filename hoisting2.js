// program to display value
// console.log(b);
// var b = 2;
// undefined
// is same as:
// var b;
// console.log(b);
// b = 2;

var a = 7;

function welcome() {
  k = 'hello';
  console.log(k); // hello
  var k;
  // ReferenceError: k is not defined
}

welcome(); // hello
console.log(k); // ReferenceError: k is not defined
