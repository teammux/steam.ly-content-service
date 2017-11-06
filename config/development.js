'use strict';

module.exports = {
  env: 'development',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contentService',
  connectionLimit: 150,
};

// var _mysql = require('mysql');

// var HOST = 'localhost';
// var PORT = 3306;
// var MYSQL_USER = 'nodehacker';
// var MYSQL_PASS = 'lulwut';
// var DATABASE = 'nodedb';
// var TABLE = 'gadgets';

// var mysql = _mysql.createClient({
//     host: HOST,
//     port: PORT,
//     user: MYSQL_USER,
//     password: MYSQL_PASS,
// });

// mysql.query('use ' + DATABASE);
