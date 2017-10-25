const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config);

const addGame = function(game) {
  return pool.query('INSERT INTO games( name, publisher, release_date, genre_type, price, number_of_owners) values($1, $2, $3, $4, $5, $6)',
    [game.name, game.publisher, game.release_date, game.genre_type, game.price, game.number_of_owners]);
};

const getAllGames = (callback) =>
  pool.query('SELECT * FROM games', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      callback(res.rows);
    }
});

const getGame = (callback) => {

};

module.exports = {
  addGame,
  getAllGames,
  getGame
};

