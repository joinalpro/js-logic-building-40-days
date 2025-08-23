// Write a function that generates and prints a multiplication table for a given number up to a specified range.
// Input: 2 Positive Numbers
// Table of
// Table till
// Return: Nothing

// function multiplicationTable(tableOf, tableTill) {
//   for (let i = 1; i <= tableTill; i++) {
//     console.log(`${tableOf} * ${i} = ${tableOf * i}`);
//   }
// }

// console.log(multiplicationTable(4, 10));

function multiplicationTable(tableOf, tableTill) {
  for (let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
    console.log(i);
  }
}

console.log(multiplicationTable(4, 10));
