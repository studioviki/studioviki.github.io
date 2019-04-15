$(function() {

	// $(window).on('load', function(){
	// 	$('.preloader').delay(200).fadeOut('slow');
	// });

	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		}, 100);
	});

	$('.carousel-services').owlCarousel({
		items: 1,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
		}
	});

	// vyravnivanie elementov karuseli
    // $('.carousel-services-content').equalHeights();

	function carouselService() {
		$('.carousel-services').each(function() {
			var ths  = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService(); 

	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
		});

	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('select').selectize();
	
	// $('.reviews').owlCarousel({
	// 	loop: true,
	// 	items: 1,
	// 	smartSpeed: 700,
	// 	nav: true,
	// 	navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
	// });

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn(); // почистить кеш
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$(window).scroll(function() {

		if ( $(this).scrollTop() > $(this).height() ) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}

	});

	$('.top').click(function(){

		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');

	});



});

