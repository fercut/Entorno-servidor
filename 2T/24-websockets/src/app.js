import express from 'express';

const server = express();

server.use(express.static('Public'));
//loader.init(server);

export default server;