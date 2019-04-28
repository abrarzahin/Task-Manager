"use strict";

var _interopRequireDefault = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.generateJWT = generateJWT;
exports.requireLogin = requireLogin;
exports.decodeToken = decodeToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

/**
 * Used to perform all authentication-related operations
 * For example, generating a token, getting the username, etc.
 */
function generateJWT(user) {
  var tokenData = {
    username: user.username,
    id: user._id
  };
  return _jsonwebtoken.default.sign({
    user: tokenData
  }, process.env.TOKEN_SECRET);
}

function requireLogin(req, res, next) {
  var token = decodeToken(req);

  if (!token) {
    return res.status(401).json({
      message: 'You must be logged in.'
    });
  }

  next();
}
/**
 * Will verify that the token came from this application (using secret). Then,
 * will decode it and grab the signed data (username, etc.) and return decoded token
 * @param {HTTP Request} req 
 */


function decodeToken(req) {
  var token = req.headers.authorization || req.headers['authorization'];

  if (!token) {
    return null;
  }

  try {
    return _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET);
  } catch (error) {
    return null;
  }
}