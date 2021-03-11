
exports.min = function min (array) {
  if (!arguments.length || !array.length) return 0;

  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if (!arguments.length || !array.length) return 0;

  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if (!arguments.length || !array.length) return 0;

  let result = 0;
  for (let i = 0; i < array.length; i++) {
  result = result + array[i];
  }

  return (result / array.length);
}
