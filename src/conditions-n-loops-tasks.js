/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

function isPositive(number) {
  return number >= 0;
}

function getMaxNumber(a, b, c) {
  let maxNumber = null;
  if (a > b) {
    maxNumber = a;
    if (a < c) {
      maxNumber = c;
    }
  } else {
    maxNumber = b;
    if (b < c) {
      maxNumber = c;
    }
  }
  return maxNumber;
}

function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

function isIsoscelesTriangle(a, b, c) {
  if (a === b && a + b > c && c !== 0) return true;
  if (a === c && a + c > b && b !== 0) return true;
  if (b === c && b + c > a && b !== 0) return true;
  return false;
}

function convertToRomanNumerals(num) {
  const string = String(num);
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string.length === 2 && i === 0) {
      for (let k = +string[i]; k > 0; k -= 1) {
        result += 'X';
      }
    } else if (+string[i] < 4 && +string[i] >= 1) {
      for (let j = +string[i]; j > 0; j -= 1) {
        result += 'I';
      }
    } else if (string[i] === '4') {
      result += 'IV';
    } else if (+string[i] < 9 && +string[i] > 4) {
      result += 'V';
      for (let c = +string[i]; c > 5; c -= 1) {
        result += 'I';
      }
    } else if (string[i] === '9') {
      result += 'IX';
    }
  }
  return result;
}

function convertNumberToString(numberStr) {
  const arr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'point',
    'minus',
  ];
  const result = [];
  let string = '';
  for (let i = 0; i < numberStr.length; ) {
    switch (numberStr[i]) {
      case '0':
        result[i] = `${arr[0]}`;
        break;
      case '1':
        result[i] = `${arr[1]}`;
        break;
      case '2':
        result[i] = `${arr[2]}`;
        break;
      case '3':
        result[i] = `${arr[3]}`;
        break;
      case '4':
        result[i] = `${arr[4]}`;
        break;
      case '5':
        result[i] = `${arr[5]}`;
        break;
      case '6':
        result[i] = `${arr[6]}`;
        break;
      case '7':
        result[i] = `${arr[7]}`;
        break;
      case '8':
        result[i] = `${arr[8]}`;
        break;
      case '9':
        result[i] = `${arr[9]}`;
        break;
      case '.':
        result[i] = `${arr[10]}`;
        break;
      case ',':
        result[i] = `${arr[10]}`;
        break;
      case '-':
        result[i] = `${arr[11]}`;
        break;
      default:
        break;
    }
    if (i === 0) {
      string = result[i];
    } else {
      string += ` ${result[i]}`;
    }
    i += 1;
  }
  return string;
}

function isPalindrome(str) {
  let string = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    string += str[i];
  }
  return string === str;
}

function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) result = i;
  }
  return result;
}

function isContainNumber(num, digit) {
  const string = String(num);
  const digitStr = String(digit);
  let result = false;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === digitStr) result = true;
  }
  return result;
}

function getBalanceIndex(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) return i;
  }
  return -1;
}

function getSpiralMatrix(size) {
  let counter = 1;
  const maxValue = size ** 2;
  let minCol = 0;
  let minRow = 0;
  let maxCol = size - 1;
  let maxRow = size - 1;
  const arr = new Array(size);

  for (let c = 0; c < size; c += 1) {
    arr[c] = new Array(size);
  }

  while (counter <= maxValue) {
    for (let i = minCol; i <= maxCol; i += 1) {
      arr[minRow][i] = counter;
      counter += 1;
    }
    minRow += 1;

    for (let j = minRow; j <= maxRow; j += 1) {
      arr[j][maxCol] = counter;
      counter += 1;
    }
    maxCol -= 1;

    for (let k = maxCol; k >= minCol; k -= 1) {
      arr[maxRow][k] = counter;
      counter += 1;
    }
    maxRow -= 1;

    for (let n = maxRow; n >= minRow; n -= 1) {
      arr[n][minCol] = counter;
      counter += 1;
    }
    minCol += 1;
  }
  return arr;
}

function rotateMatrix(matrix) {
  const newMatrix = new Array(matrix.length);
  const paramMatrix = matrix;

  for (let i = 0; i < paramMatrix.length; i += 1) {
    newMatrix[i] = new Array(paramMatrix.length);
    for (let k = 0; k < paramMatrix.length; k += 1) {
      newMatrix[i][k] = paramMatrix[i][k];
    }
  }

  for (let j = 0; j < matrix.length; j += 1) {
    for (let i = 0; i < matrix.length; i += 1) {
      paramMatrix[i][paramMatrix.length - j - 1] = newMatrix[j][i];
    }
  }

  return paramMatrix;
}

function sortByAsc(arr) {
  const arrToSort = arr;
  const n = arr.length;
  for (let i = 0; i < n - 1; i += 1) {
    let minIdx = i;
    for (let j = i + 1; j < n; j += 1) {
      if (arrToSort[j] < arrToSort[minIdx]) {
        minIdx = j;
      }
    }
    const temp = arrToSort[i];
    arrToSort[i] = arrToSort[minIdx];
    arrToSort[minIdx] = temp;
  }
  return arrToSort;
}

function shuffleChar(str, iterations) {
  let result = str;
  for (let j = iterations; j >= 1; j -= 1) {
    let leftSide = '';
    let rightSide = '';
    for (let k = 0; k < str.length; k += 1) {
      if (k % 2 !== 0) {
        rightSide += result[k];
      } else {
        leftSide += result[k];
      }
    }
    result = leftSide + rightSide;
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(String(number), Number);
  let pivotIndex = -1;

  for (let i = arr.length - 2; i > 0; i -= 1) {
    if (arr[i + 1] > arr[i]) {
      pivotIndex = i;
      break;
    }
  }

  if (pivotIndex === -1) {
    return number;
  }

  let swapIndex = -1;

  for (let j = arr.length - 1; j > pivotIndex; j -= 1) {
    if (arr[j] > arr[pivotIndex]) {
      swapIndex = j;
      break;
    }
  }

  [arr[pivotIndex], arr[swapIndex]] = [arr[swapIndex], arr[pivotIndex]];

  const sorted = arr.splice(pivotIndex + 1).sort((a, b) => a - b);

  return Number(arr.concat(sorted).join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
