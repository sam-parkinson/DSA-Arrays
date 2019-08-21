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
    let flag = false
    for (let j = 0; j < chars.length; j++) {
      if (string.charAt(i) === chars.charAt(j))
        flag = true
    }
    if (flag === false)
      output = output + string[i]
  }
  return output;
}

function products(array) {
  const output = [];
  // this isn't working for some reason
  for(let i = 0; i < array.length; i++) {
    let n = array[i]
    for(let j = 0; j < array.length; j++) {
      if (i !== j) {
        n = n * array[j]
      }
    }
    output.push(n)
  }
  return output;
}

function offSwitch(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push([]);
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        for (let k = 0; k < array.length; k++) {
          output[k][j] = 0;
        }
        for (let l = 0; l < array[i].length; l++) {
          output[i][l] = 0;
        }
      }
      else if (output[i][j] !== 0) {
        output[i][j] = 1;
      }
    }
  }
  return output;
}

function rotateString(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    let rotated = '';
    for(let j = 0; j < str2.length; j++) {
      if (j + i < str2.length) {
        rotated = rotated + str2[j + i]
      } else {
        rotated = rotated + str2[(j + i) - str2.length]
      }
    }
    if (str1 === rotated) {
      return true
    }
  }
  return false
}

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