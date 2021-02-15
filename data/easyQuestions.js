const questions = [
	{
		id: 1,
		difficulty: 'easy',
		question: 'Who said this: The Force will be with you. Always.',
		img: 'null',
		answer: 'Obi-Wan Kenobi',
		value: 25
	},
	{
		id: 3,
		difficulty: 'easy',
		question:
			'Who said this: It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.',
		img: 'null',
		answer: 'Han Solo',
		value: 25
	},
	{
		id: 4,
		difficulty: 'easy',
		question: 'Who said this: Never tell me the odds!',
		img: 'null',
		answer: 'Han Solo',
		value: 25
	},
	{
		id: 5,
		difficulty: 'easy',
		question: 'Who said this: Do. Or do not. There is no try.',
		img: 'null',
		answer: 'Yoda',
		value: 25
	},
	{
		id: 6,
		difficulty: 'easy',
		question: 'Who said this: No. I am your father.',
		img: 'null',
		answer: 'Darth Vader',
		value: 25
	},
	{
		id: 12,
		difficulty: 'easy',
		question:
			'This actor played an older Princess Leia, she went by what name in the movie series?',
		img:
			'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030851/StarWarsMovies/carrie-fisher_sntjma.png',
		answer: 'Princess Leia',
		value: 25
	},
	{
		id: 13,
		difficulty: 'easy',
		question: 'In this scene, what does Darth Vader say to Luke?',
		img:
			'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030061/StarWarsMovies/Vader-and-Luke_nodutj.png',
		answer: 'I am your father, Luke.',
		value: 25
	},
	{
		id: 14,
		difficulty: 'easy',
		question: 'Who is carrying Yoda?',
		img:
			'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030061/StarWarsMovies/Luke-and-Yoda_fxuz0s.png',
		answer: 'Luke SkyWalker',
		value: 25
	},
	{
		id: 19,
		difficulty: 'easy',
		question:
			'Harrison Ford played this character during the Star Wars saga, what character did he play?',
		img:
			'https://res.cloudinary.com/di5thiyyl/image/upload/v1613030051/StarWarsMovies/han-solo_vdudcb.png',
		answer: 'Han Solo',
		value: 25
	}
];

const randomizer = () => {
	let object = questions[Math.floor(Math.random() * questions.length)];
	return object;
};

module.exports = randomizer();
