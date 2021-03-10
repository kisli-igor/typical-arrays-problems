
exports.min = function min (array) {
  if (Array.isArray(array) && array.length){
      let min = array[0];
      for (let c in array){
        if (min > array[c]) min = array[c];
      }
      return min;
    } else return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length){
      let max = array[0];
      for (let c in array){
        if (max < array[c]) max = array[c];
      } return max;
    }
    else return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length){
      let avg = 0;
      for (let c in array){
        avg += array[c];
      }
      return +(avg / array.length).toFixed(2);
    }else return 0;
}
