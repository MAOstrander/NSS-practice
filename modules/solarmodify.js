var SolarSystem = (function(solarSystem) {
  var closestStars = ["Alpha Centauri", "Barnard's Star", "Wolf 359", "Lalande 21185", "Sirius"];
  var ageofSolarSystem = 1000000;
  var dwarfPlanets = ["Pluto", "Eris"];

  solarSystem.setAgeofSolarSystem = function(age) {
    if (age > 6000) {
      ageofSolarSystem = age;
    } else {
      throw "What are you, a new earther?";
    }
  };

  solarSystem.getAgeofSolarSystem = function() {
    return ageofSolarSystem;
  };

  solarSystem.addDwarfPlanet = function(planet) {
      dwarfPlanets.push(planet);
  };

  solarSystem.getDwarfPlanets = function() {
    return dwarfPlanets;
  };

  solarSystem.getClosestStars = function() {
    return closestStars;
  };


  return solarSystem;

})(SolarSystem);

console.log(SolarSystem);
// console.log(SolarSystem.setAgeofSolarSystem(2000));