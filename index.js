const { response } = require('express');
const express = require('express');
const app = express();
const port = 7000;
const bodyParser = require('body-parser')

const cors = require('cors')
app.use(cors());
app.use(bodyParser.json())

const knex = require('knex');
const config = require('./knexfile')['development'];
const database = knex(config);

const { Model } = require('objection')
Model.knex(database)

class Category extends Model {
    static tableName = 'categories'
}

class Quote extends Model {
    static tableName = 'quotes'
    
    static relationMappings = {
        category: {
            relation: Model.BelongsToOneRelation,
            modelClass: Category,
            join: {
                from: "quotes.category_id",
                to: "categories.id"
            }
        }
    }

}

app.get('/categories', (request, response) => {
    Category.query()
        .then(categories => {
            response.json(categories)
        })
})

app.get('/quotes', (request, response) => {
    Quote.query()
        .eager('category')
        .then(quotes => {
            response.json(quotes)
        })
        .catch( error  => {
            console.error(error.message)
        })
})

app.post('/quotes', (request, response) => {

    const newQuote = request.body
    database('quotes').insert({
        description: newQuote.description,
        author: newQuote.author,
        category_id: parseInt(newQuote.category)
    })
    .returning(['author'])
    .then(newQuote => {
        response.json(newQuote)
    })
})

app.listen(port, () => {`listening on port ${port}`} )