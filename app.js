var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

module.exports = app;
