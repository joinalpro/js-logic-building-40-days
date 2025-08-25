/* Write a function that checks if a string is palindrome or not 
Input: A String
Return: boolean, true if Palindrome and false if not palindrome
A palindrome is a word that reads the same backward or forward
Example: 
    - madam
    - level
*/

// Solution
function palindrome(str) {
  let urWords = "";
  for (let i = str.length - 1; i >= 0; i--) {
    urWords += str[i];
  }
  if (urWords === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("madam"));
