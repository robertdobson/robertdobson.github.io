/* 
  CIS166AA: Chapter 4 Case Project Website
  Author: Robert Dobson
  Date: 09/29/2018
*/

/*
  I utilized several of the methods in the chapter for debugging the code
  in order to get the proper behavior from the webpage. I added a try/catch
  block to validate user input and provide exception handling for the thingOne
  value, per the assignment requirement. I examined console messages, and used
  the debugging console a lot to set breakpoints and step through the code
  execution. I also utilized the console.log() method during my troubleshooting.
  In addition to the afforementioned techniques, I did a lot of commenting
  and uncommenting code to see how adding or removing certain lines of code
  would affect the flow of events and actions on the webpage.
*/

// global variables
var thingOneValue= 0;
var thingTwoValue = 0;
var finalValue = 0;
var thingOne = document.getElementById("thingOne");
var thingTwo = document.getElementById("thingTwo");   

// sets all form field values to defaults
function resetForm() {
   document.getElementById("thingOne").value = 1;
   document.getElementById("thingTwo").value = 0;
   calculateValue();
   createEventListeners();
}

// verify thingOne and thingTwo text box entries are a positive number
function verifyPositiveAndNumeric() {
	document.getElementById("errorMessage").innerHTML = ""; // Clear any previous error messages
	document.getElementById("errorMessage2").innerHTML = "";
	var x = document.getElementById("thingOne").value; // Get and assign values of thingOne and thingTwo to x and y;
	var y = document.getElementById("thingTwo").value;
	try {                                          // Try the following;
      if (x === "") throw "is empty!";            // Check if field is empty
      if(isNaN(x)) throw "is not a number!";      // Check if field is not a number
      x = Number(x);
		if(x < 1) throw "must be 1 or higher!";     // Enforce Thing One entry to be 1 or higher
   }
	catch(err) {  // If an entry error is caught, execute the following statements.
		thingOne.value = ""; // remove erroneous entry from input box
		document.getElementById("errorMessage").innerHTML = "Thing One entry " + err; // Display thrown error message
		document.getElementById("result").innerHTML = ""; // Clear previous result field
   }
	try {                                          // Try the following;
      if (y === "") throw "is empty!";            // Check if field is empty
      if(isNaN(y)) throw "is not a number!";      // Check if field is not a number
      y = Number(y);
		if(y < 0) throw "must be 0 or higher!";     // Enforce Thing Two entry to be 1 or higher
   }
	catch(err) {  // If an entry error is caught, execute the following statements.
		thingTwo.value = ""; // remove erroneous entry from input box
		document.getElementById("errorMessage2").innerHTML = "Thing Two entry " + err; // Display thrown error message
		document.getElementById("result").innerHTML = ""; // Clear previous result field
   }
}
// calculates value based on # of Thing Ones & Thing Twos
function calculateValue() {  
   thingOneValue = thingOne.value * 500;
   thingTwoValue = thingTwo.value * 250;  
   finalValue =  thingOneValue + thingTwoValue;   
   document.getElementById("result").innerHTML = "Your result is: " + finalValue;
	verifyPositiveAndNumeric();
}

// creates event listeners
function createEventListeners() {
   document.getElementById("thingOne").addEventListener("change", calculateValue, false);
   document.getElementById("thingTwo").addEventListener("change", calculateValue, false); 
}