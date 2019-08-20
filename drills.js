function urlify(string) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ')
      output = output.concat('%20')
    else
      output = output.concat(string[i])
  }
  return output
}

function filterLessFive(array) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5)
      output.push(array[i]);
  }
  return output;
}

function largestSum(array) {
  let output = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (output < sum) {
        output = sum
      }
    }
  }

  return output;
}

module.exports = {
  urlify,
  filterLessFive,
  largestSum,
}