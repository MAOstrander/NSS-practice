var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// Use the forEach method to add the name of each planet to a div element in your HTML

var el = document.getElementById("planets");

	 planets.forEach(function(one){
	 	el.innerHTML += "<p>" + one + "</p>";
	 });
// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalPlanets = planets.map(function (current) {
    return current.charAt(0).toUpperCase() + current.slice(1);
});
console.log("capitalized:", capitalPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter( function(current) {
	return current.indexOf("e") > -1
});
console.log("Planets with 'e':", ePlanets);
// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var wordsAnswer = words.reduce( function(first, second){
	return first + " " + second;
});

console.log("wordsAnswer:", wordsAnswer);