const randomQs = [
	'Palpatine',
	'He was too young',
	'Over 1,500',
	'Boba Fett',
	'Nubian 317',
	'The Whip',
	'Tarnab',
	'Yoda',
	'Mace Windu',
	'Kit Fisto',
	'Saesee Tiin',
	'Qin-Gon-Jinn',
	'Geonosis',
	'Jung Ma',
	'Darth Vader',
	'Ataru',
	'Darth Tyranus',
	'Woddy Allen',
	'Odd Ball',
	'Soresu',
	'Count Dooku',
	'A Senator',
	'Jar Jar Binks',
	'Bail Organa',
	'Nunte Gunray',
	'Bariss Offee',
	'Blasters',
	'Admiral Piett',
	'Bib Fortuna',
	'Jane Busby',
	'Tattoine',
	'Lando Carlissian',
	'Moff Jerjerrod',
	'Chief Chirpa',
	'Ewoks',
	'Wookies',
	'Zanolf',
	'Rodians',
	'Star Trek'
];

const randomizer = () => {
	let answers = randomQs[Math.floor(Math.random() * randomQs.length)];
	console.log(answers);
	return answers;
};

module.exports = randomizer;
