DROP DATABASE IF EXISTS contentService;

CREATE DATABASE contentService;

USE contentService;

CREATE TABLE games (
  id BIGINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  publisher VARCHAR(50),
  release_date DATE,
  genre ENUM('action', 'action_adventure', 'adventure', 'role_playing', 'simulation', 'strategy', 'sports'),
  price DECIMAL(13, 2),
  number_of_owners BIGINT,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
 *
 *  If you need assistance with this step,
 *  please talk to a proctor.
*/
