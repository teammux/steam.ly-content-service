const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createPool(mysqlConfig);

const addGames = function(games, callback) {
  connection.query('INSERT INTO games  (name, publisher, release_date, genre, price, number_of_owners) VALUES ?', [games], function(err, result) {
    if (err) {
      console.log('error adding games', err);
    } else {
      callback(result);
      connection.end();
    }
  });
};

const getAllGames = function() {
  connection.query('SELECT * FROM games');
};

const getGame = (callback) => {

};

module.exports = {
  addGames,
  getAllGames,
  getGame
};


