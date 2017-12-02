exports.sum = function (n) {
  return n + n;
};

exports.getCentury = function (year) {
  return Math.floor(year / 100) + 1;
};

exports.arrayToObject = function (array) {
  var object = {};

  for (var i = 0; i < array.length; i++) {
    var prop = array[i];

    object[prop] = array[++i];
  }

  return object;
};