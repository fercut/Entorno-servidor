import { DateTime } from 'luxon';

function imprimirFecha() {
  const fechaActual = DateTime.local().toFormat('dd-MM-yyyy HH:mm:ss');
  console.log(`Fecha actual: ${fechaActual}`);
}

setInterval(imprimirFecha, 1000);