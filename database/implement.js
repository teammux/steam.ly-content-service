const v8 = require('v8');
const db = require('./index');

var randomGame = function(name) {
  var randomDate = function() {
    var randomYear = Math.floor((Math.random() * 17) + 2000);
    var randomMonth = Math.floor((Math.random() * 11) + 1);
    var randomDay = Math.floor((Math.random() * 20) + 1);

    if (randomYear === 2017 && randomMonth > 10) {
      randomMonth -= 2;
    }
    if (randomMonth < 10) {
      randomMonth = '0' + randomMonth;
    }
    if (randomDay < 10) {
      randomDay = '0' + randomDay;
    }
    return randomYear + '-' + randomMonth + '-' + randomDay;
  };

  const publishers = ['Sony', 'Activision', 'Apple', 'EA', 'Nintendo'];

  const genres = ['action', 'action_adventure', 'adventure', 'role_playing', 'simulation', 'strategy', 'sports'];

  const prices = ['19.99', '29.99', '39.99', '49.99', '59.99'];

  var randomPublisher = publishers[Math.floor(Math.random() * publishers.length)];
  var randomReleaseDate = randomDate();
  var randomGenre = genres[Math.floor(Math.random() * genres.length)];
  var randomPrice = prices[Math.floor(Math.random() * prices.length)];
  var randomNumberOfOwners = Math.floor(Math.random() * 1000000);

  var randomGame = [name, randomPublisher, randomReleaseDate, randomGenre, randomPrice, randomNumberOfOwners];
  return randomGame;
};

var generateRandomGames_Chunks = function(chunkNumber) {
  var gamesArray = [];
  var currentGameName = null;
  var currentGame = null;
  var startIndex = (20000 * chunkNumber) + 1;
  var endIndex = startIndex + 20000;

  for (var i = startIndex; i < endIndex; i++) {
    currentGameName = 'game #' + i;
    currentGame = randomGame(currentGameName);
    gamesArray.push(currentGame);
  }
  return db.addGames(gamesArray);
};

var generateChunks = function(number) {
  console.log(v8.getHeapStatistics());
  var promises = [];
  for (var i = 1; i <= number; i++) {
    var promise = generateRandomGames_Chunks(i);
    promises.push(promise);
  }
  Promise.all(promises).then(() => {
    console.log('chunks added', number);
  });
};

generateChunks(150);

// var generateChunks = function(numberOfChunks) {
//   for (var k = 1; k <= numberOfChunks; k++) {
//     generateRandomGames(10000);
//   }
// };

// generateChunks(10);

// db.addGames(games, function(result) {
//   console.log(result.affectedRows + ' rows added');
// });
