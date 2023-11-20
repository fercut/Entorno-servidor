import express from 'express';

const server = express();
const port = 3000;

function controller(req, res, next) {
    try {
    throw Error('Esto a petado')
    } catch (err) {
    return next(err);
    }
};

// error handler
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode < 500 ? err.statusCode : 500;
        res.status(statusCode).send({
        code: statusCode, message: 'Server Error'
    });
};

server.use(controller);
server.use(errorHandler);
server.listen(port, () => {
    console.log(`Escuchando el puerto: http://localhost:${port}`)
});