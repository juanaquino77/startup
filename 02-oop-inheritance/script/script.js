
var Movie = function(){
	this.attributes = {
		title : '',
		director : '',
		genre : '',
	} 
}

Movie.prototype.set = function(attr, valor){ 
	this.attributes[attr] = valor;
}
Movie.prototype.get = function(valor){
	return this.attributes[valor];
}
Movie.prototype.play = function(){
	$.trigger( 'playing' );
}
Movie.prototype.stop = function(){
	$.trigger( 'stopped' );
}


/* ------ Punto 2 ------*/


var nueveReinas = new Movie("9 Reinas");
nueveReinas.set("genero", "Accion");
nueveReinas.set("duracion", "120 minutos");
nueveReinas.set("calidad", "HD");
nueveReinas.set("hd", true);

var  elPianista= new Movie("El Pianista");
elPianista.set("genero", "Drama");
elPianista.set("duracion", "150 minutos");
elPianista.set("calidad", "HD");
elPianista.set("hd", true);

/*------ Punto 3 ---------*/

var MovieObserver = function (){
		$(document).on( 'playing', function () {
			console.log ("Playin " + "" + "...");
	}),
		$(document).on( 'stopped', function () {
			console.log ("Stopped " + "" + "...");
	})
}

/*------ Punto 7 --------*/

var Movie = function () {

  var model = {
    attributes : {
        name : '',
        duracion : '',
        genero : '',
        actores : []
        }
    };

    model.set = function (attr , value) {
        model.attributes[attr] = value;
    }

    model.get  = function () {
        return model.attributes;
    }

    model.play = function (){
        console.log ('Playing '+ this.attributes['name'] +'...');
    }

    model.stop= function(){
        console.log ('Stopped '+ this.attributes['name'] +'...');
    }

    return model;
};



/*------ Punto 8 --------*/

var DownloadableMovie = function(name, boolean){
	this.name = name;
	this.isDownloable = boolean;
};


DownloadableMovie.prototype = Object.create (Movie.prototype);

DownloadableMovie.prototype.download = function(){
	console.log('me estoy bajando...');
}

/*------ Puntos 9 y 10 ---------*/

var social = {
	share: function(friendName){
		console.log(' Sharing ' + this.name + ' with ' + friendName)
	},
	like: function(){

	}
};
$.extend(Movie.prototype, social);

/*------- puntos 11 ------*/

var Actor = function(name, lastName, dni){
	this.name = name;
	this.lastName = lastName;
	this.dani = dni;
}

var arana = new Actor('Facundo', 'Arana', 28300300);
var darin = new Actor('Ricardo', 'Darin', 29852456);
var pauls = new Actor('Ricardo', 'Darin', 19000888);

/*------- puntos 12 ------*/

var peli = new Movie();
peli.set("actors",[]);