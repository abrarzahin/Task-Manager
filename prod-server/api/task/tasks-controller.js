"use strict";

var _interopRequireWildcard = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

var _userModel = _interopRequireDefault(require("../../model/user-model"));

var _taskModel = _interopRequireDefault(require("../../model/task-model"));

var _moment = _interopRequireDefault(require("moment"));

var auth = _interopRequireWildcard(require("../../services/auth-service"));

function index(req, res) {
  return res.status(200).json();
}

function create(req, res) {
  return res.status(201).json();
}

function update(req, res) {
  return res.status(204).json();
}

function remove(req, res) {
  return res.status(204).json();
}

function show(req, res) {
  return res.status(200).json();
}