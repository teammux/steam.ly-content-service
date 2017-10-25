var config = {
  user: 'a_content',
  host: 'localhost',
  database: 'contentService',
  password: null,
  port: 5432,
  max: 10, // max number of connection can be open to database
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};

module.exports = config;
