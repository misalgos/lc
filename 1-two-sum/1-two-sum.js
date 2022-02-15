/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const indices = new Map();
  for(let i = 0; i < nums.length; i++) {
    if(indices.has(target-nums[i])) {
      return [indices.get(target-nums[i]), i];
    } else {
      indices.set(nums[i], i);
    }
  }
};