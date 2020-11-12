
exports.up = function(knex) {
    return knex.schema.createTable("categories", table => {
        table.increments("id")
        table.string("title")
        table.string("url")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("categories")
};
