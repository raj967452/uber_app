'use strict';

const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const Logger = require('./logger');

const appLoader = async (expressApp) => {
    try {
        const mongoConnection = await mongooseLoader();
        Logger.info('DB loaded and connected!');

        await expressLoader({ app: expressApp });
        Logger.info('Express loaded');
    } catch (error) {
        console.log(error);
    }
}

module.exports = appLoader;