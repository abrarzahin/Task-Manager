"use strict";

import _Object$defineProperty from "C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property";

_Object$defineProperty(exports, "__esModule", {
  value: true
});

import _interopRequireDefault from "C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/esm/interopRequireDefault";
exports.index = index;

var _stringUtil = require("../../utilities/string-util");

var _userModel = require("../../model/user-model");

var _userModel2 = _interopRequireDefault(_userModel);

// User Register
function index(req, res) {
  var validation = validateIndex(req.body);

  if (!validation.isValid) {
    return res.status(400).json({
      message: validation.message
    });
  }

  var user = new _userModel2.default({
    username: req.body.username,
    password: req.body.password,
    first: req.body.first,
    last: req.body.last
  });
  user.save(function (error) {
    if (error) {
      // Mongoose Error Code 11000 means validation failure (username taken)
      if (error.code === 11000) {
        return res.status(403).json({
          message: 'Username is already taken'
        });
      }

      return res.status(500).json();
    }

    return res.status(201).json();
  });
}

function validateIndex(body) {
  var errors = '';

  if (_stringUtil.StringUtil.isEmpty(body.username)) {
    errors += 'Username is required. ';
  }

  if (_stringUtil.StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }

  if (_stringUtil.StringUtil.isEmpty(body.first)) {
    errors += 'First name is required. ';
  }

  if (_stringUtil.StringUtil.isEmpty(body.last)) {
    errors += 'Last name is required. ';
  }

  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}