/* 
  CIS166AA: Chapter 10 Case Project Website
  Author: Robert Dobson
  Date: 11/11/2018
*/

// JavaScript Document

// This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
var latit = document.getElementById("latit");
var longi = document.getElementById("longi");
var altit = document.getElementById("altit");

// Initializes map center position and zoom level
function initMap() {
	"use strict";
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 33.4373,
			lng: -112.0078
		},
		zoom: 10
	});
	infoWindow = new google.maps.InfoWindow;

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
				alt: position.coords.altitude
			};
			// Assign position elements to variables
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			var altitude = position.coords.altitude;

			// Display the position elements below the map
			latit.innerHTML = latitude;
			longi.innerHTML = longitude;
			altit.innerHTML = "" + altitude;

			infoWindow.setPosition(pos);
			infoWindow.setContent('Gotcha!');
			infoWindow.open(map);
			map.setCenter(pos);
		}, function () {
			handleLocationError(true, infoWindow, map.getCenter());
		}, {maximumAge:600000, timeout:5000, enableHighAccuracy: true});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	"use strict";
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}
