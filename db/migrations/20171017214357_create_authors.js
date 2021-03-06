exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', function(t) {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();
        t.string('name').notNull();
    });
};

exports.down = function(knex, Promise) {
  
};
