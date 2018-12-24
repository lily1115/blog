var quickSort = function(arr) {
  if (arr.length <= 1) { return arr };
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var leftArr = [];
  var rightArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i])
    }else {
      rightArr.push(arr[i])
    }
  };
  return quickSort(leftArr).concat([pivot],quickSort(rightArr))
  
}
var arr = [84,82,46,43,15,23,43]
quickSort(arr)