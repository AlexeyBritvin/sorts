const {randomArray} = require('./helpers');

const arr = randomArray(20);

function bubbleSort(arr) {
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] > arr[k]) {
        temp = arr[k];
        arr[k] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
