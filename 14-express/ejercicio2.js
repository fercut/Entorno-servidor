import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = express();

const port = 3000;

server.get('/ping', (req,res) => {
    res.status(418).set('Content-Type', 'text/html').send('<h1>pong</h1>')
});

server.get('/json', (req,res) => {
    res.status(200).set('Content-Type', 'text/html').send('<h1>Hola Mundo!!</h1>')
});

// Y mostrar un html 
server.get('/web', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

server.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
});