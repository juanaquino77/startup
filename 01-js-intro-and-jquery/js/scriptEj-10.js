$(document).ready(function(){
	$('.js-search').fadeIn('slow', function() {
		$('.alias').focus();
		$('.js-button').click(function() {
	 		var jqxhr = $.ajax( 'http://bootcamp.aws.af.cm/welcome/juan')
	 		.done(function(response) {
	 			$('.js-serverContent').append('<p>' + response.response + '</p>');
	 			$('.js-serverContent').toggle('highlight');
	 		})
	 		.fail(function() {
    			$('.js-search').css('background-color', 'red');
  			});
		});
	});
});
