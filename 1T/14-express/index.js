import express from 'express';

const server = express();
const port = 3000;

server.get('/ping', (req,res) =>{
    res.send('pong');
});

server.listen(port, ()=>{
    console.log(`Server ready at http://localhost:${port}`);
})