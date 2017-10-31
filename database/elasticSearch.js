var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200'
});

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

  var randomGame = {
    'name': name,
    'publisher': randomPublisher,
    'release_date': randomReleaseDate,
    'genre': randomGenre,
    'price': randomPrice,
    'number_of_owners': randomNumberOfOwners
  };
  return randomGame;
};

var generateRandomGames = function() {
  var bodyArray = [];
  var currentGameName = null;

  // var startIndex = (20000 * chunkNumber) + 1;
  // var endIndex = startIndex + 20000;

  for (var i = 1800001; i <= 2200000; i++) {
    currentGameName = 'game #' + i;
    var currentGame = randomGame(currentGameName);
    var elasticObj = {
      'index': {
        '_index': 'gamesindex',
        '_type': 'game',
        '_id': i
      }
    };
   bodyArray.push(elasticObj);
    bodyArray.push(currentGame);
  }
  return bodyArray;
};

var randomGamesArray = generateRandomGames();

client.bulk({timeout: '1m', body: randomGamesArray },
  function (err, resp) {
    if (err) {
    console.log('elasticsearch error', err);
    } else {
    console.log(resp.items.length + ' items loaded');
    }
});


