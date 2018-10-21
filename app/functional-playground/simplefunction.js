/*
 * ######### SIMPLE FUNCTION ##############
 *
 */
var percentValue = 5;
var calculateTax = function (value) {
    console.log(percentValue);
    return value / 100 * (100 + percentValue);
};

///////////////// FUNCTIONS VS METHODS ///////////////

// Function
function simple(a) {
      return a;
}
simple(5);

//Method

var obj = {
      simple: function simple(a) {
            return a;
      }
};
obj.simple(5); //called by its name along with its associated object


// calling Simple Function 
console.log(calculateTax(60));