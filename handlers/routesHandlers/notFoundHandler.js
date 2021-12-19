/*
 *  Title: Not Found Handler
 *  Description: 404 Not Found
 *  Author: Hasan Rana
 *  Date: 9/12/21
 */


// module scaffolding  
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
 callback(404, {
     message: 'Your requested URL was Not Found'
 })
}


module.exports = handler;

