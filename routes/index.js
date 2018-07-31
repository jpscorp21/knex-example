const router = require('express').Router();
const libros = require('./libros');
const autores = require('./autores');

router.use('/libros', libros);
router.use('/autores', autores);

module.exports = router;

