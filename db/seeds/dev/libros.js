
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('libros').del()
    .then(function () {
      // Inserts seed entries
      return knex('libros').insert([
        {id: 2, titulo: 'Trueno entre las hojas'},
        {id: 3, titulo: 'Hijo del hombre'},
        {id: 4, titulo: 'Madama Sui'}
      ]);
    });
};
