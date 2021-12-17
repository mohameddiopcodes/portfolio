const express = require('express');
const path = require('path');
const logger = require('morgan');
const sslRedirect = require('heroku-ssl-redirect');

require('dotenv').config()
require('./config/database')
require('./config/createOwner')

const projectsRouter = require('./routes/projects');
const workRouter = require('./routes/work');
const usersRouter = require('./routes/users');

const app = express();

app.use(sslRedirect());
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
