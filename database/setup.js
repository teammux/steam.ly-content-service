const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config);

pool.query("CREATE TYPE genre AS ENUM ('action', 'action_adventure', 'adventure', 'role_playing', 'simulation', 'strategy', 'sports')")

.then(() =>

  pool.query('CREATE TABLE games (game_id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY, name TEXT UNIQUE NOT NULL, publisher TEXT, release_date DATE, genre_type genre, price MONEY, number_of_owners BIGINT)'));
