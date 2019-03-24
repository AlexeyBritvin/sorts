function randomArray(total) {
  let arr = [];

  for (let i = 0; i <= total; i++) {
    arr.push(i);
  }

  arr = shuffle(arr, arr.length - 1);

  return arr;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(arr, lastIndex) {
  if (arr.length === 1 || lastIndex === 0) {
    return arr;
  } else {
    let randomIndex = getRandomInt(0, lastIndex);
    let tempValue;

    tempValue = arr[lastIndex];
    arr[lastIndex] = arr[randomIndex];
    arr[randomIndex] = tempValue;
    lastIndex -= 1;

    return shuffle(arr, lastIndex);
  }
}

module.exports = {
  randomArray
};
