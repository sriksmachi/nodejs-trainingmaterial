class Vehicle {
  
  constructor(name) {
    this.name = name;
  }

  //ES5
  getVehicleProps(model, made, yearofManufacture){
    return {
      model : model, made: made, yearofManufacture : yearofManufacture
    }
  }
  
  break() {
    console.log(`Breaks applied on ${this.name}`);
  }
}

class Car extends Vehicle {
  
  break() {
    super.break();
    console.log(this.name + " stopped");
  }

  // Property Short Hand ES 6
  getVehicleProps(model, made, yearofManufacture){
    return {
      model, made, yearofManufacture
    };
  }

  static printCaption() {
    console.log("The Ultimate Driving Machine");
  }
}

let car = new Car("BMW");
car.break();
Car.printCaption();
console.log(car.getVehicleProps('X1', 'made in germany', 2018));


// Computed Properties

var phone = "make"
var i = 0;
const phones = {
  [phone] : "samsung"
}

// console.log(phones.??)  //  samsung

// Method Properties
const flight = {
  airlines : 'vistara',
  takeoff: function(){ console.log(this.airlines + " taking off..")},
  landing: function(){ console.log(this.airlines + " landing..")},
}

flight.landing()

// Module Exported
module.exports = {
 Vehicle, Car
};