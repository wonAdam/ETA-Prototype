"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchArticles = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = _interopRequireDefault(require("./types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var fetchArticles = function fetchArticles(start) {
  return function (dispatch, getState) {
    dispatch({
      type: _types["default"].FETCH_ARTICLES,
      payload: {}
    });

    _axios["default"].get("https://every-time-archiver-api.herokuapp.com/api/v1/articles/382283?start=".concat(start, "&end=").concat(start + 9)).then(function (response) {
      var articles = response.data.data;
      dispatch({
        type: _types["default"].FETCH_ARTICLES,
        payload: articles
      });
    });
  };
};

exports.fetchArticles = fetchArticles;