$(document).ready(function(){

});
	
	Movie = Backbone.Model.extend({
		defaults : {
			title : '',
			director : ''
		},
 		initialize : function(){
       		alert('Se ha creado una nueva pelicula')
    	},
	});	

	MovieList = Backbone.Collection.extend({
		model : Movie,
		 localStorage: new Backbone.LocalStorage('peliculas'),
		initialize : function(){
	       alert('Se ha creado una nueva coleccion de peliculas')
	    },
});

	MovieView = Backbone.View.extend({
	
	    render : function(){
			$.getJSON('peliculasJson.json', function(data){
				var template = $('#movie_template').html();
				var html = Handlebars.compile(template);
				var listo = html(data);
				$('.item').html(listo);
			});
	    }
	    
	});
	var movieView = new MovieView();
	var coleccion =  new MovieList();

	$('.movieBtn').click(function(){
		movieView.render();
	});

	$('.saveBtn').click(function(){
		$.getJSON('peliculasArray.json', function(data){
			for (var i = 0; i < data.length; i++) {
				coleccion.create(data[i]);
				console.log(data[i]);
			};
				coleccion.create(titanic);
		});
	});


	var titanic = new Movie({
		id : 5,
		title : "Titanic",
		director : "James Cameron",
		duration : "194 minutes",
		image : "titanic",
		year : "1997",
		description : "A seventeen-year-old aristocrat, expecting to be married to a rich claimant by her mother, falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
	});



