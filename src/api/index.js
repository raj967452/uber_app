'use strict';

const router = require('express').Router();
const auth = require('./auth');
const user = require('./routes/user');
const driver = require('./routes/driver');

const appRoute = () => {
    const app = router();
    auth(app);
    user(app);
    driver(app);

    return app;
}

module.exports = appRoute;