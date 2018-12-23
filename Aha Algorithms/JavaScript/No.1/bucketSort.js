// @param array 数组
// @param range 桶的数量
var testArr = [5, 3, 5, 2, 8];
function bucketSort (arr, range) {
  if (arr.length <= 1) {
　　 return arr;
　}
 
  var buckets = new Array(range);
  for (let i = 0; i < buckets.length; i++) {
      buckets[i] = 0;
  }

  for (let i = 0; i <= arr.length; i++) {
    let e = arr[i]
    buckets[e]++
  }

  for (i = 0; i <= range; i++) {
    for (j = 1; j <= buckets[i]; j++) {
      console.log(i)
    }
  }
}
bucketSort(testArr, 10)