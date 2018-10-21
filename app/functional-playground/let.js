var x = 'outer';

var test = function (inner) {
  if (inner) {
    var x = 'inner'; // scope whole function
    return x;
  }
  return x; // gets redefined because line 4 declaration is hoisted
}

console.log(test(false)); 
console.log(test(true)); 