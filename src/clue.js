// ITERATION 1
let mrGreen = {
	firstName: 'Jacob',
	lastName: 'Green',
	occupation: 'Entrepreneur',
	age: 45,
	description: ' He has a lot of connections',
	image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
	color: 'green',
};
const drOrchid = {
	firstName: 'Doctor',
	lastName: 'Orchid',
	occupation: 'Scientist',
	age: 26,
	description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
	image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
	color: 'white',
};
const profPlum = {
	firstName: 'Victor',
	lastName: 'Plum',
	occupation: 'Designer',
	age: 22,
	description: 'Billionaire video game designer',
	image:
		'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg ',
	color: 'purple',
};
const missScarlet = {
	firstName: 'Kasandra',
	lastName: 'Scarlet',
	occupation: 'Actor',
	age: 31,
	description: 'She is an A-list movie star with a dark past',
	image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
	color: 'red',
};
const mrsPeacock = {
	firstName: 'Eleanor',
	lastName: 'Peacock',
	occupation: 'Socialité',
	age: 36,
	description: 'She is from a wealthy family and uses her status and money to earn popularity',
	image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
	color: 'blue',
};
const mrMustard = {
	firstName: 'Jack',
	lastName: 'Mustard',
	occupation: 'Retired Football player',
	age: 62,
	description: 'He is a former football player who tries to get by on his former glory',
	image:
		'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
	color: 'yellow',
};

const rope = { name: 'rope', weight: 10 };
const knife = { name: 'rope', weight: 8 };
const candlestick = { name: 'candlestick', weight: 2 };
const dumbell = { name: 'dumbell', weight: 30 };
const poison = { name: 'poison', weight: 2 };
const axe = { name: 'axe', weight: 15 };
const bat = { name: 'bat', weight: 13 };
const trophy = { name: 'trophy', weight: 25 };
const pistol = { name: 'pistol', weight: 20 };

const diningRoom = { name: 'Dinning Room' };
const conservator = { name: 'Conservator' };
const kitchen = { name: 'Kitchen' };
const study = { name: 'Dinning Room' };
const library = { name: 'Dinning Room' };
const billiardRoom = { name: 'Dinning Room' };
const lounge = { name: 'Dinning Room' };
const ballroom = { name: 'Dinning Room' };
const spa = { name: 'Dinning Room' };
const livingRoom = { name: 'Dinning Room' };
const observatory = { name: 'Dinning Room' };
const theater = { name: 'Dinning Room' };
const guestHouse = { name: 'Dinning Room' };
const patio = { name: 'Dinning Room' };
const hall = { name: 'hall' };

// Suspects Collection
const suspectsArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [
	diningRoom,
	conservator,
	kitchen,
	study,
	library,
	billiardRoom,
	lounge,
	ballroom,
	spa,
	livingRoom,
	observatory,
	theater,
	guestHouse,
	patio,
	hall,
];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, dumbell, poison, axe, bat, trophy, pistol];

// ITERATION 2
function selectRandom(card_type) {
	return card_type[Math.floor(Math.random() * card_type.length)];
}

function pickMystery() {
	return {
		suspect: selectRandom(suspectsArray),
		weapon: selectRandom(weaponsArray),
		room: selectRandom(roomsArray),
	};
}
console.log(pickMystery());
// ITERATION 3

function revealMystery(envelope) {
	return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}

console.log(revealMystery(pickMystery()));
