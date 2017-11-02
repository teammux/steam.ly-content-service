const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createPool(mysqlConfig);

const addGames = function(games) {
  return new Promise( ( resolve, reject ) => {
    connection.query('INSERT INTO games (name, publisher, releaseDate, genre, rating, price, owners) VALUES ?', [games], (err, result) => {
        if (err) {
          return reject(err);
        } else {
          resolve(result);
          connection.end();
        }
    });
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


