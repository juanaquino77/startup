$(document).ready(function(){
	$('.js-search').fadeIn( 'slow');
	$('.js-albums').click(function(){
	  var url = 'https://api.spotify.com/v1/search?q=';
	  var artist = $('.inputSearch').val();
	  var urlNew = url + artist + '&type=album';
	  var jqxhr = $.get(urlNew)
	  .done(function(response){
	  	  for (var i = 1; i <= response.albums.items.length; i++) {
	  	  	$('.items').append('<h3>' + response.albums.items[i].type + '</h3>');
	  	  	$('.items').append( i + ') ' + response.albums.items[i].name);
	  	  	$('.items').append('<p>' + '<img src="'+ response.albums.items[i].images[1].url +'" width="64px" height="64px" />' + '</p>');
	  	  	$('.items').append('Link: ' + '<a href= "' + response.albums.items[i].external_urls.spotify + '" target="_blank" >'+ response.albums.items[i].name);
		  	$('.items h3').css('border-top', 'solid 1px gray');  	
	  	  };
      })
  		.fail(function(response) {
    	  alert('servidor no responde');
  		});
	});
});