const { application } = require('express');
const express = require('express');
const { showUsers, showUser, addUser, editUser, removeUser } = require('../controllers/user');
const router = express.Router();

// LOCAL
router.get('/users', showUsers);
router.get('/users/:id', showUser);
router.get('/users/add/:object', addUser);
router.get('/users/edit/:id/:object', editUser);
router.get('/users/remove/:id', removeUser);

// POSTMAN
router.get('/users', showUsers);
router.get('/users/:id', showUser);
router.post('/users', addUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', removeUser);

module.exports = router;