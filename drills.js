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
  const output = [];
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

function mergeArrays(first, second) {
  const output = [];

  let i = 0;
  let j = 0;

  while (output.length < first.length + second.length) {
    if (j === second.length || first[i] < second[j]) {
      output.push(first[i]);
      i = i + 1
    } else {
      output.push(second[j]);
      j = j + 1
    }
  }
  return output;
}

function removeCharacters(string, chars) {
  let output = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      if (string[i] !== chars[j])
        output = output + string[i]
    }
  }
  return output;
}

function products(array) {
  const output = [];

  for(let i = 0; i < array.length; i++) {
    let n = array[i]
    for(let j = 0; j < array.length; j++) {
      if (i !== j) {
        n = n * i
      }
    }
    output.push(n)
  }
  return output;
}

function offSwitch(array) {}

function rotateString(str1, str2) {}

module.exports = {
  urlify,
  filterLessFive,
  largestSum,
  mergeArrays,
  removeCharacters,
  products,
  offSwitch,
  rotateString
}