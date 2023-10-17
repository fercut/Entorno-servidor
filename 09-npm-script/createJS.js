import fs from 'fs';
import path from 'path';

const nombreArchivo = process.argv[2];

if (!nombreArchivo) {
  console.error('Debes proporcionar un nombre de archivo.');
  process.exit(1);
}

const filePath = path.join(__dirname, 'files', `${nombreArchivo}.js`);

fs.writeFile(filePath, '', err => {
  if (err) throw err;
  console.log(`Se ha creado el archivo ${nombreArchivo}.js en la carpeta './files'.`);
});
