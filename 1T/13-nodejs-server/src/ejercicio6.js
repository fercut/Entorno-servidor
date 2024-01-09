import http from 'http';
import querystring from 'querystring';

const port = 3000;

const server = http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'text/json');
    const name = req.url;
  
    const n = querystring.parse(`name=${name.split('/').join('')}`);
    resp.writeHead(200);
    resp.end(`Hello ${n.name} !`);
});

// * Configure server
server.listen(port, ()=>{
    console.log(`Server is ready at http://localhost:${port}`);
});