///////////// SPREAD OPERATOR
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]

///////////// Computed Proerty Names

const key = 'hello'
const things = { [key]: 'world' }
console.log("Things: " + things.hello)

// things is { hello: ‘world’ }

//////// Property Short Hand

var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true


////// Destructuring assignment

var people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (var {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }

  ////////////// Method Properties

  var SteamEngine = {
    color: 'blue',
    get name() { return 'Thomas' },
    start: function() { console.log('Hurry up!'); },
    stop: function() { console.log('Screech...! That was close.'); }
  };


  var SteamEngine = {
    color: 'blue',
    get name() { return 'Thomas' },
    start() { console.log('Hurry up!'); },
    stop() { console.log('Screech...! That was close.'); }
  };
   
  console.log('My name is', SteamEngine.name);
  SteamEngine.start();
  SteamEngine.stop();