// 27. Remove Element

// Given an array and a value, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

var removeElement = function(nums, val) {
    var count = 0;
    for(var x = 0; x < nums.length; x++) {
        if(nums[x] !== val) {
            nums[count] = nums[x];
            count++;
        }
    } 
    return count;
};
var nums = [3,2,2,3]
console.log(removeElement(nums, 3))