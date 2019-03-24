const {randomArray, printResult} = require('./helpers');

const randomArr = randomArray(10);

function selectionSort(arr, currentIndex = 0) {
  let tempValue;

  if (arr.length === 1 || currentIndex === arr.length - 1) {
    return arr;
  } else {
    const {min, minIndex} = findMin(currentIndex, arr);
    tempValue = arr[currentIndex];
    arr[currentIndex] = min;
    arr[minIndex] = tempValue;
    currentIndex += 1;
    return selectionSort(arr, currentIndex);
  }
}

function findMin(currentIndex, array) {
  let min = array[currentIndex];
  let minIndex;

  for (let i = currentIndex; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }

  return {min, minIndex};
}

printResult([...randomArr], selectionSort(randomArr));
