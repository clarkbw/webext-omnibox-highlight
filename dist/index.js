'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// https://developer.chrome.com/extensions/omnibox#type-SuggestResult
function match$1() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var match = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return text.replace(RegExp(match, 'g'), '<match>' + match + '</match>');
}

function url$1() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var match = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return text.replace(RegExp(match, 'g'), '<url>' + match + '</url>');
}

function dim$1() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var match = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return text.replace(RegExp(match, 'g'), '<dim>' + match + '</dim>');
}

var isChrome = navigator.userAgent.indexOf('Firefox') === -1;

// Firefox doesn't support any of the XML syntax that Chrome supports so
// these functions are all just dummy functions
function match$2(text) {
  return text;
}

function url$2(text) {
  return text;
}

var match = isChrome ? match$1 : match$2;
var url = isChrome ? url$1 : url$2;
var dim = isChrome ? dim$1 : url$2;

exports.match = match;
exports.url = url;
exports.dim = dim;
//# sourceMappingURL=index.js.map
