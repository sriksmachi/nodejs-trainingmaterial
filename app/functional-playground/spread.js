/////////////
let multiple = (x, y, z) => console.log(x * y * z);
let numbers = [1, 2, 3];
multiple( /* ?? */);
// Show how it is done In ES5 and ES6
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()

arr2.push(4);
// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];