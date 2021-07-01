/* JS Document */

$(document).ready(function()
{
	"use strict";

	/*Initialization of Variables*/
	var header = $('.header');
	var menu = $('.menu');
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function() {
		setHeader();
	});

	$(document).on('scroll', function() {
		setHeader();
	});

	initMenu();
	initMagic();
	initMilestones();
	initLightbox();


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

	function initMagic() {
		if($('.magic_up').length) {
			var magicUp = $('.magic_up');
	    	magicUp.each(function() {
	    		var ele = this;
	    		var smScene = new ScrollMagic.Scene({
		    		triggerElement:ele,
		    		triggerHook:'onEnter',
		    		offset:-200,
		    		reverse:false
		    	})
		    	.setTween(TweenMax.from(ele, 1, {y:200, autoAlpha:0, ease: Circ.easeOut, delay:0.3}))
		    	.addTo(ctrl);	
	    	});
		}
	}
});