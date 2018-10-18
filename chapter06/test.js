/* 
  CIS166AA: Chapter 6 Case Project Website
  Author: Robert Dobson
  Date: 10/15/2018
*/

// Form components assigned to variables
var nameBox = document.getElementById("name");                    // name text field
var emailBox = document.getElementById("email");                  // email text field
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex to check email format
var regex = /^[a-zA-Z]*$/;                                        // regex to check only letters entered for name
var selectionList = document.getElementById("selectionlist");     // selection list
var radioButtons = document.getElementsByName("radiobutton");     // the radio selector
var validationForm = document.getElementsByTagName("form")[0];    // the form as an object

// Error message for alert dialogs
var errMsg = 'You must complete all fields!';
// Boolean for valid entries
var formValidity = true;

// Validate required fields
function validateRequired() {
	"use strict";
	var fieldsetValidity = true;
	var currentElement;

	try {
		// Verify that a name has been entered.
		if (!nameBox.value) {
			fieldsetValidity = false;
			nameBox.focus();
		}

		// Verify only letters have been entered for the name field.
		if (!regex.test(nameBox.value)) {
			fieldsetValidity = false;
			nameBox.focus();
			alert("You can only enter letters for a name!");
		}

		// Verify that an email address has been entered.
		if (!emailBox.value) {
			fieldsetValidity = false;
			emailBox.focus();
		}

		// Verify that the email entry conforms to a standard email format
		if (!emailBox.value.match(mailformat)) {
			alert("You have entered an invalid email address!");
			fieldsetValidity = false;
		}

		// Verify a selection has been chosen in the selection list.
		currentElement = document.querySelectorAll("select")[0];
		if (currentElement.selectedIndex === -1) { // if no selection set fieldsetValidity to false
			fieldsetValidity = false;
		}

		// Verify that a radio button is selected.
		if (!radioButtons[0].checked && !radioButtons[1].checked) { // if unchecked set fieldsetValidity to false
			fieldsetValidity = false;
		}

		// Throw the error message if any of the validation conditions are not satisfied.
		if (fieldsetValidity === false) {
			throw errMsg;
		} else {
			alert("Congratulations on successful validation!");
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
	removeSelectDefault();
	createEventListeners();
}

// remove default value from selection list
function removeSelectDefault() {
	"use strict";
	selectionList.selectedIndex = -1;
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
