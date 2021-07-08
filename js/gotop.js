$(document).ready(function(){

	$('.gototop').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 600 ){
			$('.gototop').slideDown(300);
		} else {
			$('.gototop').slideUp(300);
		}
	});

});