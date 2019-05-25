$('.header').affix({
    offset: {
        top: 100,
        bottom: function() {
            return (this.bottom = $('.footer').outerHeight(true))
        }
    }
})


	$(window).load(function() {
	    $("#preloader").on(500).fadeOut();
	    $(".preloader").on(600).fadeOut("slow");
	});