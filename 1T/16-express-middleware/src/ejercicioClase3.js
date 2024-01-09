import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Datos de la API' });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
