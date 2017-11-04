var db = require('../database/index.js');
var express = require('express');
var app = express();

app.get('/games/search', function (req, res) {
  var query = req.query;
  var sql = db.sqlBuilder(query);
  console.log('sql', sql);
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

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
