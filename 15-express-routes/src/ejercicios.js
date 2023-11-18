import express from 'express';
import animalsRouter from '../routes/animalsRouter.js';

const server = express();
const port = 3000;

// Estas dos lineas configuran 
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/ping', (req,res) => res.send('pong'));

// Ejercicio 1
server.get('/header', (req, res) => {
  if(req.headers.token){
    console.log(req.headers.token);
    res.status(200).send(req.headers.token);
  }else{
    res.status(401).send({
      "code": 401,
      "error": "Unauthorized",
      "message": "Error: Set a token to login"
    });
  }
});

//Ejercicio 2
server.get('/params/:name', (req, res) => res.send(`Hello ${req.params.name}!`));

// Ejercicio 3 --> http://localhost:3000/query?n=90 --> 4095
server.get('/query', (req, res) => {
  
  const {n=100} = req.query;
  const parsedN = parseInt(n);
  
  if (isNaN(parsedN) || parsedN < 1) {
    return res.status(400).send({
      "code": 400,
      "error": "Bad Request",
      "message": "Error: Provide a valid positive number (n)"
    });
  }
  
  let resultado = 0;
  for(let i = 1; i <= parsedN; i++ ){
      resultado += i;
  }
  res.status(200).send(resultado); 
});

// Ejercicio 4
server.post('/body', (req, res) => {

  const requestData = req.body;

  if (!requestData) {
    return res.status(400).json({
      "code": 400,
      "error": "Bad Request",
      "message": "Error: No request body found"
    });
  }
  const htmlList = "<ul>" + Object.keys(requestData).map(key => `<li>${key}: ${requestData[key]}</li>`).join('') + "</ul>";
  res.send(htmlList);
});

// Ejercicio 5 --> http://localhost:3000/animals/dog --> "guau guau"
server.use('/animals', animalsRouter);


server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
})
