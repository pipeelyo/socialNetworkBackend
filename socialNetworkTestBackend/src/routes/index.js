const express = require('express');

const socialUserRouter = require('./socialUsers.router');
const postRouter = require('./post.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user', socialUserRouter);
    router.use('/post', postRouter)
}

module.exports = routerApi;