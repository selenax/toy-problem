// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

//refactor
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

//refactor
function reverse(str) {
  let reversed = '';
  for(let char of str) {
    //reversed = A + ''
    //BA = B + A
    //CBA = C + BA
    reversed = char + reversed;
  }
  return reversed
}

console.log(reverse('ABC'))

module.exports = reverse;
