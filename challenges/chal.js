// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?
var noAnswer = true;
var test = 1;

while (noAnswer) {
	if (test % 10 === 0) {
		if (test % 9 === 0) {
			if (test % 8 === 0) {
				if (test % 7 === 0) {
					if (test % 6 === 0) {
						if (test % 5 === 0) {
							if (test % 4 === 0) {
								if (test % 3 === 0) {
									if (test % 2 === 0) {
										if (test % 1 === 0) {
											noAnswer = false;
											answer = test;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	test++;
}

console.log("Smallest Divisible Answer: ", answer);

// Write a Fibonacci number generator that outputs the numbers in the series that are less than 500

var Fibonacci = [0, 1, 1];
var index = 2;

while (Fibonacci[Fibonacci.length-1] < 500) {
	Fibonacci.push(Fibonacci[index] + Fibonacci[index-1])
	index++;
	if (Fibonacci.length === 500) {
		break;
	}
}
Fibonacci.pop();
	console.log("Fibonacci Answer:", Fibonacci);

//What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers?
var sumOfSquares = 0;
var sumsToSquare = 0;

for (var k = 1; k < 11; k++) {
	sumOfSquares += k * k;
	
	sumsToSquare += k;
}
var squareOfSums = sumsToSquare * sumsToSquare;
console.log("squareOfSums", squareOfSums);
console.log("sumOfSquares", sumOfSquares);

var differenceAnswer = squareOfSums - sumOfSquares;
console.log("differenceAnswer", differenceAnswer);


//Class stuff
var colors = ["red", "blue", "green", "yellow", "orange", "teal"]

// colors.forEach(function(color) {
// 	console.log(color);
// });


var reversedColors = colors.map(function(color) {
	return color.split("").reverse().join("");
});
console.log("reversedColors", reversedColors);

//filter method/function
var fourLetters = colors.filter(function(color) {
	return color.length === 4;
});
console.log("fourLetters", fourLetters);



