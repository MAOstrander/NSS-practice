// Immediately invoked function expression
var SolarSystem = (function() {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Saturn", "Jupiter", "Uranus", "Neptune"];
  var landedOn = 0;
  var spacecraft = ["Enterprise", "Voyager"];

  return {
    // Public property for holding a last modified date.
    modified: new Date(),
    // Getter for an array of planets that cannot be modified.
    getPlanets: function() {
      return planets;
    },
    // Getter/setter for number of planets that humans have landed people or robots on.
    setLanded: function(newNumber) {
      landedOn = newNumber;
    },
    getLandedOn: function() {
      return landedOn;
    },
    // Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
    getSpacecraft: function() {
      return spacecraft;
    },
    addSpacecraft: function(newShip) {
      spacecraft[spacecraft.length] = newShip;
    }
  }; //This is the end of the return object
})(); //This is the end of the IFFE


console.log(SolarSystem.getLandedOn());
SolarSystem.setLanded(2);
console.log(SolarSystem.getPlanets());
console.log(SolarSystem.getLandedOn());
