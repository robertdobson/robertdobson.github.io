/* 
  CIS166AA: Chapter 5 Case Project Website
  Author: Robert Dobson
  Date: 10/5/2018
*/

// Variables for the callback() geolocation function.
var state = document.getElementById('state');
var city = document.getElementById('city');
var postal = document.getElementById('postal');
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var ip = document.getElementById('IPv4');

// Function to call getLocation(), set text of table cells to the appropriate information via ID, and call callback function
function getBrowserProperties() {
	"use strict";
	getLocation();	
	document.getElementById(0).innerHTML = screen.colorDepth;
	document.getElementById(1).innerHTML = navigator.platform;
	document.getElementById(2).innerHTML = navigator.userAgent;
	document.getElementById(3).innerHTML = screen.width;
	document.getElementById(4).innerHTML = screen.height;
	callback();
}

// Function to get geolocation and call the showPosition function
function getLocation() {
	"use strict";
	document.getElementById(5).innerHTML = "You didn't give your browser permission to share location.";
	if (navigator.geolocation) {  // If geolocation is authorized..
		navigator.geolocation.getCurrentPosition(showPosition); // Call showPosition to "show position"
	}
}

// Function to display geolocation position in terms of lat/long coordinates.
function showPosition(position) {
	"use strict";
	document.getElementById(5).innerHTML = "Latitude: " + position.coords.latitude + "&nbsp&nbsp&nbsp&nbsp" + "Longitude: " + position.coords.longitude;
}

// Function that queries geoip-db.com for location information using JSON
function callback(data) {
	"use strict";
	state.innerHTML = data.state;
	city.innerHTML = data.city;
	postal.innerHTML = data.postal;
	latitude.innerHTML = data.latitude;
	longitude.innerHTML = data.longitude;
	ip.innerHTML = data.IPv4;
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://geoip-db.com/jsonp';
var h = document.getElementsByTagName('script')[0];
h.parentNode.insertBefore(script, h);
