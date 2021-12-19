/*
 *  Title: Utilities
 *  Description: handle utilities
 *  Author: Hasan Rana
 *  Date: 9/12/21
 */

// dependencies
const crypto = require("crypto");
const environment = require("./environment");

// module scaffolding
const utilities = {};

utilities.parseJSON = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch {
    output = {};
  }

  return output;
};

// hash string
utilities.hash = (str) => {
    if (typeof str === 'string' && str.length > 0) {
        console.log(environment, process.env.NODE_ENV);
        const hash = crypto.createHmac('sha256', environment.secretKey).update(str).digest('hex');
        return hash;
    }
    return false;
};

module.exports = utilities;
