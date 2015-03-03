$(document).ready(function(){
	$('.movieBtn').click(function(){
		$.getJSON('dato.json', function(data){
			var template = $('#movie_template').html();
			var html = Handlebars.compile(template);
			var listo = html(data);
			$('.item').html(listo);
		});
	})
})

/*	var source = $('#first_template').html();
	var template = Handlebars.compile(source);

	var terminator = {
		title: 'Titulo: Terminator',
		director: 'Director: James Cameron',
		duration: 'Duracion: 128 minutos',
		description: "<p> Descripcion: La mejor pelicula de los 80!!! </p>",
	}

	var titanic = {
		title: 'Titanic',
		director: 'Cameron',
		duration: '428 minutos',
		description: 'La mejor pelicula de barcos hundidos!!!',
	}

	var html_terminator = template(terminator);
	var html_titanic = template(titanic);

	$('.item').html( html_terminator);
	//$('article').html( html_titanic);

});

*/

/*Bootcamp = {};
Bootcamp.MovieView = Backbone.View.extend({
	tagName: 'li',
	className: 'item',
	render: function(){
		var movie = this.model;
		var title = movie.get('title');
		var director = movie.get('director');
		this.$el.html("<span>" + title + "</span> - <span>" + director + "</span>");
	}

});
window.Bootcamp = Bootcamp;*/

