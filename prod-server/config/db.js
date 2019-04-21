"use strict";

var _interopRequireDefault = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.connectToDB = connectToDB;

var _mongoose = _interopRequireDefault(require("mongoose"));

function connectToDB() {
  _mongoose.default.connect(process.env.DB_URL, {
    useNewUrlParser: true
  }, function (error) {
    if (error) {
      console.log('Unable to connect to database');
      throw error;
    } else {
      console.log('Connected to MongoDB!');
    }
  });
}