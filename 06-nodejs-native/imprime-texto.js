const fs = require('fs');

function imprimirContenidoArchivo(nombreArchivo) {
  fs.readFile(nombreArchivo, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    console.log('Contenido del archivo:');
    console.log(data);
  });
}

// Llama a la función para imprimir el contenido del archivo
console.log(imprimirContenidoArchivo('./text.txt'));