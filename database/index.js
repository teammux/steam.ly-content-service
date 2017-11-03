const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createPool(mysqlConfig);

var sqlBuilder = function(query) {
  var maxValues = [];
  var minValues = [];
  var equalValues = [];
  var sqlQuery = "SELECT * FROM games WHERE ";
  var queryBuilder = function(array, operator) {
    array.forEach(function(tuple) {
      var curField = tuple[0];
      var curValue = tuple[1];
      var curSQL = curField + " " + operator + ' \'' + curValue + '\' ' + 'AND ';
      sqlQuery += curSQL;
    });
  };

  for (var key in query) {
    if (key.startsWith('max')) {
      var maxField = key.substring(3).toLowerCase();
      var maxTuple = [maxField, query[key]];
      maxValues.push(maxTuple);
    } else if (key.startsWith('min')) {
       var minField = key.substring(3).toLowerCase();
       var minTuple = [minField, query[key]];
       minValues.push(minTuple);
    } else {
      var equalTuple = [key, query[key]];
      equalValues.push(equalTuple);
    }
  }
  queryBuilder(maxValues, '<=');
  queryBuilder(minValues, '>=');
  queryBuilder(equalValues, '=');
  if (sqlQuery.endsWith('AND ')) {
    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 4);
  }
  return sqlQuery;
};

const addGames = function(games) {
  return new Promise( ( resolve, reject ) => {
    connection.query('INSERT INTO games (name, publisher, releaseDate, genre, rating, price, ownership) VALUES ?', [games], (err, result) => {
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

const getGames = (sql, callback) => {
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('error retrieving games', err);
    } else {
      callback(result);
    }
  });
};

const getGame = (id, callback) => {
  connection.query('SELECT * FROM games WHERE id = ?',
    [id], (err, result) => {
    if (err) {
      console.log('error retrieving game', err);
    } else {
      callback(result);
    }
  });
};

module.exports = {
  sqlBuilder,
  addGames,
  getAllGames,
  getGames,
  getGame
};


