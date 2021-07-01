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
	initHomeSlider();
	initBigRoomSlider();
	initGallerySlider();
	initLightbox();
	initMagic();

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

	function initHomeSlider() {
		if($('.home_slider').length) {
			var homeSlider = $('.home_slider');
			
			homeSlider.owlCarousel(
			{
				items:1,
				animateOut: 'slideOutDown',
   				animateIn: 'fadeIn',
				autoplay:true,
				loop:true,
				mouseDrag:false,
				smartSpeed:1200,
				dotsContainer:'main_slider_custom_dots'
			});

			if($('.home_slider_custom_dot').length) {
				$('.home_slider_custom_dot').on('click', function() {
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			homeSlider.on('changed.owl.carousel', function(event) {
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});
		}
	}

	function initBigRoomSlider() {
		if($('.big_room_slider').length) {
			var bigRoomSlider = $('.big_room_slider');

			bigRoomSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			if($('.big_room_slider_prev').length) {
				var prev = $('.big_room_slider_prev');
				prev.on('click', function() {
					bigRoomSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.big_room_slider_next').length) {
				var next = $('.big_room_slider_next');
				next.on('click', function() {
					bigRoomSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	function initGallerySlider() {
		if($('.gallery_slider').length) {
			var gallerySlider = $('.gallery_slider');

			gallerySlider.owlCarousel({
				items: 5,
				loop:true,
				autoplay:false,
				nav:false,
				dots:false,
				margin:24,
				smartSpeed:1800,
				responsive: {
					0:{items:3},
					768:{items:4},
					1199:{items:5}
				}
			});

			if($('.gallery_slider_prev').length) {
				var prev = $('.gallery_slider_prev');
				prev.on('click', function() {
					gallerySlider.trigger('prev.owl.carousel');
				});
			}

			if($('.gallery_slider_next').length) {
				var next = $('.gallery_slider_next');
				next.on('click', function() {
					gallerySlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	function initLightbox() {
		if($('.gallery_item').length) {
			$('.colorbox').colorbox({
				rel:'colorbox',
				photo: true,
				maxWidth:'95%',
				maxHeight:'95%',
			});
		}
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