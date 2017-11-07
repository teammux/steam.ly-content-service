# Valve Steam Content Service API

Valve Steam is an online marketplace for video games.  The Content Service API provides access to all video games in the Valve Steam database.  The Content Service API supports the following RESTful method calls: get, post, put, delete.


## Content Service API Methods

### Get a single game by id
* GET /games/:id
### Get multiple games by comma separated ids
* GET /games
### Search for games by argument constraints
* GET /games/search
### Get a single random game by argument constraints
* GET /games/random
### Post a game
* POST /games
### Update a single game by id
* PUT /games/:id
### Update multiple games by comma separated ids
* PUT /games
### Delete a single game by id
* DELETE /games/:id
### DELETE multiple games by comma separated ids
* DELETE /games

### Arguments
* id
* name
* publisher
* releaseDate
* earliestDate
* latestDate
* genre  [ action, fps, rpg ]
* price
* maxPrice
* minPrice
* rating
* maxRating
* minRating
* ownership
* maxOwnership
* minOwnership
* limit
