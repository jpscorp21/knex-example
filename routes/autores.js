const router = require('express').Router();
const autores = require('../controllers/autores');


router.get('/', autores.getAll);
router.get('/:id', autores.getById);
router.post('/', autores.create);
router.put('/', autores.update);
router.delete('/:id', autores.deleteItem);


module.exports = router;

