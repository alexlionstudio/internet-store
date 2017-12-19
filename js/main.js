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


   	// jQuery - Калькулятор

   	// price-total - корзина
   	// price-amount - ценик
   	// product-add - добавить продукт кнопка
   	var PriceGet = $('#price-amount');


   	function calculatePrice(){
		var PriceGet = $('input[name=engine]:checked').val();
		PriceGet = parseInt(PriceGet);
		
		totalPrice = PriceGet;
		// alert(modelPrice);
		showPrice.text( ' $ ' +  addSpace(totalPrice));
	};
	calculatePrice();












	// var modelSpecs,
	// 	modelPrice,
	// 	modelSpecsHolder,
	// 	modelPriceHolder,
	// 	modelPriceUSDHolder;

	// modelSpecsHolder = $('#modelSpecs');
	// modelPriceHolder = $('#modelPrice');
	// modelPriceUSDHolder = $('#modelPriceUSD');
	
	// modelPrice = 0;
	// modelSpecs = '';

	// // При старте страницы
	// calculatePrice();
	// compileSpecs();


	// // После переключения радио кнопок
	// $('#autoForm input').on('change', function(){
	// 	calculatePrice();
	// 	compileSpecs();
	// 	calculateUSD();
	// });



	// // ВЫБОР ЦВЕТА - на цену не влияет
	// $('#colorsSelector .colorItem').on('click', function(){
	// 	var imgPath = $(this).attr('data-img-path');
	// 	$('#imgHolder img').attr('src', imgPath);
	// });


	// function calculatePrice(){
	// 	var modelPriceEngine = $('input[name=engine]:checked', '#autoForm').val();
	// 	var modelPriceTransmission = $('input[name=transmission]:checked', '#autoForm').val();
	// 	var modelPricePackage = $('input[name=package]:checked', '#autoForm').val();
		
	// 	modelPriceEngine = parseInt(modelPriceEngine);
	// 	modelPriceTransmission = parseInt(modelPriceTransmission);
	// 	modelPricePackage = parseInt(modelPricePackage);
		
	// 	modelPrice = modelPriceEngine + modelPriceTransmission + modelPricePackage;
	// 	// alert(modelPrice);
	// 	modelPriceHolder.text( addSpace(modelPrice) + ' рублей');
	// };

	// function compileSpecs(){
	// 	modelSpecs = $('input[name=engine]:checked + label', '#autoForm').text();
	// 	modelSpecs = modelSpecs + ', ' + $('input[name=transmission]:checked + label', '#autoForm').text();
	// 	modelSpecs = modelSpecs + ', ' + $('input[name=package]:checked + label', '#autoForm').text() + '.';
	// 	// alert(modelSpecs);
	// 	modelSpecsHolder.text( modelSpecs );
	// };

	// function addSpace(nStr) {
	//     nStr += '';
	//     x = nStr.split('.');
	//     x1 = x[0];
	//     x2 = x.length > 1 ? '.' + x[1] : '';
	//     var rgx = /(\d+)(\d{3})/;
	//     while (rgx.test(x1)) {
	//         x1 = x1.replace(rgx, '$1' + ' ' + '$2');
	//     }
	//     return x1 + x2;
	// }

	// // Получаем курс валют
	// var currencyUrl = 'https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+"USDRUB,EURRUB"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
	// var rurUsdRate = 0;

	// $.ajax({
	// 	url: currencyUrl,
	// 	cache: false,
	// 	success: function(html){
	// 		console.log( html.query.results.rate[0].Rate );
	// 		rurUsdRate = html.query.results.rate[0].Rate;
	// 		calculateUSD();
	// 	} 
	// });

	// function calculateUSD(){
	// 	var modelPriceUSD = modelPrice / rurUsdRate;
	// 	// alert(modelPriceUSD);
	// 	modelPriceUSDHolder.text( '$ ' + addSpace( modelPriceUSD.toFixed(0) ) );
	// }

});