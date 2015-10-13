var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// var criteria = 2;

for (var i = 0; i < planets.length; i++) {
  var planet = planets[i]
  
  switch (planet) {
    case "mercury":
    case "venus":
    case "earth":
    case "mars":
      console.log("rocky planet");
      break;
    case "jupiter":
    case "saturn":
    case "uranus":
    case "neptune":
      console.log("gas planet");
      break;
  }
}