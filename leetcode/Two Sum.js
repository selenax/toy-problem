// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
    for(var x = 0; x < nums.length; x++) {
      for(var y = x + 1; y < nums.length; y++) {
        console.log(nums[x], nums[y]);
        if(nums[x] + nums[y] === target) {
          return [x, y];
          }
         }
        }
      }
    

var nums = [2, 7, 11, 15]

console.log(twoSum(nums, 17)) //[ 0, 3 ]