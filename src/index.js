
module.exports = function longestConsecutiveLength(array) {
  var maxLength = 0;
  var currentLength = 1;
  var maxIndex = 0;
  array.sort( (a, b) => a-b );
  for (i = 1; i <= array.length; i++) {
    if (array[i-1] == array[i]) {
      continue;
    }
    if (currentLength > maxLength) {
      maxLength = currentLength;
      maxIndex = i;
    }
    if (array[i-1] + 1 == array[i]) {
      currentLength++;
    } 
    else {
      currentLength = 1;
    }
  }
  return maxLength;
}
