/* 
  CIS166AA: Chapter 7 Case Project Website
  Author: Robert Dobson
  Date: 10/26/2018
*/

// Global variables
var secondsDiff;
var minutesDiff;
var hoursDiff;
var daysDiff;
var monthsDiff;
var yearsDiff;
var currentDate;
var userEntry;
var milliseconds;

// Submit button is disabled initially
activateButton(true);

// Validates whether user picked a date before tomorrow.
function validateUserSelection() {
	"use strict";
	userEntry = new Date(document.getElementById("myDate").value);
	var year = userEntry.getFullYear();
	var month = userEntry.getMonth();
	var day = userEntry.getDate();
	var userEntryModified = new Date(year, month, day);
	currentDate = new Date();
	if (userEntry > currentDate) { // If user date entry is greater than the current date, alert that a date preceding tomorrow is required.
		alert("You must pick a date before tomorrow!");
	} else {	                      // Otherwise, establish the difference between user entered date and current date in milliseconds, and enable the Submit button.
		milliseconds = currentDate - userEntryModified;
		activateButton(false);
	}
}

// This function establishes the whole number value of various units of time, and displays the result of the differences between user entered and current time.
function establishDiffs() {
	"use strict";
	secondsDiff = milliseconds / 1000; minutesDiff = secondsDiff / 60; secondsDiff = Math.round(secondsDiff % 60);
	hoursDiff = minutesDiff / 60; minutesDiff = Math.floor(minutesDiff % 60);
	daysDiff = hoursDiff / 24; hoursDiff = Math.floor(hoursDiff % 24);
	monthsDiff = daysDiff / 31; daysDiff = Math.floor(daysDiff % 31) - 1;
	yearsDiff = monthsDiff / 12; monthsDiff = Math.floor(monthsDiff % 12);
	yearsDiff = Math.floor(yearsDiff);
	document.getElementById("years").innerText = yearsDiff.toString();
	document.getElementById("months").innerText = monthsDiff.toString();
	document.getElementById("days").innerText = daysDiff.toString();
	//document.getElementById("hours").innerText = hoursDiff.toString();      // These lines also display hours, minutes, and seconds if 
	//document.getElementById("minutes").innerText = minutesDiff.toString();  // the relevant line in test.html and these are uncommented.
	//document.getElementById("seconds").innerText = secondsDiff.toString();
}

/* I was experimenting with a function to display a running elapsed time after establishing origin differential
   between user entered and current time. I may return to this later to try and add such functionality.
function startTimer() {
	var timer = setInterval(function () {
		secondsDiff++;
		document.getElementById("seconds").innerText = currentDate.getSeconds().toString();
		document.getElementById("minutes").innerText = currentDate.getMinutes().toString();
		//document.getElementById("hours").innerText = hoursDiff;
		//document.getElementById("days").innerText = daysDiff;
		document.getElementById("months").innerText = monthsDiff.toString();
		document.getElementById("years").innerText = yearsDiff.toString();
	}, 1000);
}*/

// This function is used for enabling or disabling the Submit button.
function activateButton(start) {
	"use strict";
	document.getElementById("submit").disabled = start;
}