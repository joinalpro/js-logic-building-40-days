/* Write a function that finds and prints the maximum element in an array of numbers.
 input: Array of numbers
 Return: Biggest numbers
 Example: [3, 6, 1, 8, 3, 7] => 8
 Do not use Array Sort
*/

function maxArray(arr) {
  let maxNumber = arr[0];
  for (let ar of arr) {
    if (ar > maxNumber) {
      maxNumber = ar;
    }
  }
  return maxNumber;
}

let myArray = [3, 6, 1, 8, 3, 7];
console.log(maxArray(myArray));
