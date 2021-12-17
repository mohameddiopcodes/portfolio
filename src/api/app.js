var express = require('express');
var path = require('path');
var logger = require('morgan');

require('dotenv').config()
require('./config/database')
require('./config/createOwner')

var projectsRouter = require('./routes/projects');
var workRouter = require('./routes/work');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.json({limit: '400mb'}));


app.use('/api/projects', projectsRouter);
app.use('/api/work', workRouter);
app.use('/api/users', usersRouter);

app.use('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'))
})

module.exports = app;
