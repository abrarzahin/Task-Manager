"use strict";

var _Object$defineProperty = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.index = index;

var _stringUtil = require("../../utilities/string-util");

// User Register
function index(req, res) {
  var validation = validateIndex(req.body);

  if (!validation.isValid) {
    return res.json({
      message: validation.message
    });
  }

  var user = {
    username: req.body.username.toLowerCase(),
    password: req.body.password
  };
  console.log(user);
  return res.json();
}

function validateIndex(body) {
  var errors = '';

  if (_stringUtil.StringUtil.isEmpty(body.username)) {
    errors += 'Username is required. ';
  }

  if (_stringUtil.StringUtil.isEmpty(body.password)) {
    errors += 'Password is required. ';
  }

  return {
    isValid: _stringUtil.StringUtil.isEmpty(errors),
    message: errors
  };
}