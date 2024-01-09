import express from 'express';
import querystring from 'querystring';

const server = express();

const port = 3000;

server.use((req, resp) => {
    resp.setHeader('Content-Type', 'text/json');
    const name = req.url;
  
    const n = querystring.parse(`name=${name.split('/').join('')}`);
    resp.writeHead(200);
    resp.end(`Hello ${n.name} !`);
});


server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
});