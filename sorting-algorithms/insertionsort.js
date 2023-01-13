const path = require('path');
const log = require(path.join(__dirname, '../log.js'));

const arr = [10, 7, 1, 2, 4, 9, 5, 6, 3, 8];

const insertionSort = (arr) => {
  for (i = 1; i < arr.length; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j] && j === 0) {
        arr.splice(0, 0, arr[i]);
        arr.splice(i + 1, 1);
        break;
      } else if (arr[i] < arr[j]) {
        continue;
      } else if (arr[i] > arr[j]) {
        arr.splice(j + 1, 0, arr[i]);
        arr.splice(i + 1, 1);
        break;
      }
    }
    arr.forEach((num, index) => {
      if (num === arr[i]) log(num, 'cyan');
      else if (num === arr[j]) log(num, 'red');
      else if (index < i && index > j) log(num, 'green');
      else log(num, 'white');
      log(' ');
    });
    console.log('');
  }
  return arr;
};

console.log(insertionSort(arr));
