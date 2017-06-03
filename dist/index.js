'use strict';

// Currently Firefox auto-highlights but Chrome requires this XML syntax
function highlight$2() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var match = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return text.replace(match, '<match>' + match + '</match>');
}

var isChrome = navigator.userAgent.indexOf('Firefox') === -1;

function highlight$3(text) {
  return text;
}

var highlight$$1 = isChrome ? highlight$2 : highlight$3;

module.exports = highlight$$1;
