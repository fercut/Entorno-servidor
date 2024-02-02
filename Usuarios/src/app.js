import express from 'express';
import * as loaders from './loaders/index.js';

const server = express();

loaders.init(server);

export default server;