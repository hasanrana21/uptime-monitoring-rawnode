/*
 *  Title: User Handler
 *  Description: Handler to handle user related routes
 *  Author: Hasan Rana
 *  Date: 9/12/21
 */

// dependencies
const data = require("../../lib/data");
const { hash } = require("../../helpers/utilities");
const { parseJSON } = require("../../helpers/utilities");

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
  //  console.log(requestProperties.method)
  const acceptedMethod = ["post", "get", "put", "delete"];
  if (acceptedMethod.indexOf(requestProperties.method) > -1) {
    handler._users[requestProperties.method](requestProperties, callback);
  } else {
    callback(405);
  }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
  const firstName =
    typeof requestProperties.body.firstName === "string" &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : false;

  const lastName =
    typeof requestProperties.body.lastName === "string" &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : false;

  const phone =
    typeof requestProperties.body.phone === "string" &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone
      : false;

  const password =
    typeof requestProperties.body.password === "string" &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : false;

  const tosAgreement =
    typeof requestProperties.body.tosAgreement === "boolean" &&
    requestProperties.body.tosAgreement
      ? requestProperties.body.tosAgreement
      : false;

  if (firstName && lastName && phone && password && tosAgreement) {
    // console.log(firstName, lastName, phone, password);
    // Make sure the user doesn't exist
    data.read("users", phone, (err1) => {

      if (err1 === null) {
        const userObject = {
          firstName,
          lastName,
          phone,
          password: hash(password),
          tosAgreement,
        };

        // Store the user to db
        data.create("users", phone, userObject, (err2) => {
          console.log('this is error2', err2)
          if (!err2) {
            console.log('user created successfully')
            callback(200, {
              message: "User created successfully!",
            });
          } else {
            callback(409, {
              error: "Could not create user!",
            });
          }
        });
      } else {
        callback(500, {
          error: "problem in server side",
        });
      }
    });
  } else {
    callback(404, {
      error: "You have a problem in your request",
    });
  }
};

handler._users.get = (requestProperties, callback) => {
  // Check the phone number if valid
  const phone =
    typeof requestProperties.queryStringObject.phone === "string" &&
    requestProperties.queryStringObject.phone.trim().length === 11
      ? requestProperties.queryStringObject.phone
      : false;


  if(phone){
    /* Lookup the user */
    data.read('users', phone, (err, u) => {
      const user = { ...parseJSON(u) };
      if(!err && user){
        delete user.password;
        callback(200, user);
      } else{
        callback(404, {
          error: 'Requested user was not found'
        });
      }
    });
  } else{
    callback(404, {
      error: 'Requested user was not found'
    });
  }
};

handler._users.put = (requestProperties, callback) => {};

handler._users.delete = (requestProperties, callback) => {};

module.exports = handler;
