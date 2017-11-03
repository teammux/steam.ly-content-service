const db = require('./index');
const games = require('./games');

var generateGamesForDatabase = function(numberOfGames, startIndex, startDate, daysToIncrement, gamesPerDay) {
  var arraySize = 20000;
  var numberOfIterations = 0;
  var promises = [];

  while (numberOfIterations < numberOfGames) {
    if ((numberOfGames - numberOfIterations) < arraySize) {
      arraySize = numberOfGames;
    }
    var gamesArray = games.generateRandomGames(arraySize, startIndex, startDate, daysToIncrement, gamesPerDay);
    var curPromise = db.addGames(gamesArray);
    promises.push(curPromise);
    numberOfIterations += arraySize;
  }
  Promise.all(promises).then(() => {
    console.log('games added', numberOfGames);
  });
};

generateGamesForDatabase(2000000, 1, '2016-12-31', -7, 1000);
