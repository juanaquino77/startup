$(document).ready(function(){
	$('.js-content').fadeIn( 'slow', function(){
	  $('.js-fadeIn').css('visibility', 'visible');
	});
	$('.js-button').click(function(){
	  var jqxhr = $.ajax( 'http://bootcamp.aws.af.cm/welcome/yourname.html').done(function(response)
	  {
    	$('.js-fadeIn').append('<p>' + response.response + '</p>');
    	});
		/*var jqxhr = $.get('http://bootcamp.aws.af.cm/welcome/yourname.html', function(response){
			$('.js-fadeIn').append('<p>' + response.response + '</p>');
		});*/
	});
});