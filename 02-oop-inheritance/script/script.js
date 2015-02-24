
//$(document).ready(function(){




var Movie = function(name){ 
	this.name = name;
	this.actores = [];
}
Movie.prototype.genero = "";

Movie.prototype.duracion = "0 minutos";

Movie.prototype.calidad = "";

Movie.prototype.hd = false;

/*Movie.prototype.actores = [];*/

Movie.prototype.set = function(atributo, valor){ 
	this[atributo] = valor;
}
Movie.prototype.get = function(valor){
	return this[valor];
}
Movie.prototype.setActores = function(valor){ 
	this.actores.push(valor);
}
Movie.prototype.getActores = function(){
	return this.actores.join(", ");
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
nueveReinas.setActores("Darin");
nueveReinas.setActores("Pauls");

var  elPianista= new Movie("El Pianista");
elPianista.set("genero", "Drama");
elPianista.set("duracion", "150 minutos");
elPianista.set("calidad", "HD");
elPianista.set("hd", true);
elPianista.setActores("Adrien Brody");
elPianista.setActores("Thomas Kretschmann");

/*------ Punto 3 ---------*/

var MovieObserver = function (){
		$.on( 'playing', function () {
			console.log ("Playin " + "" + "...");
	}),
		$.on( 'stopped', function () {
			console.log ("Stopped " + "" + "...");
	})
}



/*------ Punto 8 --------*/

var DownloadableMovie = function(name, boolean){
	this.name = name;
	this.isDownloable = boolean;
};

//DownloadableMovie.prototype = new Movie();

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