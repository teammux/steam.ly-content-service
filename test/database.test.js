"use strict";


var app = require('../server/index.js');
var chai = require('chai');
var request = require('supertest');
var expect = chai.expect;

describe('Content Service API Integration Tests', function() {
    describe('#GET / games/search', function() {
    it('should get all games', function(done) {
      request(app) .get('/games/search')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.empty;
          done();
        });
        done();
    });
  });

});

// // Simple assertions
// expect({}).to.exist;
// expect(26).to.equal(26);
// expect(false).to.be.false;
// expect('hello').to.be.string;

// // Modifiers ('not')
// expect([1, 2, 3]).to.not.be.empty;

// // Complex chains
// expect([1, 2, 3]).to.have.length.of.at.least(3);

// var expect = require('chai').expect;
// var Camo = require('camo');
// var User = require('../models').User;

// describe('Users', function() {

//     var database = null;

//     before(function(done) {
//         Camo.connect('mongodb://localhost/app_test').then(function(db) {
//             database = db;
//             return database.dropDatabase();
//         }).then(function() {}).then(done, done);
//     });

//     afterEach(function(done) {
//         database.dropDatabase().then(function() {}).then(done, done);
//     });

//     describe('#save()', function() {
//         it('should save User data to database', function(done) {
//             // Use your database here...
//         });
//     });

//     describe('#load()', function() {
//         it('should load User data from database', function(done) {
//             // Use your database here...
//         });
//     });
// });
