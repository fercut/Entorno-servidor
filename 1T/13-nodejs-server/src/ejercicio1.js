import http from 'http';

const port = 4000;

const server = http.createServer((req, resp) => {
    resp.end('Hello World!');
});

// * Configure server
server.listen(port, ()=>{
    console.log(`Server is ready at http://localhost:${port}`);
});
