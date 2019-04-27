"use strict";

var _interopRequireDefault = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.setEnvironment = setEnvironment;

require("core-js/modules/es6.regexp.to-string");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

/**
 * Determines the current environment and sets the appropriate variables
 * @param {Express App} app 
 */
function setEnvironment(app) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
}
/**
 * Used to set development environment variables
 * @param {Express App} app 
 */


function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
  process.env.TOKEN_SECRET = 'my-development-secret';
  app.use(_bodyParser.default.json()); // Allows parsing JSON from the client

  app.use((0, _morgan.default)('dev')); // Log HTTP Requests to the node console (for debugging purposes)

  app.use((0, _cors.default)()); // Enable Cross Origin Requests, since Vue.JS is on a different origin
}
/**
 * Used to set production environment variables
 * @param {Express App} app 
 */


function setProdEnv(app) {
  process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
  process.env.TOKEN_SECRET = 'my-production-secret';
  app.use(_bodyParser.default.json());
  app.use(_express.default.static(__dirname + '/../../dist'));
}