'use strict';

// 1
// let a = 074;
// let b = '\056';
// console.log(a);
// SyntaxError: Octal literals are not allowed in strict mode
// console.log(b);
// SyntaxError: Octal escape sequences are not allowed in strict mode

// 3
// let personal = { firstname: 'Satyaki' };
// delete personal;
// SyntaxError: Delete of an unqualified identifier in strict mode
// delete personal.firstname;
// console.log(personal.firstname);
// undefined
//
// b = 'hey';
// console.log(b);
// ReferenceError: b is not defined

// 5
// details = { name: 'satyaki', age: 30 };
// console.log(details);
// ReferenceError: details is not defined

// 5
// let object2 = {};
// Object.defineProperty(object2, 'b', { value: 29, writable: false });
// assignment to a non-writable property
// object2.b = 9;
// console.log(object2.b);
// TypeError: Cannot assign to read only property 'b' of object '#<Object>'

// 6
// a = NaN;
// console.log(a);
// ReferenceError: a is not defined

// 7
// let arguments = 'hey';
// let eval = 47;
// console.log(arguments);
// console.log(eval);
// SyntaxError: Unexpected eval or arguments in strict mode

// 10
// function help(param1, param1) {
//   console.log('help');
// }
// help();
// SyntaxError: Duplicate parameter name not allowed in this context

// 12
// let obj = {};
// Object.preventExtensions(obj);
// Assignment to a new property on a non-extensible object
// obj.newValue = 'new value';
// console.log(obj.newValue);
// ReferenceError: obj is not defined
// TypeError: Cannot add property newValue, object is not extensible
