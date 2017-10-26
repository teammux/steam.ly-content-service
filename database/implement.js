const db = require('./index');

var game = {
  name: 'Aliens',
  publisher: 'Atari',
  release_date: 'May 10, 1990',
  genre: 'action',
  price: '39.99',
  number_of_owners: 2000
};

db.addGame(game);

// for (var i = 0; i < 1000000; i++) {
//   game.name = 'game #' + i;
//   db.addGame(game);
// }

//db.getAllGames().then(res =>
//  console.log(res.rows));
