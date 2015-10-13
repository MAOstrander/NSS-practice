var scores = [78, 87, 98, 70, 68, 13, 53, 76, 47, 87, 99, 100];
var as = [];
var bs = [];
var cs = [];
var ds = [];
var fs = [];

for (var i = 0; i < scores.length; i++) {
  var score = scores[i]
  console.log("Score value:", score);

  if (score > 91) {
    as.push(score);
  } else if (score > 81) {
    bs.push(score);
  } else if (score > 71) {
    cs.push(score);
  } else if (score > 61) {
    ds.push(score);
  } else {
    fs.push(score);
  }

  // switch (planet) {
  //   case "mercury":
  //   case "venus":
  //   case "earth":
  //   case "mars":
  //     console.log("rocky planet");
  //     break;
  //   case "jupiter":
  //   case "saturn":
  //   case "uranus":
  //   case "neptune":
  //     console.log("gas planet");
  //     break;
  //   default:
  //     console.log("Out of bounds");
  //     break;
  // }
}

console.log("There are " + as.length + " A's");
console.log("There are " + bs.length + " B's");
console.log("There are " + cs.length + " C's");
console.log("There are " + ds.length + " D's");
console.log("There are " + fs.length + " F's");

console.log("The highest grade is: ", );
console.log("The lowest grade is: ", );