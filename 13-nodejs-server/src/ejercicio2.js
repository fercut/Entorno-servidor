import http from 'http';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req, resp) => {
  fs.readFile('./public/ejercicio2.html', (err, data) => {
    if (err) {
        resp.writeHead(404, {'Content-Type': 'text/plain'});
        resp.end('Error 404: Not Found');
    } else {
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.end(data);
    }
});
});

// * Configure server
server.listen(port, ()=>{
    console.log(`Server is ready at http://localhost:${port}`);
});
