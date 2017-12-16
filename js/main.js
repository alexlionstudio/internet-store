$(document).ready(function() {
	
	// owlcorusel
	$('#slider-container').owlCarousel({
		items: 1,
		autoplay: 4000,
		nav: true,
		navText: ["",""],
		rewind: true,
	});
	// // кнопки появляются при наведение
    $('.owl-stage-outer').mouseenter(function(){
		$('.owl-next').addClass('owl-next-animate');
		$('.owl-prev').addClass('owl-prev-animate');
	});
	$('#slider-container').mouseleave(function(){
		$('.owl-next').removeClass('owl-next-animate');
		$('.owl-prev').removeClass('owl-prev-animate');
	});
	
});