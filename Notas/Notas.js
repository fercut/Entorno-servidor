// Primer ejercicio hecho por consola

const fs = require('fs');
const readline = require('readline');

const notasDirectory = './notas/';

// Verificar si el directorio de notas existe, si no, crearlo
if (!fs.existsSync(notasDirectory)) {
  fs.mkdirSync(notasDirectory);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log('Menu:');
  console.log('1. Crear nueva nota');
  console.log('2. Editar nota existente');
  console.log('3. Eliminar nota');
  console.log('4. Salir');
}

function listarNotas() {
  const notas = fs.readdirSync(notasDirectory);
  notas.forEach((nota, index) => {
    console.log(`${index + 1}. ${nota}`);
  });
}

function crearNuevaNota(nota) {
  if (nota) fs.writeFileSync(`${notasDirectory}${nota}.note`);
  else{
    rl.question('Nombre de la nueva nota: ', (nombreNota) => {
      rl.question('Contenido de la nota:\n', (contenido) => {
        fs.writeFileSync(`${notasDirectory}${nombreNota}.note`, contenido);
        console.log('Nueva nota creada.');
        rl.close();
      });
    });
  }
}

function editarNota() {
  console.log('Notas disponibles:');
  listarNotas();

  rl.question('Seleccione el número de la nota que desea editar: ', (numeroNota) => {
    const notaSeleccionada = fs.readdirSync(notasDirectory)[numeroNota - 1];
    const contenidoActual = fs.readFileSync(`${notasDirectory}${notaSeleccionada}`, 'utf-8');
    console.log('Contenido actual de la nota:\n', contenidoActual);

    rl.question('Nuevo contenido de la nota:\n', (nuevoContenido) => {
      fs.writeFileSync(`${notasDirectory}${notaSeleccionada}`, nuevoContenido);
      console.log('Nota editada.');
      rl.close();
    });
  });
}

function eliminarNota() {
  console.log('Notas disponibles:');
  listarNotas();

  rl.question('Seleccione el número de la nota que desea eliminar: ', (numeroNota) => {
    const notaSeleccionada = fs.readdirSync(notasDirectory)[numeroNota - 1];
    fs.unlinkSync(`${notasDirectory}${notaSeleccionada}`);
    console.log('Nota eliminada.');
    rl.close();
  });
}

function main() {
  mostrarMenu();

  rl.question('Seleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        crearNuevaNota();
        break;
      case '2':
        editarNota();
        break;
      case '3':
        eliminarNota();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        rl.close();
    }
  });
}

main();
