/* JS Document */

$(document).ready(function() {
	"use strict";

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

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i) {
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before')) {
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after')) {
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function() {
		    		var counter = {value:eleValue};
		    		var counterTween = TweenMax.to(counter, 4, {
		    			value: endValue,
		    			roundProps:"value", 
						ease: Circ.easeOut, 
						onUpdate:function() {
							document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
						}
		    		});
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	function initLightbox() {
		if($('.yt_video').length) {
			$('.yt_video').colorbox({
				iframe:true,
				maxWidth:'95%',
				maxHeight:'95%',
				innerWidth:640,
				innerHeight:390
			});
		}
	}
});