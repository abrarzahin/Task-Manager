"use strict";

var _interopRequireDefault = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.StringUtil = void 0;

var _classCallCheck2 = _interopRequireDefault(require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/esm/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/esm/createClass"));

/**
 * Performs common operations for strings, such as checking
 * if the string is empty or null
 */
var StringUtil =
/*#__PURE__*/
function () {
  function StringUtil() {
    (0, _classCallCheck2.default)(this, StringUtil);
  }

  (0, _createClass2.default)(StringUtil, null, [{
    key: "isEmpty",
    value: function isEmpty(value) {
      return !value || !value.trim();
    }
  }, {
    key: "capitalize",
    value: function capitalize(word) {
      return word.charAt(0).toUpperCase();
    }
  }]);
  return StringUtil;
}();

exports.StringUtil = StringUtil;