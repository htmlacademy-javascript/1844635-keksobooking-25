const getRandNumber = (min, max) => {
  if (min >= 0 && min <= max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return NaN;
};

const getbaseCords = (min, max, aftercomma) => {
  if (min >= 0 && min <= max) {
    return Number((Math.random() * (max - min + 1) + min).toFixed(aftercomma));
  }
  return NaN;
};

getRandNumber();
getbaseCords();
