/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

function reversal(origString) {
	var reversedString = origString.split("").reverse().join("");
	document.write("<br>")
	document.write(reversedString)
}

function alphabits(origString) {
	var sortedString = origString.split("").sort().join("");
	document.write("<br>")
	document.write(sortedString)
}

function palindrome(origString) {
	origString = origString.toLowerCase();
	var reversedString = origString.split("").reverse().join("");
	document.write("<br>")
	if (reversedString === origString) {
		document.write("true")
	} else {
		document.write("false")
	}
}

var testString = "Racecar";
reversal(testString);
alphabits(testString);
palindrome(testString);
