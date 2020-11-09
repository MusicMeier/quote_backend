const { response } = require('express');
const express = require('express');
const app = express();
const port = 7000;

const knex = require('knex');
const config = require('./knexfile')['development'];
const database = knex(config);

const { Model} = require('objection')
Model.knex(database)

class Category extends Model {
    static tableName = 'categories'

}

class Quote extends Model {
    static tableName = 'quotes'

}

app.get('/categories', (request, response) => {
    Category.query()
        .then( categories => {
            response.json({ categories })
        })
})

app.get('/quotes', (request, response) => {
    Quote.query()
        .then( quotes => {
            response.json({ quotes })
        })
})

app.listen(port, () => {`listening on port ${port}`} )