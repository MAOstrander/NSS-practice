/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/
var output = document.getElementById("output");
var tempField = document.getElementsByName("temp").item(0);
console.log("tempField:", tempField);

function toCelsius (convertMe) {
  var cels = (convertMe - 32) * 5 / 9;
  output.innerHTML = cels;
  console.log("Answer in Celsius:", cels);

}

function toFahrenheit (convertMe) {
  var fahr = (convertMe * 9 / 5) + 32;
  output.innerHTML = fahr;
  console.log("Answer in Fahrenheit:", fahr);
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var unit = document.getElementsByName("units");
  var numberToConvert = tempField.value;
  console.log("numberToConvert", numberToConvert);

  // for (var i = 0; i < unit.length; i++) {
  //   console.log(unit.item(i).checked);

    if (unit.item(0).checked) {
      toCelsius(numberToConvert);
      console.log("f clicked");
      
    } else if (unit.item(1).checked) {
      toFahrenheit(numberToConvert);
      console.log("c clicked");
      
    } 
  // }

}


function submitWithEnter (keyUpEvent) {
    console.log("WHATS GOING ON?!", keyUpEvent.keyIdentifier);
  
  if (keyUpEvent.keyIdentifier === "Enter") {
    determineConverter(tempField.value);
  }
}

tempField.addEventListener("keyup", submitWithEnter);


// Assign a function to be executed when the button is clicked
var convertButton = document.getElementById("convert")
convertButton.addEventListener("click", determineConverter);

var clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
  document.getElementsByName("temp").item(0).value = "";
  output.innerHTML = 0;
});