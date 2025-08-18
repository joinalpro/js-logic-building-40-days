// function reverseString(str) {
//   if (typeof str !== "string") {
//     throw new Error("Only string will run");
//     // return "invalid";
//   }

//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(reverseString(11));

// function reverseString(str) {
//   let myStr = str.split("").reverse().join("");
//   console.log(myStr);
// }

// console.log(reverseString("joinal"));

function reverseStringTwo(str2) {
  const splittedInput = str2.split("");
  const reverseArray = splittedInput.reverse();
  const joinArray = reverseArray.join("");
  console.log(joinArray);
}
console.log(reverseStringTwo);
console.log(reverseStringTwo("Joinal"));
console.log(reverseStringTwo("Software Development"));
