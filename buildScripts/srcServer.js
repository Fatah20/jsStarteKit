//var express = require('express');
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
//var path = require('path');
//var open = require('open');

const port = 3000;
const app = express();
const compiler= webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));

});

app.get('/users', function(req, res) {
  // Hard coding for asimplicity. pretend this hits a real database
  res.json([
    {"id": 1, "firstName":"Socdaal-1", "lastName":"Muse", "email":"socdaal@gmail.com"},
    {"id": 1, "firstName":"Socdaal-2", "lastName":"Muse", "email":"socdaal@gmail.com"},
    {"id": 1, "firstName":"Socdaal-3", "lastName":"Muse", "email":"socdaal@gmail.com"},
    {"id": 1, "firstName":"Socdaal-4", "lastName":"Muse", "email":"socdaal@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);

  }else {
    open('http://localhost:' + port);
  }
});
