/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make = function() {
  this.makeName = "Suzuki";
  console.log("in make");
}


/*
Create a function, Model, to hold the 
corresponding property and value
*/
var Model = function() {
  this.modelName = "Reno";
  console.log("in model");
}


// What is the prototype of a Model?
Model.prototype = new Make();

// Define a Car
var Car = function(color) {
  this.color = color;
}

// What is the prototype of a Car?
Car.prototype = new Model();

// Create the first car
var mine = new Car("Silver");
console.log("mine", mine);

// Create the second car
var bob = new Car("Red");
console.log("bob", bob);

// Create the third car
var joe = new Car("Blue");
console.log("joe", joe);

console.log("My make:", mine.makeName);