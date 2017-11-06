var db = require('../database/index.js');
var express = require('express');
var app = express();
var port = 3000;

app.get('/games/search', function (req, res) {
  var query = req.query;
  var sql = db.sqlBuilder(query);
  db.getGames(sql, function(err, result) {
    if (err) {
      res.send('Error reading query');
    } else {
      console.log(result.length + 'rows');
      res.send('happy');
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

app.listen(port, function () {
  console.log('content service server started on port', port);
});

module.exports = app;

