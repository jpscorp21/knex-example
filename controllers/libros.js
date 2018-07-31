const knex = require("../db/knex");

// ==========================================
// CONSULTA DE TODOS LOS LIBROS
// ==========================================
let getAll = (req, res) => {
  knex
    .table("libros")
    .select()
    .join('autores', {'autores.id': 'libros.id_autor'})    
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

// ==========================================
// CONSULTA DE LIBRO POR ID
// ==========================================
let getById = (req, res) => {
  let id = req.params.id;

  knex
    .table("libros")
    .where("id", id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

// ==========================================
// CREAR NUEVO LIBRO
// ==========================================
let create = (req, res) => {
  let body = req.body;

  knex
    .table("libros")
    .insert({
      titulo: body.titulo
    })
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};


// ==========================================
// ACTUALIZAR UN LIBRO
// ==========================================
let update = (req, res) => {
  let body = req.body;

  knex.table('libros')        
      .where('id', body.id)
      .update(body)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json(error);
      })        
}


// ==========================================
// ELIMINAR UN LIBRO
// ==========================================
let deleteItem = (req, res) => {
  let id = req.params.id;

  knex
    .table("libros")
    .where("id", id)
    .del()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

module.exports = {
  getAll,
  getById,
  create,
  deleteItem,
  update
};
