"use strict";

import _Object$defineProperty from "C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property";

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.index = index;

function index(req, res) {
  return res.status(200).json({
    message: 'Hello World'
  });
}