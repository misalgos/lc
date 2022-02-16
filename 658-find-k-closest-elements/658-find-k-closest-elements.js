/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length-1;
    while(left < right) {
        let mid = Math.floor((left + right)/2);
        if(x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    const result = [];
    for(let i = left; i < left+k; i++) {
        result.push(arr[i]);
    }
    return result;
};