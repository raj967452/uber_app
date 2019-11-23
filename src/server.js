'use strict'
const express = require("express");
const config = require("./config");
const Logger = require("./loaders/logger");
const startServer = () => {
    try {
        const app = express();
        const importedModule = require('./loaders');
        importedModule({ expressApp: app });
        app.listen(config.port, err => {
            if (err) {
                Logger.error(err);
                process.exit(1);
                return;
            }
            Logger.info(`
                ************************************************
                *  Server listening on port: ${config.port}    *
                ************************************************
            `);
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

startServer();