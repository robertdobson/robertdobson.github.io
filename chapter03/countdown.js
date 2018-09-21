// JavaScript Document

/* 
  CIS166AA: Chapter 3 Case Project Website
  Author: Robert Dobson
  Date: 09/19/2018
*/

// Global variables
var seconds = 10;
var daysOfWeek = ["Saturday", "Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"];
var countdownTimer = setInterval('countdown()', 1000);

// A simple random number generator choosing a number between 1 and 10
var randomNumber = Math.floor((Math.random() * 10) + 1);

// A countdown timer function
function countdown() {	
	var secondsRemaining = seconds;
	
	if (randomNumber < 6) { // If the random number is < 6, print numbers to the screen
		
		document.getElementById('bigText').innerHTML = secondsRemaining;

		if (seconds === 0) { // If seconds reach zero, print final message
			clearInterval(countdownTimer);
			document.getElementById('bigText').innerHTML = "Lift Off!!!";
		} else { // Otherwise, decrement the number of seconds
			seconds --;
		}
	} else { // Otherwise, if the random number is 6 or greater, print the days of the week to the screen
		
		document.getElementById('bigText').innerHTML = daysOfWeek[secondsRemaining - 4];
		
		if (seconds === 3) { // If seconds reach zero, print final message
			clearInterval(countdownTimer);
			document.getElementById('bigText').innerHTML = "Party Time!!!";
		} else { // Otherwise, decrement the number of seconds
			seconds --;
		}
	}
}