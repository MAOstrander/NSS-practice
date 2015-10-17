//New and improved temperature converter

var convertField = document.getElementsByName("toConvert").item(0);
var convertedF = document.getElementsByName("fanswer").item(0);
var convertedC = document.getElementsByName("canswer").item(0);
var convertedK = document.getElementsByName("kanswer").item(0);

function colorCode (temp) {
    if (temp > 90) {
    convertedF.className = "hot";
    convertedC.className = "hot";
    convertedK.className = "hot";
  } else if (temp < 32) {
    convertedF.className = "cold";
    convertedC.className = "cold";
    convertedK.className = "cold";
  } else {
    convertedF.className = "normal";
    convertedC.className = "normal";
    convertedK.className = "normal";
  }
}

function isFahrenheit (convertMe) {
  var cels = (convertMe - 32) * 5 / 9;
  var kel = cels + 273.15;
  var fahr = convertMe;

  convertedF.value = fahr;
  convertedC.value = cels;
  convertedK.value = kel;

  colorCode(fahr);
}

function isCelsius (convertMe) {
  var kel = convertMe + 273.15;
  var fahr = (convertMe * 9 / 5) + 32;
  var cels = convertMe;

  convertedF.value = fahr;
  convertedC.value = cels;
  convertedK.value = kel;

  colorCode(fahr);
}

function isKelvin (convertMe) {
  var cels = convertMe - 273.15;
  var fahr = (convertMe * 9 / 5) - 459.67;
  var kel = convertMe;

  convertedF.value = fahr;
  convertedC.value = cels;
  convertedK.value = kel;

  colorCode(fahr);
}

// This function should determine which conversion formulas to apply based on which unit radio button is selected.
function determineConverter (clickEvent) {
  var units = document.getElementsByName("units");
  var numberToConvert = convertField.value;

    if (units.item(0).checked) {
      isFahrenheit(numberToConvert);
    } else if (units.item(1).checked) {
      isCelsius(numberToConvert); 
    } else if (units.item(2).checked) {
      isKelvin(numberToConvert);
    } else {
      alert("Please Select A Unit Type!");
    }

}

// This function checks what key is being pressed in the input field
function submitWithEnter (keyUpEvent) {  
  if (keyUpEvent.keyIdentifier === "Enter") {
    determineConverter(this.value);
  }
}

// Runs conversion when you hit enter
convertField.addEventListener("keyup", submitWithEnter);

// Convert Button
var convertButton = document.getElementById("convert")
convertButton.addEventListener("click", determineConverter);

// Clear Button
var clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
  document.getElementsByName("toConvert").item(0).value = "";
  convertedF.value = "";
  convertedC.value = "";
  convertedK.value = "";
  convertedF.className = "";
  convertedC.className = "";
  convertedK.className = "";
});