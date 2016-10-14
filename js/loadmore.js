$('#viewMore').click(function() {

	$('#essay').slideDown();
	$('html,body').animate({
		scrollTop: $(this).offset().top
	}, 1000);
	$('#viewMore').toggle;

});