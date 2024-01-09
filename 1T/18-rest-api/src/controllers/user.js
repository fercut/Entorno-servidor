const { logger } = require("../utils");
const { users } = require("../utils/stored")

function showUsers(req, res) {
    res.status(200).send(users);
    logger.info('OK - Usuarios mostrados');
}

function showUser(req, res) {
    const id = req.params.id;
    console.log(id);
    for (let user of users) {
        if (user.id === id) {
            logger.info('OK - Usuario mostrado');
            return res.status(200).send(user);
        }
    }
    logger.warn('WARN - No se encuentra al usuario');
    return res.status(404).send({ message: 'No se encuentra al usuario' });
}

function addUser(req, res) {
    const newUser = req.body;
    users.push(newUser);
    res.status(200).send('Usuario creado');
    logger.info('OK - Usuario creado');
}

function editUser(req, res) {
    const id = req.params.id;
    const newUser = req.body;
    let objIndex = users.findIndex((user => user.id == id));
    users[objIndex] = newUser;
    res.status(200).send('Usuario modificado');
    logger.info('OK - Usuario modificado');

}

function removeUser(req, res) {
    const id = req.params.id
    users.filter(user => {
        if (user.id === id) {
            const index = users.indexOf(user);
            users.splice(index, 1);
        }
    });

    res.send('Has eliminado el usuario!!');
    logger.info('OK - Usuario eliminado');
}

module.exports = {
    showUsers,
    showUser,
    addUser,
    editUser,
    removeUser,
};