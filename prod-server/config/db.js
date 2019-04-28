"use strict";

import _Object$defineProperty from "C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property";

_Object$defineProperty(exports, "__esModule", {
  value: true
});

import _interopRequireDefault from "C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault";
exports.connectToDB = connectToDB;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function connectToDB() {
  _mongoose2.default.connect(process.env.DB_URL, {
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