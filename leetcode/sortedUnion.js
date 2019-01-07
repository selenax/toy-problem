// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

//n arrays in argument
//keep original order
//final array should have no duplicates
function uniteUnique(arr) {
  let arg = [...arguments].flat();
  let result = [];
  arg.filter(function(value) {
    if (!result.includes(value)) {
      result.push(value);
    }
  });
  return result;
}

//refactor

function uniteUnique(arr) {
  let arr1 = [...arguments].flat();
  // console.log(arr1)
  return [...new Set(arr1)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
