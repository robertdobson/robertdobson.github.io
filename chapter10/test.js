/* 
  CIS166AA: Chapter 10 Case Project Website
  Author: Robert Dobson
  Date: 11/11/2018
*/

"use strict";

// Form components and RegEx patterns assigned to variables
var nameBox = document.getElementById("name");                     // name text field
var emailBox = document.getElementById("email");                   // email text field
var phoneBox = document.getElementById("phone");                   // phone number field
var addressBox = document.getElementById("address");               // address text field
var cityBox = document.getElementById("city");                     // city text field
var stateBox = document.getElementById("state");                   // state text field
var zipBox = document.getElementById("zip");                       // zip code number field
var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex to check email format
var regex = /^[a-zA-Z '-.,]*$/;                                    // regex to accept only letters, spaces, apostrophes, commas, periods, or dashes are entered
var specialExclusions = /[*|\":<>[\]{}`\\();@&$]/;                 // regex to exclude certain characters from being entered
var phoneFormat = /^\d{10}$/;                                      // regex to accept only ten numbers entered for phone number
var addressFormat = /^[a-zA-Z0-9 '-.,#]*$/;                        // regex to accept only letters, numbers, spaces, or (' - # , .) are entered
var stateFormat = /^[a-zA-Z]*$/;                                   // regex to accept only letters for state entry
var zipFormat = /^\d{5}$/;                                         // regex to accept only five numbers entered for zip code
var validationForm = document.getElementsByTagName("form")[0];     // the form as an object

// Error message for alert dialogs
var errMsg = 'You must complete all fields!';
// Boolean for valid entries
var formValidity = true;

// Validate required fields
function validateRequired() {
	"use strict";
	var fieldsetValidity = true;

	try {
		// Verify that a name has been entered.
		if (!nameBox.value) {
			fieldsetValidity = false;
			nameBox.focus();
		}

		// Verify only letters have been entered for the name field.
		if (specialExclusions.test(nameBox.value)) {
			fieldsetValidity = false;
			nameBox.focus();
			alert("You can only enter letters, spaces, apostrophes, or dashes for a name!");
		} else if (!regex.test(nameBox.value)) {
			fieldsetValidity = false;
			nameBox.focus();
			alert("You can only enter letters, spaces, apostrophes, or dashes for a name!");
		}

		// Verify that an email address has been entered.
		if (!emailBox.value) {
			fieldsetValidity = false;
			emailBox.focus();
		}

		// Verify that the email entry conforms to a standard email format
		if (!emailBox.value.match(emailFormat)) {
			alert("You have entered an invalid email address!");
			fieldsetValidity = false;
		}
		
		// Verify that a phone number has been entered.
		if (!phoneBox.value) {
			fieldsetValidity = false;
			phoneBox.focus();
		}

		// Verify that the phone number entry conforms to US phone number format
		if (!phoneBox.value.match(phoneFormat)) {
			alert("The phone number entry field accepts only 10 digits!");
			fieldsetValidity = false;
		}
		
		// Verify that an address has been entered.
		if (!addressBox.value) {
			fieldsetValidity = false;
			addressBox.focus();
		}

		// Verify that the address entry conforms to acceptable format
		if (specialExclusions.test(addressBox.value)) {
			fieldsetValidity = false;
			addressBox.focus();
			alert("You can only enter numbers, letters, spaces, apostrophes, #, commas, or dashes for an address!");
		} else if (!addressBox.value.match(addressFormat)) {
			alert("You can only enter numbers, letters, spaces, apostrophes, #, commas, or dashes for an address!");
			fieldsetValidity = false;
		}
		
		// Verify that a city has been entered.
		if (!cityBox.value) {
			fieldsetValidity = false;
			cityBox.focus();
		}

		// Verify that the city entry conforms to acceptable format
		if (specialExclusions.test(cityBox.value)) {
			fieldsetValidity = false;
			cityBox.focus();
			alert("You can only enter letters, spaces, apostrophes, commas, or dashes for a city!");
		} else if (!cityBox.value.match(regex)) {
			alert("You can only enter letters, spaces, apostrophes, commas, or dashes for a city!");
			fieldsetValidity = false;
		}
		
		// Verify that a state has been entered.
		if (!stateBox.value) {
			fieldsetValidity = false;
			stateBox.focus();
		}

		// Verify that the city entry conforms to acceptable format
		if (!stateBox.value.match(stateFormat)) {
			alert("You have entered an invalid state!");
			fieldsetValidity = false;
		}
		
		// Verify that a zip code has been entered.
		if (!zipBox.value) {
			fieldsetValidity = false;
			zipBox.focus();
		}

		// Verify that the zip code entry conforms to acceptable format
		if (!zipBox.value.match(zipFormat)) {
			alert("You have entered an invalid zip code!");
			fieldsetValidity = false;
		}

		// Throw the error message if any of the validation conditions are not satisfied.
		if (fieldsetValidity === false) {
			throw errMsg;
		} else {
			alert("Congratulations on successful validation!");
			window.open("map.html");
		}

		// If any of the validation fails then return false. 
	} catch (msg) {
		formValidity = false;
	}
}

// validate form
function validateForm(event) {
	"use strict";
	if (event.preventDefault) {
		event.preventDefault(); // Block form submittal
	} else {
		event.returnValue = false; // Block form submittal in IE8
	}
	formValidity = true;
	validateRequired(); // Call form validation method


	if (formValidity === true) { // Submit form if validation is true.
		validationForm.submit();

	} else { // otherwise change notification text to the error message
		alert(errMsg);
	}
}

// run setup functions on page load
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachaEvent("onload", setUpPage);
}

// call these functions on page load
function setUpPage() {
	"use strict";
	createEventListeners();
}

// create event listeners
function createEventListeners() {
	"use strict";
	if (validationForm.addEventListener) {
		validationForm.addEventListener("submit", validateForm, false);
	} else if (validationForm.attachEvent) {
		validationForm.attachEvent("onsubmit", validateForm);
	}
}