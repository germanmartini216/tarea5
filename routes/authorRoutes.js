const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.list); // Obtener lista de autores
router.get('/:id', authorController.detail); // Obtener detalles de un autor por ID
router.post('/', authorController.create); // Crear un nuevo autor
router.put('/:id', authorController.update); // Actualizar un autor por ID
router.delete('/:id', authorController.delete); // Eliminar un autor por ID

module.exports = router;
