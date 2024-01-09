import express from 'express';
import * as controller from 'controlers.js';

const server = express();
const port = 3000;

// Estas dos lineas configuran 
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/ping', (req,res) => res.send('pong'));
server.get('/header', controller.headersController);
server.get('/query', controller.queryController);
server.get('/params/:name/', controller.paramsController);
server.get('/params/:name/saluda', controller.paramsSaludaController);
server.get('/body', controller.bodyController)

server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
})
