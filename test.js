/* 
  CIS166AA: Chapter 2 Case Project Website
  Author: Robert Dobson
  Date: 09/12/2018
*/

// global variables
var thingOneValue= 0;
var thingTwoValue = 0;
var finalValue = 0;
var someModifier = false;
var thingOne = document.getElementById("thingOne");
var thingTwo = document.getElementById("thingTwo");   

// sets all form field values to defaults
function resetForm() {
   document.getElementById("thingOne").value = 1;
   document.getElementById("thingTwo").value = 0;
   document.getElementById("someModifier").checked = someModifier;   
   calculateValue();
   createEventListeners();
}

// calculates value based on # of Thing Ones & Thing Twos
function calculateValue() {  
   thingOneValue = thingOne.value * 500;
   thingTwoValue = thingTwo.value * 250;  
   finalValue =  thingOneValue + thingTwoValue;   
   document.getElementById("result").innerHTML = finalValue;   
}

// adds/subtracts value of someModifier to finalValue
function someModifierOption() {
    var someModifierValue = (thingOne.value * 100) + (thingTwo.value * 100);
   (document.getElementById("someModifier").checked === false) ? finalValue -= someModifierValue : finalValue += someModifierValue;
   document.getElementById("result").innerHTML = finalValue;
}

// creates event listeners
function createEventListeners() {
   document.getElementById("thingOne").addEventListener("change", calculateValue, false);
   document.getElementById("thingTwo").addEventListener("change", calculateValue, false);
   document.getElementById("someModifier").addEventListener("change", someModifierOption, false);   
}