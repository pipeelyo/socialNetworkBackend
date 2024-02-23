const express = require('express');
const router = express.Router();

const socialUserController = require('../Controllers/socialUser.controller');

router
    .get('/', socialUserController.get)
    .get('/:id', socialUserController.getById)
    .get('/name/:name', socialUserController.getByName)
    .get('/email/:email', socialUserController.getByEmail)
    .post('/', socialUserController.create)
    .put('/:id', socialUserController.update)
    .delete('/:id', socialUserController._delete);

module.exports = router;