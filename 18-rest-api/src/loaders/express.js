const express = require('express');

const routes = require('../routes');

module.exports = (server) => {
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(routes);
  server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};

const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('../routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/users', userRoutes);

module.exports = app;
