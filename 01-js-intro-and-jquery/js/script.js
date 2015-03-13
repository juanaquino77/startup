$(document).ready(function() {
	$('.js-search').fadeIn( 'slow', function() {
		$('.alias').focus();
	});
	$('.js-albums').click(function() {
		var url = 'https://api.spotify.com/v1/search?q=';
	  	var artist = $('.inputSearch').val();
	  	var urlNew = url + artist + '&type=album';
	  	var jqxhr = $.get(urlNew)
	  	.done(function(response) {
	  		var total = response.albums.items.length;
	  	  	for (var i = 0; i < total; i++) {
	  	  		var item = {};
	  	  		item = response.albums.items[i];
	  	  		$('.items').append('<h3>' + item.type + '</h3>');
	  	  		$('.items').append( (i+1) + ') ' + item.name);
	  	  		$('.items').append('<p>' + '<img src="'+ item.images[1].url +'" width="64px" height="64px" />' + '</p>');
	  	  		$('.items').append('Link: ' + '<a href= "' + item.external_urls.spotify + '" target="_blank" >'+ item.name);
		  		$('.items').addClass('borderTop');
	  	  	};
      	})
  		.fail(function(response) {
    	  	alert('servidor no responde');
  		});
	});
});