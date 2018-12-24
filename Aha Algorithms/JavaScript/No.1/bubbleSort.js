// @param array 数组
var testArr = [8, 100, 50, 22, 15, 6, 1, 1000, 999, 0];
function bubbleSort (arr) {
  if (arr.length <= 1) return arr
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j+1]){
        let t = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = t
      }
    }
  }
  return arr
}
bubbleSort(testArr)