/*
 *  Title: handle Routes
 *  Description: handle all routes
 *  Author: Hasan Rana
 *  Date: 9/12/21
 */

// dependencies
const {sampleHandler} = require('./handlers/routesHandlers/sampleHandler');
const {userHandler} = require('./handlers/routesHandlers/userHandler');

// module scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
}


module.exports = routes;

