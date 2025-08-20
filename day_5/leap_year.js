// function findLeapYear(year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return "leap year";
//   } else if (year % 400 === 0) {
//     return "leap year";
//   } else {
//     return "not a leap year";
//   }
// }

// console.log(findLeapYear(2024));

function isLeapYear(year) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    console.log(year, "Is leap year.");
  } else {
    console.log(year, "Is not leap year.");
  }
}

console.log(isLeapYear(2025));
