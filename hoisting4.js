home();
var home = function () {
 console.log('hello'); // ReferenceError: Cannot access 'home' before initialization (let home)
 // home is not a function (var home)
};
