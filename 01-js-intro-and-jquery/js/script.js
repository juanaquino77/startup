$(document).ready(function(){
	$('.js-content').fadeIn( 'slow', function(){
	  $('.js-fadeIn').css('visibility', 'visible');
	});
	$('.js-button').click(function(){
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
	});
});