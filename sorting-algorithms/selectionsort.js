const path = require('path');
const log = require(path.join(__dirname, '../log.js'));

const arr = [10, 7, 1, 2, 4, 9, 5, 6, 3, 8];

const selectionSort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    let lowest = arr[i];
    let indexOfLowest = i;
    for (j = i; j < arr.length; j++) {
      if (lowest > arr[j + 1]) {
        lowest = arr[j + 1];
        indexOfLowest = j + 1;
      }
      arr.forEach((num, index) => {
        if (num === arr[i]) log(num, 'cyan');
        else if (num === lowest) log(num, 'red');
        else if (index <= i) log(num, 'white');
        else if (index <= j) log(num, 'green');
        else log(num, 'white');
        log(' ');
      });
      console.log('');
    }
    arr[indexOfLowest] = arr[i];
    arr[i] = lowest;
  }

  return arr;
};

console.log(selectionSort(arr));
