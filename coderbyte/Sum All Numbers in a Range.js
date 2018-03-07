// Sum All Numbers in a Range


// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.



function sumAll(arr) {
  var sum = 0;
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
    for(var x = min; x <= max; x++) {
      sum += x;
    }
    return sum;
  }
  
  sumAll([1, 4]);