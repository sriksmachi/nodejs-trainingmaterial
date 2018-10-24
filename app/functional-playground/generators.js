/* GENERATORS
 *  Generators are lazy 
 *  They help iterate over sequence lazily
 *  
 *  next() function ; returns
 *     value - which is the next value in sequence 
 *     done - is true/false if the last sequence is executed
 * Rules:
 *   1. A geneator should be defined using function*
 *   2. They should have atleast one yield operator
 */

function *fruits() {
    var fruitsList = ["Apple", "Orange", "Banana", "Grapes"];
    for (let i = 0; i < fruitsList.length; i++) {
        yield fruitsList[i];
    }
}

var myfruits = fruits();
console.log(myfruits.next());
console.log(myfruits.next());
console.log(myfruits.next());
console.log(myfruits.next());
console.log(myfruits.next());

console.log('----------------------');

for (f of fruits()) {
    console.log(f);
}
