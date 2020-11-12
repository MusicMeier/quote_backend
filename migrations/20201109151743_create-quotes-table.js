
exports.up = function(knex) {
    return knex.schema.createTable("quotes", table => {
        table.increments("id")
        table.string("description")
        table.string("author")
        table.integer("category_id").references("id").inTable("categories")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("quotes")
};
