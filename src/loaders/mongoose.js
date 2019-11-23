const mongoose = require('mongoose');
const config = require('../config');

module.exports = async fetchDBData => {
    try {
        const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        return connection.connection.db;
    } catch (error) {
        console.log(error);
    }
}