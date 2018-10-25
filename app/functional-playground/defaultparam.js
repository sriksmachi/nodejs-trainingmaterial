///////////////////////////////
var printcard = function (name, age, isFemale) {
    var name = name || '<No Name>>';
    var age = age || -1;
    var isFemale = isFemale || true;
    var salutation = isFemale ? 'Miss' : 'Mr';
    console.log(`Name: ${salutation}.${name} Age: ${age}`);
};

printcard(null, 0);
printcard(null, 0, false);

var printcard = function (name, age, isFemale) {
    var name = name || '<No Name>>';
    var age = typeof (age) == 'undefined' ? -1 : age;
    var isFemale = typeof (isFemale) == 'undefined' ? true : isFemale;
    var salutation = isFemale ? 'Miss' : 'Mr';
    console.log(`Name: ${salutation}.${name} Age: ${age}`);
};

printcard(null, 0);
printcard(null, 0, false);

var printcard = function (name = '<No Name>', age = -1, isFemale = false) {
    var salutation = isFemale ? 'Miss' : 'Mr';
    console.log(`Name: ${salutation}.${name} Age: ${age}`);
};
printcard(undefined, 0);
printcard(undefined, 0, false);