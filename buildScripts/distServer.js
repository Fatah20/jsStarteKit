//var express = require('express');
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
//var path = require('path');
//var open = require('open');

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));

});
/*
app.get('/users', function(req, res) {
  // Hard coding for asimplicity. pretend this hits a real database
  res.json([
    {"id": 1, "firstName":"Socdaal-1", "lastName":"Muse", "email":"socdaal@gmail.com"},
    {"id": 1, "firstName":"Socdaal-2", "lastName":"Muse", "email":"socdaal@gmail.com"},
    {"id": 1, "firstName":"Socdaal-3", "lastName":"Muse", "email":"socdaal@gmail.com"},
    {"id": 1, "firstName":"Socdaal-4", "lastName":"Muse", "email":"socdaal@gmail.com"}
  ]);
});
*/
app.listen(port, function(err) {
  if (err) {
    console.log(err);

  }else {
    open('http://localhost:' + port);
  }
});
