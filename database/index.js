const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const addGame = function(game) {
  connection.query({sql: 'INSERT INTO games (name, publisher, release_date, genre, price, number_of_owners) VALUES ?',
    values: [[game.name, game.publisher, game.release_date, game.genre, game.price, game.number_of_owners]]});
};

const getAllGames = function() {
  connection.query('SELECT * FROM games');
};


const getGame = (callback) => {

};

module.exports = {
  addGame,
  getAllGames,
  getGame
};


