import http from 'http';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req, resp) => {
  if(req.url === '/page'){
        fs.readFile('./public/ejercicio3.html', (err, data) => {
            if (err) {
                resp.writeHead(404, {'Content-Type': 'text/plain'});
                resp.end('Error 404: Not Found');
            } else {
                resp.writeHead(200, {'Content-Type': 'text/html'});
                resp.end(data);
            }
        });
    }
   if(req.url === '/error'){
        resp.writeHead(404, {'Content-Type': 'text/html'});
        resp.end('<h1>Error 404: Not Found</h1>');
    }
});

// * Configure server
server.listen(port, ()=>{
    console.log(`Server is ready at http://localhost:${port}`);
});