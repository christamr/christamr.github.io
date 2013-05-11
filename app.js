var scrollSpeed = 500

$(document).ready(function(){
	$('.btn-1').on('click', function(evt){
		evt.preventDefault()
		var target = $( $(evt.currentTarget).attr('href') );

		var distance = target.offset().top;
		$('body').animate({scrollTop: distance}, scrollSpeed);
	});
});