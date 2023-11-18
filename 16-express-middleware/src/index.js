import express from 'express';

const server = express();
const port = 3000;
const router = express.Router();

// Middleware
server.use((req, res, next) =>{
  console.log(`[${new Date().toISOString()}] ${req.method}: ${req.path}`);
  next();
});

// Route + Controller 
server.get('/ping', (req, res) =>{
  console.log('pong');
  return res.send('pong');
});

router.get('/user', (req, res) => {
  res.send({name: 'Fermin'});
});

server.listen(port, () => {
  console.log('Server is ready');
});
