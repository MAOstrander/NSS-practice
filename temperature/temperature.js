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

function toCelsius (convertMe) {
  var cels = (convertMe - 32) * 5 / 9;

  if (cels > 32) {
    output.className = "hot";
  } else if (cels < 0) {
    output.className = "cold";
  } else {
    output.className = "normal";
  }

  console.log("Answer in Celsius:", cels);
  output.innerHTML = cels;
}

function toFahrenheit (convertMe) {
  var fahr = (convertMe * 9 / 5) + 32;

    if (fahr > 90) {
    output.className = "hot";
  } else if (fahr < 32) {
    output.className = "cold";
  } else {
    output.className = "normal";
  }

  console.log("Answer in Fahrenheit:", fahr);
  output.innerHTML = fahr;
}

// This function should determine which conversion should happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var unit = document.getElementsByName("units");
  var numberToConvert = tempField.value;

  // for (var i = 0; i < unit.length; i++) {
  //   console.log(unit.item(i).checked);

    if (unit.item(0).checked) {
      toCelsius(numberToConvert); 
    } else if (unit.item(1).checked) {
      toFahrenheit(numberToConvert);
    } 
  // }

}

// This function checks what key is being pressed in the input field
function submitWithEnter (keyUpEvent) {  
  if (keyUpEvent.keyIdentifier === "Enter") {
    determineConverter(tempField.value);
  }
}

// Runs conversion when you hit enter
var tempField = document.getElementsByName("temp").item(0);
tempField.addEventListener("keyup", submitWithEnter);

// Convert Button
var convertButton = document.getElementById("convert")
convertButton.addEventListener("click", determineConverter);

// Clear Button
var clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
  document.getElementsByName("temp").item(0).value = "";
  output.innerHTML = 0;
  output.className = "";
});