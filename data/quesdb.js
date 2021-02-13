const questions = [
	{
		id: 1,
		difficulty: "easy",
		question: "The Force will be with you. Always.",
		img: "null",
		answer: "Obi-Wan Kenobi"
	},
	{
		id: 2,
		difficulty: "moderate",
		question: "I find your lack of faith disturbing.",
		img: "null",
		answer: "Darth Vader"
	},
	{
		id: 3,
		difficulty: "easy" ,
		question: "It’s the ship that made the Kessel run in less than twelve parsecs. I’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I’m talking about the big Corellian ships, now. She’s fast enough for you, old man.",
		img: "null",
		answer: "Han Solo"
	},
	{
		id: 4,
		difficulty: "easy" ,
		question: "Never tell me the odds!",
		img: "null",
		answer: "Han Solo"
	},
	{
		id: 5,
		difficulty: "easy" ,
		question: "Do. Or do not. There is no try.",
		img: "null",
		answer: "Yoda"
	},
	{
		id: 6,
		difficulty: "easy" ,
		question: "No. I am your father.",
		img: "null",
		answer: "Darth Vader"
	},
	{
		id: 7,
		difficulty: "moderate" ,
		question: "When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.",
		img: "null",
		answer: "Yoda"
	},
	{
		id: 8,
		difficulty: "moderate" ,
		question: "I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.",
		img: "null",
		answer: "Luke Skywalker"
	},
	{
		id: 9,
		difficulty: "moderate" ,
		question: "Now, young Skywalker, you will die.",
		img: "null",
		answer: "Emperor Palpatine"
	},
	{
		id: 10,
		difficulty: "moderate" ,
		question: "The Millennium Falcon looks like a worn out junker but it did the Kessel Run in...? ",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030852/StarWarsMovies/falcon_rrqrx3.png",
		answer: "12 Parsecs"
	},
	{
		id: 11,
		difficulty: "moderate" ,
		question: "This Queen is known for her politial idealism and advocating for democracy. She is also Luke SkyWalker and Princess Leia's biological mother. What is her name?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030851/StarWarsMovies/padme-amigdalia_ow25uw.png",
		answer: "Queen Padme Amidala Naberrie of Naboo"
	},
	{
		id: 12,
		difficulty: "easy" ,
		question: "This actor played an older Princess Leia, she went by what name in the movie series?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030851/StarWarsMovies/carrie-fisher_sntjma.png",
		answer: "Princess Leia"
	},
	{
		id: 13,
		difficulty: "easy" ,
		question: "In this scene, what does Darth Vader say to Luke?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030061/StarWarsMovies/Vader-and-Luke_nodutj.png",
		answer: "I am your father, Luke."
	},
	{
		id: 14,
		difficulty: "easy" ,
		question: "Who is carrying Yoda?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030061/StarWarsMovies/Luke-and-Yoda_fxuz0s.png",
		answer: "Luke SkyWalker"
	},
	{
		id: 15,
		difficulty: "moderate" ,
		question: "Standing or Rolling, between Rey and Finn is a Droid. What is his name?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030060/StarWarsMovies/Rey-and-Finn_cyjrkd.png",
		answer: "BB-8"
	},
	{
		id: 16,
		difficulty: "moderate" ,
		question: "Obi Wan Kenobi, gave his life to save who?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030060/StarWarsMovies/Obi-Wan_dceycf.png",
		answer: "Luke, Leia, Han and Chewie"
	},
	{
		id: "17",
		difficulty: "moderate" ,
		question: "Where was this scene filmed?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030060/StarWarsMovies/Rey-and-Luke_r7ivao.png",
		answer: "Skellig Michael, Ireland"
	},
	{
		id: 18,
		difficulty: "" ,
		question: "In what movie does Leia kill Jabba the Hut?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030058/StarWarsMovies/Leia-Kills-Jabba_iwttby.png",
		answer: "Return of the Jedi"
	},
	{
		id: 19,
		difficulty: "easy" ,
		question: "Harrison Ford played this character during the Star Wars saga, what character did he play?",
		img: "https://res.cloudinary.com/di5thiyyl/image/upload/v1613030051/StarWarsMovies/han-solo_vdudcb.png",
		answer: "Han Solo"
	},
	{
		id: 20,
		difficulty: "moderate" ,
		question: "How many legs do destroyer droids have?",
		img: "null",
		answer: "Three"
	},
	{
		id: "21",
		difficulty: "hard" ,
		question: "How many planets did Senator Palpatine represent in the Senate?",
		img: "mull",
		answer: "Thirty-six"
	},
	{
		id: 22,
		difficulty: "hard" ,
		question: "Against whom was Darth Maul's final challenge before becoming a Dark Lord of the Sith?",
		img: "null",
		answer: "Darth Sidious"
	},
	{
		id: 23,
		difficulty: "hard" ,
		question: "Who was the oldest member of the Jedi Council at the time of the battle of Naboo?",
		img: "null",
		answer: "Yoda"
	},
	{
		id: 24,
		difficulty: "hard" ,
		question: "What work did Shimi Skywalker do at home to earn extra income?",
		img: "null",
		answer: "She cleaned computer memory devices"
	},
	{
		id: 25,
		difficulty: "hard" ,
		question: "How many lightsabers did Anakin use to kill Count Dooku?",
		img: "null",
		answer: "Two"
	},
	{
		id: 26,
		difficulty: "hard" ,
		question: "Who was Rogue Seven?",
		img: "null",
		answer: "Kasan Moor"
	},
	{
		id: 27,
		difficulty: "hard" ,
		question: "Which bounty hunter was obsessed with catching and skinning Chewbacca?",
		img: "null",
		answer: "Dengar"
	},
	{
		id: 28,
		difficulty: "hard" ,
		question: "What was Yoda's species?",
		img: "null",
		answer: "Unknown"
	},
	{
		id: 29,
		difficulty: "hard" ,
		question: "What did Anakin tell Chancellor Palpatine about the Jedi Council?",
		img: "null",
		answer: "That he knew there were things about the force they weren't telling him."
	},
	{
		id: 30,
		difficulty: "hard" ,
		question: "Who was Darth Sidious's apprentice?",
		img: "null",
		answer: "Darth Vader"
	}
];

module.exports = questions;
