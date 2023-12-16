export const uploadFile = (req, res) => {
    try {
      const file = req.file;
  
      if (!file) {
        return res.status(400).send('No se ha seleccionado ningún archivo');
      }
  
      return res.status(200).send('Documento cargado exitosamente');
    } catch (error) {
      return res.status(500).send('Error al cargar el archivo');
    }
  };