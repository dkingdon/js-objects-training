/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```
*/

/* spent a LOT of time on this and couldnt get it to work. needed to look at the solution, understand now how it is done, but still higher than my level. :(  was working with this option below but couldnt get it to work. */

// var letterCount = function(word) {
//   var obj = {};
//   var arr = word.split('') // ['a','p','p','l','e']
//
//   arr.forEach(function(char){
//       if (obj[char] = obj[char]) {
//           obj[char] += 1;
//       }
//       else {
//           obj[char] = 1;
//       }
//       return obj;
//   });
// }


function letterCount(string) {
 var count = {};
 string.split('').forEach(function(el) {
   count[el] = count[el] ? count[el] + 1 : 1;
 });
 return count;
}
letterCount("apple");


  // use .split to create array of objects, create
  // Look up dynamically adding key value pairs brackets
// maybe a while loop?
/*
  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
