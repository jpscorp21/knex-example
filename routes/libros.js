const router = require('express').Router();
const libros = require('../controllers/libros');


router.get('/', libros.getAll);
router.get('/:id', libros.getById);
router.post('/', libros.create);
router.put('/', libros.update);
router.delete('/:id', libros.deleteItem);


module.exports = router;

