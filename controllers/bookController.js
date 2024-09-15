const bookController = {
    list: (req, res) => {
      res.send('Lista de libros');
    },
    detail: (req, res) => {
      res.send(`Detalles del libro con ID ${req.params.id}`);
    },
    create: (req, res) => {
      res.send('Crear un nuevo libro');
    },
    update: (req, res) => {
      res.send(`Actualizar libro con ID ${req.params.id}`);
    },
    delete: (req, res) => {
      res.send(`Eliminar libro con ID ${req.params.id}`);
    }
  };
  
  module.exports = bookController;
  