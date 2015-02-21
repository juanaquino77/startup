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
	console.log ("Playing " + this.name + "...");
}
Movie.prototype.stop = function(){
	console.log (this.name + " Stopped... ");
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




