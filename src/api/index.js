'use strict';

const router = require('express').Router();
//const auth = require('./auth');
const user = require('./route/user');
const driver = require('./route/driver');

const appRoute = () => {
    const app = router();

    user(app);
    driver(app);

    return app;
}

module.exports = appRoute;