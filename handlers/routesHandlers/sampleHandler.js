/*
 *  Title: Sample Handler
 *  Description: Sample Handler
 *  Author: Hasan Rana
 *  Date: 9/12/21
 */


// module scaffolding  
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
//  console.log(requestProperties)
 callback(200, {
     message: 'This is Sample url'
 })
}


module.exports = handler;
