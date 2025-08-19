// 0!:1
// The factorial of a number is a mathematic concept used in many areas like counting possibilities and solving problems. The factorial of a number n, written as n!, is the result of multiplying all the whole numbers from 1 up to n.

/*
n! = n * (n-1)* n(n-2)*
*/

// function factNumb(fact) {
//   if (fact < 0) {
//     throw new Error("Input number should be greater or equarl to zero.");
//   }

//   let result = 1;
//   for (let i = 1; i <= fact; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factNumb(4));
// console.log(factNumb(6));
// console.log(factNumb(0));
// console.log(factNumb(1));
// // console.log(factNumb(-1));

// Recursive function

function factorialNum(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialNum(num - 1);
}

console.log(factorialNum(4));
console.log(factorialNum(6));
console.log(factorialNum(0));
console.log(factorialNum(1));
