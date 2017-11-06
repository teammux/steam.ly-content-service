const mysql = require('mysql');
const mysqlConfig = require('../config/development.js');

const connection = mysql.createPool(mysqlConfig);

var sqlBuilder = function(query) {
  var maxValues = [];
  var minValues = [];
  var equalValues = [];
  var sqlQuery = "SELECT * FROM games WHERE ";
  var limitString = '';
  var queryBuilder = function(array, operator) {
    array.forEach(function(tuple) {
      var curField = tuple[0];
      var curValue = tuple[1];
      var curSQL = curField + " " + operator + ' \'' + curValue + '\' ' + 'AND ';
      sqlQuery += curSQL;
    });
  };

  for (var key in query) {
    var keyLowerCase = key.toLowerCase();

    if (keyLowerCase.startsWith('max')) {
      var maxField = keyLowerCase.substring(3);
      var maxTuple = [maxField, query[key]];
      maxValues.push(maxTuple);
    } else if (keyLowerCase.startsWith('min')) {
       var minField = keyLowerCase.substring(3);
       var minTuple = [minField, query[key]];
       minValues.push(minTuple);
    } else if (keyLowerCase === 'limit') {
        limitString = 'LIMIT ' + query[key];
    } else {
      var equalTuple = [key, query[key]];
      equalValues.push(equalTuple);
    }
  }
  queryBuilder(maxValues, '<=');
  queryBuilder(minValues, '>=');
  queryBuilder(equalValues, '=');

  if (sqlQuery.endsWith('WHERE ')) {
    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 6);
  }
  if (sqlQuery.endsWith('AND ')) {
    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 4);
  }
  return sqlQuery += limitString;
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

const getGames = (sql, callback) => {
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const getGamesByIds = (ids, callback) => {
  var sql = `SELECT * FROM  games WHERE id IN (${ids})`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

module.exports = {
  sqlBuilder,
  addGames,
  getGames,
  getGamesByIds
};
