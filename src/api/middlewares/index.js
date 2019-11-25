const currentUser = require('./currentUser');
const isAuth = require('./isAuth');

const restApiInstance = {
    currentUser: currentUser,
    isAuth: isAuth
};

module.exports = restApiInstance;