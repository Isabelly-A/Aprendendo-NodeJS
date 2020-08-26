const express = require('express');
const routes = require('./routes');
const { route } = require('./routes');

const app = express();

app.use('/', routes);

module.exports = app;