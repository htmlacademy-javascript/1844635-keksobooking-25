const randNumber = function(min, max){
  if (min < 0 || min > max){
    return NaN;
  }else{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};

const baseCords = function(min, max, aftercomma){
  if (min < 0 || min > max){
    return NaN;
  }else{
    return Number((Math.random() * (max - min + 1) + min).toFixed(aftercomma));
  }
};

randNumber();
baseCords();
