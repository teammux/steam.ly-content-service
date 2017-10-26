const db = require('./index');

var game1 = [
  'Riddick 3', 'Atari', '1990-05-14', 'action', '39.99', 2000
];


var game2 = [
  'Raven 4', 'Atari', '1990-05-14', 'action', '39.99', 2000
];

var game3 = [
  'Brady 3', 'Atari', '1990-05-14', 'action', '39.99', 2000
];


var game4 = [
  'Manning 4', 'Atari', '1990-05-14', 'action', '39.99', 2000
];

var game5 = [
  'Rice 5', 'Atari', '1990-05-14', 'action', '39.99', 2000
];
// var game2 = {
//   name: 'Aliens 2',
//   publisher: 'Atari',
//   release_date: '1990-05-14',
//   genre: 'action',
//   price: '39.99',
//   number_of_owners: 2000
// };

var games = [game5];


// db.addGame(game, function(result) {
//   console.log(result.affectedRows + ' rows added');
// });
//

db.addGames(games, function(result) {
  console.log(result.affectedRows + ' rows added');
});

// for (var i = 0; i < 1000000; i++) {
//   game.name = 'game #' + i;
//   db.addGame(game);
// }

//db.getAllGames().then(res =>
//  console.log(res.rows));
