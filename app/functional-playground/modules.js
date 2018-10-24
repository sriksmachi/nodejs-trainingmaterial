const { Car, Vehicle} = require('./classes.js');

class AutomaticCar extends Car{
    break() {
        console.log("Get current gear...")
        super.break();
        console.log("Bring down gear...")
    }
}
var car = new AutomaticCar("Tesla");
car.break();

