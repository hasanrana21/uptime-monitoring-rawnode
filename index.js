/*
 *  Title: Uptime Monitoring Application
 *  Description: a RESTful API to monitor up or down time of user define links
 *  Author: Hasan Rana
 *  Date: 9/12/21
 */

// dependencies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environment");
const data = require("./lib/data");

// testing file system---

/* testing create file system */
// data.create('test', 'newFile', {name: 'Bangladesh', description: 'Our Home Town'}, (err) => {
//     console.log(`error was`, err)
// })

/* testing read file system */
// data.read('test', 'newFile', (err, data) => {
//     console.log(err, data)
// })

/* testing updating file system */
    // data.update("test", "newFile", {name: 'Francs', language: 'French'}, (err) => {
    //     console.log(err);
    // });

/* testing deleting file system */
// data.delete("test", "newFile", (err) => {
//     console.log(err);
// });


// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
