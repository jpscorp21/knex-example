
exports.up = function(knex, Promise) {
    return knex.schema.createTable('autores', (table) => {
        table.increments();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.integer('id_nacionalidad').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('autores');
  };
  