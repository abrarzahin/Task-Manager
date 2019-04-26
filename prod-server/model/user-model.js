"use strict";

var _interopRequireDefault = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _stringUtil = require("../utilities/string-util");

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var userSchema = new _mongoose.default.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true); // Returns a transient field client-side without actually adding it to the schema

userSchema.virtual('fullName').get(function () {
  var first = _stringUtil.StringUtil.capitalize(this.first.toLowerCase());

  var last = _stringUtil.StringUtil.capitalize(this.last.toLowerCase());

  return "".concat(first, " ").concat(last);
}); // Static methods that can be called from anywhere (e.g., User.passwordMatches)

userSchema.statics.passwordMatches = function (password, hash) {
  return _bcryptNodejs.default.compareSync(password, hash);
}; // Runs validation before saving a user


userSchema.pre('save', function (next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  var unsafePassword = this.password;
  this.password = _bcryptNodejs.default.hashSync(unsafePassword); // Will encrypt the user's password

  next();
});

var _default = _mongoose.default.model('user', userSchema);

exports.default = _default;