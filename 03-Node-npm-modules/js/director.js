

var director = require('../node_modules/movie.js');// o require('movie.js');

var dire = new director();
console.log(dire.set('title', 'alien'));
console.log(dire.get().title);

