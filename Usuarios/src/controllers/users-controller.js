import logger from '../utils/logger.js';
import bcrypt from 'bcrypt';
import * as userService from '../services/users.js';
import { paginationItems } from '../utils/pagination.js';

export function getUsers(req, res) {
    const { sort, genre, name, offset, limit } = req.query;
    
    let users = usersService.getUsers();

    if(genre) {
        users = users.filter(u => u.genre === genre);
    }

    if(name) {
        users = users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
    }

    if(sort) {
        const sortFields = sort.split(',');
        sortFields.forEach(sortField => {
            const [key, order] = sortField.split(':');
            users = users.sort((a,b) => order === 'desc' ? a[key] < b[key] ? 1 : -1 : a[key] > b[key] ? 1 : -1);
        });
    }

    const data = {
        values: users.slice(offset, offset + limit),
        total: userService.countUsers(),
    };
    res.send(paginationItems(req, data));
}

export function gerUser(req, res) {
    logger.info(JSON.stringify(req.params, null, 2));
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    if(user){
        return res.send(user);
    }
    return res.status(404).send({ message: 'User not found' });
}

export function postUser(req, res, next) {
    const { password, ...body } = req.body;
    const users = userService.getUsers();
    if(!body.name || !body.name.trim()) res.status(400).send({ message: 'name is mandatory'});

    const id = body.id || (parseInt(users[users.length-1].id) +1 ).toString();

    if (users.some(u => u.id === id)) res.status(409).send({ message: `user ${id} already exists`});

    const hash = bcrypt.hashSync(password, 10);
    const toCreateUser = { id, ...body, password: hash };
    const createUser = userService.addUser(toCreateUser);

    return res.status(201).send(createUser);
}

export function updateUser(req, res, next){
    const { id } = req.params;
    const user = users.find(u => u.id === id);
    
    if(!user) res.status(404).send({ message: 'User not found' });

    Object.entries(req.body).forEach(([key, value]) => {
        user[key] = value;
    });

    return res.send(user);
}

export function deleteUser(req, res) {
    
}