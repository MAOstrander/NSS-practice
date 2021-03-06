// This file was supposed to count how many of each grade type there was and display it in the console
// In addition the highest and lowest grades were to be displayed
// Two different methods were used, the alternate being commented out but retained for posterity.
var scores = [78, 87, 98, 70, 68, 13, 53, 76, 47, 87, 99, 100],
  as = [], 
  bs = [],
  cs = [],
  ds = [],
  fs = [];

// var highestGrade = scores[0];
// var lowestGrade = scores[0];

for (var i = 0; i < scores.length; i++) {
  var score = scores[i]

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

  if (scores[i] > highestGrade) {
    highestGrade = scores[i];
  }
  if (scores[i] < lowestGrade) {
    lowestGrade = scores[i];
  }

  // //Using switch statements instead of if/else
  // switch (true) {
  //   case (score < 61):
  //   fs.push(score);
  //   break;
  //   case (score > 60 && score < 71):
  //   ds.push(score);
  //   break;
  //   case (score > 70 && score < 81):
  //   cs.push(score);
  //   break;
  //   case (score > 80 && score < 91):
  //   bs.push(score);
  //   break;
  //   case (score > 90):
  //   as.push(score);
  //   break;
  // }

}

console.log("There are " + as.length + " A's");
console.log("There are " + bs.length + " B's");
console.log("There are " + cs.length + " C's");
console.log("There are " + ds.length + " D's");
console.log("There are " + fs.length + " F's");

console.log("The highest grade is: ", Math.max.apply(this, scores));
console.log("The lowest grade is: ", Math.min.apply(this, scores));

// console.log("The highest grade is: ", highestGrade);
// console.log("The lowest grade is: ", lowestGrade);