// pageloader - иконка перед загрузкой страницы
// Обязательно пишем отдельно о Jquery блоков, иначе при обновление не сработает
window.onload = function() {
	$(".loader-icon").delay(300).fadeOut("slow");
	$("#pageloader").delay(1200).fadeOut("slow");
};

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
	// owlcorusel Вторая карусель в отзывах
	$('#slider-rewiews').owlCarousel({
		animateOut: 'zoomOutLeft',
		animateIn: 'zoomInRight',
		items: 1,
		autoplay: 4000,
		nav: true,
		navText: ["",""],
		rewind: true,
	});	
	// // кнопки появляются при наведение
    $('#slider-rewiews').mouseenter(function(){
		$('.owl-next').addClass('owl-next-animate');
		$('.owl-prev').addClass('owl-prev-animate');
	});
	$('#slider-rewiews').mouseleave(function(){
		$('.owl-next').removeClass('owl-next-animate');
		$('.owl-prev').removeClass('owl-prev-animate');
	});
	

	//  mixitup
	var mixer = mixitup('#product-catalog');

	// fancybox
    $(".fancybox").fancybox({
			// Default - with fix from scroll to top
			protect: true,
			infobar : true,
			toolbar : true,
			buttons : [
		        // 'slideShow',
		        // 'fullScreen',
		        // 'thumbs',
		        //'download',
		        //'zoom',
		        'close'
		    ],
    });


});