
exports.up = function(knex) {
    return knex.schema.createTable("quotes", table => {
        table.integer("id")
        table.string("description")
        table.string("author")
        table.integer("category_id").references("id").inTable("categories")
    })
};

exports.down = function(knex) {
    return knex.scheme.dropTableIfExists("quotes")
};
