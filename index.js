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

app.get('/category', (request, response) => {
    Category.query()
        .then( categories => {
            response.json({ categories })
        })
})

app.listen(port, () => {`listening on port ${port}`} )