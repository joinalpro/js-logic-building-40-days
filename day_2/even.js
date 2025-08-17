// function givenNumber(number) {
//   if (number <= 0) {
//     return "please give a int positive number";
//   }
//   if (number % 2 === 0) {
//     return "even number";
//   } else {
//     return "odd number";
//   }
// }

// ternary operator

function givenNumber(number) {
  return number % 2 === 0 ? "even" : "odd";
}

console.log(givenNumber(-1));
console.log(givenNumber(157));
console.log(givenNumber(10));
