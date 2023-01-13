/*
                       [10, 7, 1, 2, 4, 9, 5, 6, 3, 8]
            [10, 7, 1, 2, 4]                         [9, 5, 6, 3, 8]
        [10, 7, 1]          [2, 4]             [9, 5, 6]          [3, 8]
    [10, 7]      [1]      [2]    [4]       [9, 5]     [6]      [3]    [8]
  [10]    [7]    [1]      [2]    [4]      [9]   [5]   [6]      [3]    [8]
-------------------------------------------------------------------------------
    [7, 10]      [1]      [2]    [4]       [5, 9]     [6]      [3]    [8]
        [1, 7, 10]          [2, 4]             [5, 6, 9]          [3, 8]
            [1, 2, 4, 7, 10]                         [3, 5, 6, 8, 9]
                      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

const path = require('path');
const log = require(path.join(__dirname, '../log.js'));

const arr = [10, 7, 1, 2, 4, 9, 5, 6, 3, 8];

const mergeSort = (arr) => {
  if (arr.length == 1) return arr;

  let left = arr.slice(0, Math.round(arr.length / 2));
  let right = arr.slice(Math.round(arr.length / 2), arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  console.log('----------------------------------------');

  while (result.length < left.length + right.length) {
    console.log(result.length, left.length + right.length);

    if (leftIndex === left.length) {
      result = [...result, ...right.slice(rightIndex)];
    } else if (rightIndex === right.length) {
      result = [...result, ...left.slice(leftIndex)];
    } else if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }

    console.log('left:' + left);
    console.log('right:' + right);
    console.log('result:' + result);
  }

  return result;
};

console.log(mergeSort(arr));
