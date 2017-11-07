var db = require('../database/index.js');
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var port = 3000;

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/games/search', function (req, res) {
  var query = req.query;
  var sql = db.sqlBuilder(query);
  db.getGames(sql, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      res.send(result);
    }
  });
});

app.get('/games/random', function (req, res) {
  var query = req.query;
  var sql = db.sqlBuilder(query);
  db.getGames(sql, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      var randomIndex
        = Math.floor(Math.random()
          * result.length);
      res.send(result[randomIndex]);
    }
  });
});

app.get('/games/:id', function (req, res) {
  var id = req.params.id;
  var query = { id: id };
  var sql = db.sqlBuilder(query);
  db.getGames(sql, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      res.send(result[0]);
    }
  });
});

app.get('/games', function (req, res) {
  var ids = req.query.ids;
  db.getGamesByIds(ids, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      res.send(result);
    }
  });
});

app.post('/games', function (req, res) {
  var gamesArray = req.body;
  games = db.gamesObjectsToArrays(gamesArray);
  db.addGames(games).then((result) => {
    res.send(`${result.affectedRows} games were added`);
  },
  (err) => {
    res.send('Error adding games');
  });
});

app.put('/games/:id', function (req, res) {
  var valuesObject = req.body;
  var id = req.params.id;
  db.updateGames(valuesObject, id, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      res.send(`game ${id} was updated`);
    }
  });
});

app.put('/games', function (req, res) {
  var valuesObject = req.body;
  var ids = req.query.ids;
  db.updateGames(valuesObject, ids, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      res.send(`${result.affectedRows} games were updated`);
    }
  });
});

app.delete('/games/:id', function (req, res) {
  var id = req.params.id;
  db.deleteGamesByIds(id, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      res.send(`game ${id} was deleted`);
    }
  });
});

app.delete('/games', function (req, res) {
  var ids = req.query.ids;
  db.deleteGamesByIds(ids, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      res.send(`${result.affectedRows} games were deleted`);
    }
  });
});

app.listen(port, function () {
  console.log('content service server started on port', port);
});

module.exports = app;

