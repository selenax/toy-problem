// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

//input: array of objects, and key
//output: return true if all obj has key and value of key is truthy, else return false

function truthCheck(collection, pre) {
  for (let key in collection) {
    if (
      !collection[key].hasOwnProperty(pre) &&
      !Boolean(collection[key][pre])
    ) {
      return false;
    }
  }
  return true;
}

//refactor:
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

console.log(
  truthCheck(
    [{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }],
    'sex'
  )
);
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); //true
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' }
    ],
    'sex'
  )
); //should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
// truthCheck([{"single": "yes"}], "single") should return true
// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
// truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
// truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
