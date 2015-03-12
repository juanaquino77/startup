
	var app = angular.module('movies', []);

	  app.controller('movieController', function(){

		this.movie = {coleccion:[
		  {
		    id: 1,
		    title: "Terminator",
		    director: "James Cameron",
		    duration: "107 minutes",
		    image: "terminator",
		    year: "1984",
		    actors: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn'],
			genres: ['Action', 'Sci-Fi'],
			links: ['link 1', 'link 2', 'link 3'],	
		    description: "A human-looking indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs."
		  },
		  {
		    id: 2,
		    title: "The Usual Suspects",
		    director: "Bryan Singer",
		    duration: "106 minutes",
		    image: "the_usual_suspects",
		    year: "1995",
		    actors: ['Kevin Spacey', 'Gabriel Byrne', 'Chazz Palminteri '],
			genres: ['Crime', 'Drama', 'Thriller'],
			links: ['link 1', 'link 2', 'link 3'],
		    description: "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which begin when five criminals meet at a seemingly random police lineup."
		  },
		  {
		    id: 3,
		    title: "Black Hawk Down",
		    director: "Ridley Scott",
		    duration: "144 minutes",
		    image: "black_hawk_down",
		    year: "2001",
		    actors: ['Josh Hartnett', 'Ewan McGregor', 'Tom Sizemore'],
			genres: ['Drama', 'History', 'Thriller'],
			links: ['link 1', 'link 2', 'link 3'],
		    description: "123 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis."
		  },
		  {
		    id: 4,
		    title: "Taxi Driver",
		    director: "Martin Scorsese",
		    duration: "113 minutes",
		    image: 'taxi_driver',
		    year: "1976",
		    actors: ['Robert De Niro', 'Jodie Foster', 'Cybill Shepherd'],
			genres: ['Crime', 'Drama'],
			links: ['link 1', 'link 2', 'link 3'],
		    description: "A mentally unstable Vietnam war veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process."
		  },
		  {
		  	id: 5,
			title: 'Titanic',
			director: 'James Cameron',
			duration: '194 minutos',
			image:'titanic' ,
			year: '1997',
			actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
			genres: ['Drama', 'Romance'],
			links: ['link 1', 'link 2', 'link 3'],
			description: 'A seventeen-year-old aristocrat, expecting to be married to a rich claimant by her mother, falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
		  }]}
	});
