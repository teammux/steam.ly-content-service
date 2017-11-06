'use strict';

module.exports = {
  env: 'test',
  port: process.env.PORT || 4100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'contentServiceTest',
  connectionLimit: 150
};
