const x = 1;
{
  console.log(x);
  // ReferenceError: Cannot access 'x' before initialization
  const x = 2;
}
