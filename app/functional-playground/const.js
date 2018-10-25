var settings = {
    baseUrl: "https://example.com"
};

console.log(settings.baseUrl);

settings.baseUrl = "http://example2.com";

console.log(settings.baseUrl);

var fruits = ['apple', 'banana'];

fruits = [];

console.log(fruits);

// Ex of immutable objects

let x = 5; // the state of x is 5 here 
let y = x; // the state of y is same as that of x

y = x * 2; // we are altering the state of y

console.log('x = ' + x); // prints: x=5; x is intact, pretty simple
console.log('y = ' + y); // prints: y=10

// const in loop

// function logArgs(...args) {
//     for (let [index, elem] of args.entries()) {
//         const message = index + '. ' + elem;
//         console.log(message);
//     }
// }


//Object.freeze

