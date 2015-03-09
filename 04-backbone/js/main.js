$(document).ready(function(){});

////////////////////  Model  //////////////////////////

	Movie = Backbone.Model.extend({
		defaults : {
			title : '',
			director : ''
		},
 		initialize : function(){
       		//alert('Se ha creado una nueva pelicula')
    	},
	});	

////////////////////  View  //////////////////////////

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
	DetailsView = Backbone.View.extend({
	
	    render : function(){
	    	$('.details').html(' ');
	    	$('.seleccion').html(' ');
	    	for (var i = 0; i < cantidad; i++) {
	    		if (coleccion.get(i+1)!=undefined){
		    		$('.details').append('<h3 class="titulo">' + (i+1) + ') ' +  coleccion.get(i+1).get('title') + '</h3>'+ "<p class='description'>" + coleccion.get(i+1).get('description') + '</p>');	    		
	    			$('.seleccion').append('<option>' + (i+1) + '</option>');
	    		};
	    	};	
	    }
	});

////////////////////  Collection  //////////////////////////
	
	MovieList = Backbone.Collection.extend({
		model : Movie,
		 localStorage: new Backbone.LocalStorage('peliculas'),
		initialize : function(){
	      // alert('Se ha creado una nueva coleccion de peliculas')
	    },
	});



////////////////////  Buttons  //////////////////////////

	$('.movieBtn').click(function(){
		movieView.render();
	});
	$('.detailsBtn').click(function(){
		detailsView.render();
		hayPeliculas = true;
	});

	$('.saveBtn').click(function(){
		$.getJSON('peliculasArray.json', function(data){
			for (var i = 0; i < data.length; i++) {
				coleccion.create(data[i]);
				console.log(data[i]);
				cantidad++;
			};
				coleccion.create(titanic);
				cantidad++;
		});
	});
	$('.destroyBtn').click(function(){
		$('.remove').fadeIn('slow');
	});
	$('.eliminar').click(function(){
		if(hayPeliculas){
			var id = $('.seleccion').val();
			coleccion.get(id).destroy();
			detailsView.render();
		}
	})
	$('.addBtn').click(function(){
		$('.add').fadeIn('slow');
	})
	$('.loadMovie').click(function(){
		var film = new Movie();
		film.set('id', coleccion.length + 1);
		film.set('title', $(".title").val());
		film.set('director', $(".director").val());
		film.set('duration', $(".duration").val());
		film.set('year', $(".year").val());
		film.set('description', $(".description").val());
		coleccion.create(film);
		cantidad++;
		detailsView.render();
	})




////////////////////  Intances  //////////////////////////

	var titanic = new Movie({
		id : 5,
		title : "Titanic",
		director : "James Cameron",
		duration : "194 minutes",
		image : "titanic",
		year : "1997",
		description : "A seventeen-year-old aristocrat, expecting to be married to a rich claimant by her mother, falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
	});

	var movieView = new MovieView();
	var detailsView = new DetailsView();
	var coleccion =  new MovieList();
	var hayPeliculas = false;
	var cantidad = 0;
