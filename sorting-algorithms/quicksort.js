/*
                    [10, 7, 1, 2, 4, 9, 5, 6, 3, 8]
                    [3, 7, 1, 2, 4, 9, 5, 6, 8, 10]
                    [3, 7, 1, 2, 4, 9, 5, 6, 8, 10]
                    [3, 7, 1, 2, 4, 9, 5, 6, 8, 10]
                    [3, 7, 1, 2, 4, 9, 5, 6, 8, 10]
                    [3, 7, 1, 2, 4, 9, 5, 6, 8, 10]
                    [3, 7, 1, 2, 4, 6, 5, 8, 9, 10]
            [3, 7, 1, 2, 4, 6, 5]       [8]     [9, 10]
            [3, 6, 1, 2, 4, 5, 7]
            [3, 4, 1, 2, 5, 6, 7]
    [3, 4, 1, 2]        [5]     [6, 7]
    [1, 4, 2, 3]
    [1, 2, 4, 3]
[1]     [2]     [4, 3]
                [3, 4]

[1, 2, 3, 4, 5, 6, 7, ,8, 9, 10]
*/

const path = require('path');
const log = require(path.join(__dirname, '../log.js'));

const arr = [10, 7, 1, 2, 4, 9, 5, 6, 3, 8];

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let rightIndex = arr.length - 1;
  let leftIndex = 0;

  while (leftIndex != rightIndex) {
    let right = arr[rightIndex];
    let left = arr[leftIndex];

    if (right > left) {
      leftIndex++;
    } else if (left > right) {
      arr[rightIndex] = left;
      arr[leftIndex] = arr[rightIndex - 1];
      arr[rightIndex - 1] = right;
      rightIndex--;
    }
    console.log(...arr);
  }

  console.log(leftIndex, rightIndex);

  let leftArr = arr.slice(0, leftIndex);
  let rightArr = arr.slice(rightIndex + 1, arr.length);
  let pivot = arr[rightIndex];

  console.log(...leftArr);
  console.log(pivot);
  console.log(...rightArr);

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort(arr));
