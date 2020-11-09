const express = require('express');
const app = express();
const port = 7000;

const knex = require('knex');
const config = require('./knexfile')['development'];
const database = knex(config);

app.listen(port, () => {})
