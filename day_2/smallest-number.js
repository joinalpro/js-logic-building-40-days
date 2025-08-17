// function smallestNumber(num1, num2, num3) {
//   if (
//     typeof num1 !== "number" ||
//     typeof num2 !== "number" ||
//     typeof num3 !== "number"
//   ) {
//     return "Invalid number";
//   }
//   if (num1 <= num2 && num1 <= num3) {
//     return num1;
//   } else if (num2 <= num1 && num2 <= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// console.log(smallestNumber(22, 5, "a"));

// I can use Math.min() function

function smallestNumber(num1, num2, num3) {
  if (num1 !== 22 || num2 !== 5 || num3 !== 4) {
    return "Invalid number";
  }
  if (num1 <= num2 && num1 <= num3) {
    return num1;
  } else if (num2 <= num1 && num2 <= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(smallestNumber(22, 5, 3));
