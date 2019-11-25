const token = require('express-jwt');
const config = require('../../config');

/*
* We are assuming that the JWT will come in a header with the form
* Authorization: Bearer ${JWT}
* But it could come in a query parameter with the name that you want like
* GET https://domain.com/stats?apiKey=${JWT}
*/
const getTokenFromHeader = req => {
    const requestHeader = req.headers.authorization;
    if(requestHeader && (requestHeader.split(' ')[0] ==='Token' || requestHeader.split(' ')[0] ==='Bearer')){
        return requestHeader.split(' ')[1];
    }
    return null;
}

const isAuth = token({
    secret: config.jwtSecret,
    userProperty: 'token',
    getToken: getTokenFromHeader
});

module.exports = isAuth;
