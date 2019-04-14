"use strict";

var _interopRequireDefault = require("C:\\Users\\Abrar Zahin\\Desktop\\taskman\\node_modules\\@babel\\runtime-corejs2/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = require("./routes");

var app = (0, _express.default)();
(0, _routes.registerRoutes)(app);
app.get('/', function (req, res) {
  return res.send('Hello World!');
});
app.listen(3000, function () {
  return console.log("This app listening on port 3000!");
});