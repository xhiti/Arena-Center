/* JS Document */

$(document).ready(function() {
	"use strict";

	var header = $('.header');
	var menu = $('.menu');
	var menuActive = false;
	var map;

	setHeader();

	$(window).on('resize', function() {
		setHeader();
	});

	$(document).on('scroll', function() {
		setHeader();
	});

	initMenu();
	initGoogleMap();

	function setHeader() {
		if($(window).scrollTop() > 91) {
			header.addClass('scrolled');
		}
		else {
			header.removeClass('scrolled');
		}
	}

	function initMenu() {
		if($('.hamburger').length && $('.menu').length) {
			var hamb = $('.hamburger');

			hamb.on('click', function() {
				if(!menuActive) {
					openMenu();
				}
				else {
					closeMenu();
				}
			});
		}
	}

	function openMenu() {
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu() {
		menu.removeClass('active');
		menuActive = false;
	}

	function initGoogleMap() {
		var myLatlng = new google.maps.LatLng(34.063685,-118.272936);
    	var mapOptions = {
    		center: myLatlng,
	       	zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			draggable: true,
			scrollwheel: false,
			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			styles: [{
			    "featureType": "road.highway",
			    "elementType": "geometry.fill",
			    "stylers": [{
			        "color": "#ffeba1"
			      }
			    ]
			  }
			]
    	}

    	// Initialize a map with options
    	map = new google.maps.Map(document.getElementById('map'), mapOptions);

		// Re-center map after window resize
		google.maps.event.addDomListener(window, 'resize', function() {
			setTimeout(function() {
				google.maps.event.trigger(map, "resize");
				map.setCenter(myLatlng);
			}, 1400);
		});
	}
});