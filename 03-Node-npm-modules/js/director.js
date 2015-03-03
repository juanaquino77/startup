

var director = require('../node_modules/movie.js');// o require('movie');

var dire = new director();
console.log(dire.set('title', 'alien'));
console.log(dire.get().title);

Director = function (){
	
	var model = {
		attributes : {
			name : '',
			quotes : []
		}
	};
	
	model.speak = function(){
		return 
				//this.atributes.quotes.join(', ');
	};

	return model;

};

