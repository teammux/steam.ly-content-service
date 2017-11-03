var db = require('../database/index.js');
var express = require('express');
var app = express();

app.get('/game/:id', function (req, res) {
  var game_id = req.params.id;
  db.getGame(game_id, function(result) {
    res.send(result[0]);
  });
});

app.get('/game', function (req, res) {
  var query = req.query;
  if (query) {
    var sql = db.sqlBuilder(query);
    db.getGames(sql, function(result) {
      var resStr
        = result.length + ' rows';
      console.log(resStr);
      res.send(result);
    });
  }
});

app.get('/games', function (req, res) {
  var query = req.query;
  console.log('query', query);
  res.send('thanks for the query, bitch!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
