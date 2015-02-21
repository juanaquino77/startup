var Movie = function(name){ 
	this.name = name;
}
Movie.prototype.genero = "";

Movie.prototype.duracion = "0 minutos";

Movie.prototype.calidad = "";

Movie.prototype.hd = false;

Movie.prototype.actores = [];

Movie.prototype.set = function(atributo, valor){ 
	this[atributo] = valor;
}
Movie.prototype.get = function(valor){
	return this[valor];
}

Movie.prototype.play = function(){
	console.log ("Playing " + this.name + "...");
}

Movie.prototype.stop = function(){
	console.log (this.name + " Stopped... ");
}
