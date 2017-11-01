const PUBLISHERS = ['Electronic Arts', 'Square Enix', 'Nintendo',
  'Sony', 'XSEED Games', 'Capcom', 'Activision Blizzard',
  'Bandai Namco', 'Telltale Games', 'Ubisoft'];
const GENRES = ['action', 'fps', 'rpg'];
const MAX_PRICE = 65;
const MIN_PRICE = 10;
const MAX_OWNERS = 100000;
const MIN_OWNERS = 10000;
const MAX_RATING = 100;
const MIN_RATING = 50;

var getRandomItemFromArray = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var getRandomItemFromRange = function(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
};

var createRandomGameObject = function(name, releaseDate) {
  var publisher = getRandomItemFromArray(PUBLISHERS);
  var genre = getRandomItemFromArray(GENRES);
  var owners = getRandomItemFromRange(MIN_OWNERS, MAX_OWNERS);
  var rating = getRandomItemFromRange(MIN_RATING, MAX_RATING);
  var price = getRandomItemFromRange(MIN_PRICE, MAX_PRICE);
  var gameObj = {
    name: name,
    publisher: publisher,
    releaseDate: releaseDate,
    genre: genre,
    rating: rating,
    price: price,
    owners: owners
  };
  return gameObj;
};

var createRandomGameArray = function(name, releaseDate) {
  var gameObj = createRandomGameObject(name, releaseDate);
  var gameArr = [
    gameObj.name,
    gameObj.publisher,
    gameObj.releaseDate,
    gameObj.genre,
    gameObj.rating,
    gameObj.price,
    gameObj.owners
  ];
  return gameArr;
};

module.exports = {
  createRandomGameObject,
  createRandomGameArray
};
