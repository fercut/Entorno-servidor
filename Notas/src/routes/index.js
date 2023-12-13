const express = require('express');

const { rootController } = require('../controllers');
const { recogerNotas } = require('../controllers/notas');
const notasRouter = require('./notas');

const router = express.Router();

router.post('/', rootController);
router.use('/notas', notasRouter);
router.get('/notas', recogerNotas);

module.exports = router;