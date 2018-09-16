$(document).ready(function(){
	var pull=$("#pull"),
		nav = $("#nav_mobile-list");
		nav__icon = $(".nav_mobile-head__icon");
		navIconOpen =$('.nav_mobile-head__icon--rotate');

	nav.on('click', function(e) {
		e.preventDefault();
		var w = $(window).width();
		if(w < 768){
			nav.removeClass(navIconOpen);
			$(nav).slideToggle();
			toggleIcon();
		}
	});

	function toggleIcon(){
		// Добавил анимацию к иконке, путем добавления стилизованного класса к ней.
		if (nav__icon.hasClass('nav_mobile-head__icon--rotate')) {
        	nav__icon.removeClass('nav_mobile-head__icon--rotate');
	    	} else {
        	nav__icon.addClass('nav_mobile-head__icon--rotate');
    	}
	}


	$(pull).on('click', function(e){
		
		e.preventDefault();

		$(nav).slideToggle();

		toggleIcon();

	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && nav.is(':hidden')){
			nav.removeAttr('style');
		}
	});

});