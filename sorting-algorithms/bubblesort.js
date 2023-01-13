const path = require('path');
const log = require(path.join(__dirname, '../log.js'));

const arr = [10, 7, 1, 2, 4, 9, 5, 6, 3, 8];

const bubbleSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log('-----Switch-----');
      }
      arr.forEach((num) => {
        if (num === arr[j]) log(num, 'cyan');
        else if (num === arr[j + 1]) log(num, 'red');
        else log(num, 'white');
        log(' ');
      });
      console.log('');
    }
  }
  return arr;
};

console.log(bubbleSort(arr));
