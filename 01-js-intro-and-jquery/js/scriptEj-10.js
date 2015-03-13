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



/*	$('.js-button').click(function(){
	  var jqxhr = $.ajax( 'http://bootcamp.aws.af.cm/welcome/yourname.html').done(function(response)
	  {
	  	response.response='Welcome Juan Aquino!';
    	$('.js-fadeIn').append('<p>' + response.response + '</p>');
    	$('.js-highlight').click(function() {
  			$('.js-fadeIn').toggle('highlight');
			});
    	})
  		.fail(function() {
    		$('.js-fadeIn').css('background-color', 'red');
  		});
	});*/