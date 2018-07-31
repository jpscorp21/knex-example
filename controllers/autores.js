const knex = require("../db/knex");


// ==========================================
// CONSULTA DE TODOS LOS AUTORES
// ==========================================
let getAll = (req, res) => {
  knex
    .table("autores")
    .select()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};


// ==========================================
// CONSULTA DE AUTORES POR ID
// ==========================================
let getById = (req, res) => {
  let id = req.params.id;

  knex
    .table("autores")
    .where("id", id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};


// ==========================================
// CREAR NUEVO AUTORES
// ==========================================
let create = (req, res) => {
  let body = req.body;

  knex
    .table("autores")
    .insert({
      nombre: body.nombre,
      apellido: body.apellido,
      id_nacionalidad: 1      
    })
    .then(data => {
      res.status(201).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};


// ==========================================
// ACTUALIZAR UN AUTOR
// ==========================================
let update = (req, res) => {
    let body = req.body;

    knex.table('autores')        
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
// ELIMINAR UN AUTOR
// ==========================================
let deleteItem = (req, res) => {
  let id = req.params.id;

  knex.table("autores")
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
