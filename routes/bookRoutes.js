const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.list); // Obtener lista de libros
router.get('/:id', bookController.detail); // Obtener detalles de un libro por ID
router.post('/', bookController.create); // Crear un nuevo libro
router.put('/:id', bookController.update); // Actualizar un libro por ID
router.delete('/:id', bookController.delete); // Eliminar un libro por ID

module.exports = router;
