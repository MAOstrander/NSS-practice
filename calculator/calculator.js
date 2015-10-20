/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 var multiplies = function(thing1, thing2) {
 	return thing1 * thing2;
 }

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 function adds(thing1, thing2) {
 	return thing1 + thing2;
 }

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function subtracts(thing1, thing2) {
 	return thing1 - thing2;
 }

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
 function divides(thing1, thing2) {
 	return thing1/thing2;
 }

 /*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 function whichOp(thing1,thing2,func){
 	return func(thing1,thing2);
 }

 document.querySelector("body").addEventListener("click", function(event) {

// Get my values at time of click
var value1 = parseInt(document.getElementsByName("num1")[0].value);
var value2 = parseInt(document.getElementsByName("num2")[0].value);


  // Handle the click event on buttons
  if (event.target.id === "add") {
  		var solution = whichOp(value1,value2,adds);
	} else if (event.target.id === "subtract") {
  		var solution = whichOp(value1,value2,subtracts);
	} else if (event.target.id === "multiply") {
		var solution = whichOp(value1,value2,multiplies);
	} else if (event.target.id === "divide") {
		var solution = whichOp(value1,value2,divides);
	} 
	console.log("Answer:", solution);

	if (solution !== undefined){
		document.getElementById("result").innerHTML = solution;
	}
});


