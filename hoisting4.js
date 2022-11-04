home();
var home = function () // or let home = function ()
{
  console.log('hello'); // ReferenceError: Cannot access 'home' before initialization (let home)
  // home is not a function (var home)
};
