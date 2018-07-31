
exports.up = function(knex, Promise) {
  return knex.schema.createTable('libros', table => {
    table.increments();
    table.string('titulo').notNullable();
    table.integer('id_autor').references('id').inTable('autores').withKeyName('fk_autores_libros');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('libros');
};
