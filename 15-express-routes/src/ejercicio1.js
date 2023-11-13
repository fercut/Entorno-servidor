import express from 'express';

const server = express();
const port = 3000;

// Estas dos lineas configuran 
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.get('/ping', (req,res) => res.send('pong'));
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

server.get('/params/:name', (req, res) => res.send(`Hello ${req.params.name}!`));

server.get('/query', (req, res) => {
 
  if (isNaN(parsedN) || parsedN < 1) {
    return res.status(400).send({
      "code": 400,
      "error": "Bad Request",
      "message": "Error: Provide a valid positive number (n)"
    });
  }

  const {n=100} = req.query;
  
  let resultado = 0;
  for(let i = 1; i <= parseInt(n); i++ ){
      resultado += i;
  }
  res.status(200).send(resultado); 
});


server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
})
