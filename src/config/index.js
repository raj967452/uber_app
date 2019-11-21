import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("*  Couldn't find .env file  *");
}

export default {
    /* Your favorite port */
    port: parseInt(process.env.PORT, 3000),

    /* That long string from mlab */
    databaseURL: process.env.MONGODB_URI,

    /* Used by winston logger */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    /* API configs */
    api: {
        prefix: '/taxiapi'
    }

}