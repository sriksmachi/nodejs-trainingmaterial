/* ITERATORS
* In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination
* A Iterator must implement
*  next() function ; returns
*     value - which is the next value in sequence 
*     done - is true/false if the last sequence is executed
* Rules:
*   1. A Iterator can only be iterated once
*   2. After a terminating value has been yielded additional calls to next()
     should simply continue to return {done: true}
*/

function fruits() {
    var fruitsList = ["Apple", "Orange", "Banana", "Grapes"];
    var startIndex = 0;
    var lastIndex = fruitsList.length;
    var iterator = {
        [Symbol.iterator](){
            return this
        },
        next: function () {
            var result = {};
            if (startIndex < lastIndex) {
                result = {
                    value: fruitsList[startIndex],
                    done: false
                };
                ++startIndex;
            } else if (startIndex == lastIndex) {
                result = {
                    value: fruitsList[lastIndex],
                    done: true
                };
            } else {
                result = {
                    done: true
                };
            }
            return result;
        }
    };
    return iterator;
}

// var myfruits = {
//     [Symbol.iterator](){
//         return fruits();
//     }
// };

// var fruit = myfruits.next();
// while(!fruit.done){
//     console.log(fruit.value);
//     fruit = myfruits.next();
// }

for(fruit of fruits()){
    console.log(fruit);
}