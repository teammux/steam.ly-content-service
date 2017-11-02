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

var incrementDate = function(date, daysToIncrement) {
  var result = new Date(date);
  result.setDate(result.getDate() + daysToIncrement);
  return result;
};

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

var generateRandomGames = function(numberOfGames, startIndex,
  startDate, daysToIncrement, gamesPerDay) {
  var endIndex = startIndex + numberOfGames - 1;
  var curIndex = startIndex;
  var gameName = null;
  var curDate = new Date(startDate);
  var curNumberOfGamesOnDay = 1;
  var gamesArray = [];

  while (curIndex <= endIndex) {
    gameName = 'game #' + curIndex;
    currentGame = createRandomGameArray(gameName, curDate);
    gamesArray.push(currentGame);
    if (curNumberOfGamesOnDay >= gamesPerDay) {
      curDate = incrementDate(curDate, daysToIncrement);
      curNumberOfGamesOnDay = 0;
    }
    curIndex++;
    curNumberOfGamesOnDay++;
  }
  return gamesArray;
};

module.exports = {
  createRandomGameObject,
  createRandomGameArray,
  generateRandomGames
};
