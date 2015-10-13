var colors = ["Blue", "Red", "Orange", "Purple", "Chartreuse", "Aquamarine", "Brown", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
var colorful =  document.getElementById("reindeer");
/*
  YOUR ASSIGNMENT
  ----------------------------------------
  Loop through all the reindeer in the array, and add the 
  name of the reindeer to the single HTML <div> element provided.
  The name of the reindeer should be prepended with the corresponding
  color from the other array.
  
  For example:
    Blue Dasher
    Red Dancer
    etc..
*/
var paintedReindeer = [];
var paint = [];
for (var i = 0; i < reindeer.length; i++) {
  paint[i] = colors[i] + " " + reindeer[i]
  paintedReindeer.push(paint[i]);
}

console.log(paintedReindeer);

var output = "";
for (var j = 0; j < paintedReindeer.length; j++) {
  output += "<p style='color:" + colors[j] + "'>";
  output += paintedReindeer[j];
  output +=  "</p>";
}

colorful.innerHTML = output;


// var output = "";

// for (var index = 0; index < reindeer.length; index++) {
//   var currentReindeer = reindeer[index];
//   var currentColor = colors[index];

//   output = output + "<h1 style='color:" + currentColor + "'>";
//   output = output + currentColor + " " + currentReindeer;
//   output = output + "</h1>";
// }

// console.log(output);

// hohohoElement.innerHTML = output;