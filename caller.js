function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./callee.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./callee.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.callee);
    global.caller = mod.exports;
  }
})((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object" ? globalThis : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : this, function (_callee) {
  "use strict";

  _callee = _interopRequireDefault(_callee);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // Please do not use `typeof` keyword, it's a bug in babel.
  console.log(_callee["default"]); // Expect a string but got a Module object.
});