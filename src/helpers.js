function randomArray(total) {
  const arr = [];

  for (let i = 0; i <= total; i++) {
    arr.push(getRandomInt(0, total));
  }

  return arr;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
  randomArray
};
