$(document).ready(function() {

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	// Создаем переменые для кнопки и для меню добовляем ID
	var pull = $('#navigation-toggle');
	var menu = $('#navigation-menu');
	// Классы с которыми работаем
	var addClassMenu = 'navigation-menu--mobile-menu';

	// Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

	    // Отменяем стандартное поведение ссылки в браузере
	    e.preventDefault();

	    // Открываем/Скрываем меню
	    menu.slideToggle();

	    // Добавляем модификатор --active
	    $(this).toggleClass(addClassMenu);
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if (pull.hasClass(addClassMenu)  ) {
   			pull.toggleClass(addClassMenu);
			menu.slideToggle();
	    }
	};


	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	        pull.removeClass(addClassMenu);
	    } else {

	    }
	});

	// Скрываем меню при клике на него на смартфоне и в планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('.navigation-menu a').on("click", function(){
		fnstart();
	});
	// То же самое происходит когда человек сразу хочет вернуться на домашнию страницу
	$('#top-logo a').on("click", function(){
		fnstart();
	});
	// То же самое происходит когда человек нажимает на другие кнопки в меню
	$('#top a').on("click", function(){
		fnstart();
	});


	// ---------------------------------------------------------------------------------------
	//         Фиксируем меню при прокрутке страницы
	// ---------------------------------------------------------------------------------------
	//  используем дополнительные классы и делаем меню в постоянном положение absolute
	//  затем применяем JS в  создании фиксированного красивой анимайии фиксированного меню.
	// ---------------------------------------------------------------------------------------

	var elemIdTop = $('#top');
	jQuery(function() {
	        $(window).scroll(function(){
	            if($(this).scrollTop()>140){
	            	if($('.header__bottombar').hasClass('header__bar--hide')){	           		
			            $('.header__bottombar').removeClass('header__bar--hide'); 
	            	};
	            	$('.header__bar').addClass('header__bar--show');
	            }
	            else if ($(this).scrollTop()<140){
	            	if($('.header__bar').hasClass('header__bar--show')){
		                $('.header__bar').removeClass('header__bar--show');
		                $('.header__bottombar').addClass('header__bar--hide');
		            };
	            };
	        });
	});
});