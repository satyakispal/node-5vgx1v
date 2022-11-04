'use strict';

// let a = 074;

// console.log(a);
// console.log(b);
// // SyntaxError: Octal literals are not allowed in strict mode

// let personal = { firstname: 'Satyaki' };
// // delete personal;
// // // SyntaxError: Delete of an unqualified identifier in strict mode
// delete personal.firstname;
// // correct
// console.log(personal);
// **********************************************
// b = 'hey';
// console.log(b);
// // ReferenceError: b is not defined

// details = { name: 'satyaki', age: 30 };
// console.log(details);
// // ReferenceError: details is not defined

let object2 = {};

Object.defineProperty(object2, 'b', { value: 29, writable: false });

// assignment to a non-writable property
object2.b = 9;
