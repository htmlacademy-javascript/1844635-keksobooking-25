let randNumberint = function(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randNumberfloat = function(max, min, aftercomma){
    if (min < 0){
        return NaN;
    }else{
    return Math.floor((Math.random() * (max - min) + min) * 10**aftercomma)/(10**aftercomma);
    }
}