const express = require('express');
const router = express.Router();

const postController = require('../Controllers/post.controller');

router
    .get('/', postController.get)
    .get('/:id', postController.getById)
    .get('/user/:id', postController.getByUserId)
    .post('/', postController.create)
    .put('/:id', postController.update)
    .delete('/:id', postController._delete);

module.exports = router;