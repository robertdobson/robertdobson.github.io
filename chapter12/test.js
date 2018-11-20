/* 
  CIS166AA: Chapter 12 Case Project Website
  Author: Robert Dobson
  Date: 11/18/2018
*/
// JavaScript Document

/* This section of JavaScript that has been commented out is replaced with jQuery with equivalent functionality below
// Function that contains three selectors (fadesin, fadesout, demobutton) replaced with jQuery selectors and performs a CSS change replaced with a jQuery method
function bloatedFunction() {
	"use strict";
	// This section fades out the h2 element with the "fadesout" ID
	var fadeTarget = document.getElementById("fadesout");
	var fadeEffect = setInterval(function () {
		if (!fadeTarget.style.opacity) {
			fadeTarget.style.opacity = 1;
		}
		if (fadeTarget.style.opacity > 0) {
			fadeTarget.style.opacity -= 0.1;
		} else {
			clearInterval(fadeEffect);
		}
	}, 300);

	// this section fades in the h1 element with the "fadesin" ID
	var fadingH1 = document.getElementById("fadesin");
	fadingH1.style.opacity = 0.001;
	fadingH1.style.display = "block";

	var last = +new Date();
	var tick = function () {
		fadingH1.style.opacity = +fadingH1.style.opacity + (new Date() - last) / 4800;
		last = +new Date();

		if (+fadingH1.style.opacity < 1) {
			(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		}
	};
	tick();

	// This section changes the color of the button with the "demobutton" ID to green
	document.getElementById("demobutton").style.backgroundColor = "green";
}

// Event listener attached to demobutton calls bloatedFunction
document.getElementById("demobutton").addEventListener('click', bloatedFunction);*/

// This snippet of jQuery provides equivalent functionality to the above JavaScript that is commented out
$(document).ready(function () {
	"use strict";
	$("#demobutton").click(function () {                   // Executes function when demobutton is clicked
		$("#fadesout").fadeOut(3000);                       // Fades out the h2 element with the "fadesout" ID
		$("#fadesin").fadeIn(3000);                         // Fades in the h1 element with the "fadesin" ID
		$("#demobutton").css("background-color", "green");  // Changes the color of the button with the "demobutton" ID to green
	});
});
