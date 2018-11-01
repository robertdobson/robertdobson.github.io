/* 
  CIS166AA: Chapter 8 Case Project Website
  Author: Robert Dobson
  Date: 10/28/2018
*/

"use strict";

// global variables
var anObject = {};
var anArray = [];
var arrayString;
var anObjectString;

// add anArray to anObject
function registerArray(event) {
   if (event === undefined) { // get caller element in IE8
      event = window.event;
   }
   var callerElement = event.target || event.srcElement;
   var arrayItemName = callerElement.value;
   if (callerElement.checked) { // if box has just been checked
      // add checkbox value to anArray array
      anArray.push(arrayItemName);
      // add checkbox value to list in array section
      var newArrayItem = document.createElement("li");
      newArrayItem.innerHTML = arrayItemName;
      document.getElementById("arrayItems").appendChild(newArrayItem);
      // make array section visible
      document.getElementById("arraySection").style.display = "block";
   } else { // if box has just been unchecked
      var listItems = document.querySelectorAll("#arrayItems li");
      for (var i = 0; i < listItems.length; i++) {
         if (listItems[i].innerHTML === arrayItemName) {
            // remove element at index i from array
            anArray.splice(i, 1); 
            // remove anArray from anObject list
            listItems[i].parentNode.removeChild(listItems[i]);
            break;
         }
      }
   }
}

// convert form input to strings for submission
function convertToString() {
   // convert anArray array to string
   arrayString = anArray.toString();
	document.getElementById("stringResult").innerHTML = "String Result: " + anArray.toString();
   // convert anObject object to string
   anObjectString = JSON.stringify(anObject);
}

// function to create event listeners
function createEventListeners() {  
   var arrayItems = document.getElementsByName("arrayItems");
   if (arrayItems[0].addEventListener) {
      for (var i = 0; i < arrayItems.length; i++) {
         arrayItems[i].addEventListener("change", registerArray, false);
      }
   } else if (arrayItems[0].attachEvent) {
      for (var j = 0; j < arrayItems.length; j++) {
         arrayItems[j].attachEvent("onchange", registerArray);
      }
   }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}